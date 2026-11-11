-- Moderación automática de reseñas de CETECP
-- Ejecutar una sola vez en Supabase: panel del proyecto → SQL Editor → pegar → Run.
--
-- Qué hace:
--   1. Cada reseña nueva se aprueba sola, salvo que contenga insultos,
--      groserías o enlaces; en ese caso queda con aprobado = false.
--   2. La decisión se toma en la base de datos, así que no se puede saltar
--      desde el navegador.
--   3. El público solo puede leer reseñas aprobadas e insertar nuevas;
--      no puede editar ni borrar.
--
-- Para aprobar a mano una reseña retenida: Table Editor → reseñas →
-- cambiar aprobado a true (el trigger solo actúa al insertar).

create or replace function public.moderar_resena()
returns trigger
language plpgsql
as $$
declare
  texto text;
begin
  texto := lower(coalesce(new.comentario, '') || ' ' || coalesce(new.nombre, ''));
  -- Quita tildes para que "imbécil" e "imbecil" se detecten igual
  texto := translate(texto, 'áàäâéèëêíìïîóòöôúùüûñ', 'aaaaeeeeiiiioooouuuun');

  new.aprobado :=
    -- Lista de palabras retenidas: se puede ampliar añadiendo más con "|"
    texto !~ ('\m(' ||
      'idiota|imbecil|estupid[oa]|tarad[oa]|pendej[oa]|cojud[oa]|huevon|guevon|' ||
      'put[oa]|hijueputa|hijuepucta|hdp|malparid[oa]|malnacid[oa]|bastard[oa]|' ||
      'mierda|verga|vergas|careverga|mamaverga|chucha|chuchas|carajo|cono|culo|culiad[oa]|' ||
      'cabron|cabrona|maricon|marica|zorra|perra|gonorrea|' ||
      'estafador|estafadora|ladron|ladrona|' ||
      'fuck|fucking|shit|bitch|asshole' ||
    ')(s|es)?\M')
    -- Enlaces: casi siempre son spam
    and texto !~ '(https?://|www\.)';

  return new;
end;
$$;

drop trigger if exists moderar_resena_antes_de_insertar on public."reseñas";
create trigger moderar_resena_antes_de_insertar
  before insert on public."reseñas"
  for each row execute function public.moderar_resena();

-- Permisos (RLS)
alter table public."reseñas" enable row level security;

-- Políticas originales, demasiado abiertas: dejaban leer también las no
-- aprobadas e insertar cualquier cosa. Se reemplazan por las de abajo.
drop policy if exists "Permitir lectura publica" on public."reseñas";
drop policy if exists "Permitir insertar a cualquiera" on public."reseñas";

drop policy if exists "publico lee resenas aprobadas" on public."reseñas";
create policy "publico lee resenas aprobadas"
  on public."reseñas" for select
  to anon, authenticated
  using (aprobado = true);

drop policy if exists "publico inserta resenas" on public."reseñas";
create policy "publico inserta resenas"
  on public."reseñas" for insert
  to anon, authenticated
  with check (
    char_length(comentario) between 1 and 1000
    and char_length(coalesce(nombre, '')) <= 80
    and calificacion between 1 and 5
  );
