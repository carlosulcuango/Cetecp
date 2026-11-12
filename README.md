# CETECP — sitio web

Sitio del Centro de Evaluación y Terapia Emocional, Conductual y Psicopedagógica (San Antonio de Pichincha, Quito). Publicado en <https://cetecp.vercel.app>.

React 18 + TypeScript + Vite + Tailwind CSS. Las reseñas se guardan en Supabase.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # y completar los dos valores de Supabase
npm run dev
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local con recarga |
| `npm run build` | Verifica tipos y genera `dist/` |
| `npm run lint` | ESLint |
| `npm run preview` | Sirve el build localmente |

## Estructura

- `src/data/cetecpData.ts` — todo el contenido: datos del centro, terapeutas y catálogo de servicios. Para añadir o editar un servicio basta con tocar este archivo.
- `src/pages/` — portada (`Home`), detalle de servicio (`ServiceDetail`) y página 404 (`NotFound`).
- `src/components/` — barra de navegación, pie de página y modales.
- `src/lib/reviews.ts` — lectura y envío de reseñas contra la API REST de Supabase.
- `supabase/moderacion_resenas.sql` — trigger de moderación y políticas de acceso de la tabla `reseñas`.
- `vercel.json` — cabeceras de seguridad, caché y la regla que sirve `index.html` en todas las rutas.

## Reseñas

Las reseñas se aprueban automáticamente al enviarse, salvo que contengan insultos, groserías o enlaces; esas quedan con `aprobado = false`. La decisión la toma un trigger en la base de datos, no el navegador.

- Para aprobar a mano una reseña retenida: Supabase → Table Editor → `reseñas` → poner `aprobado` en `true`.
- Para cambiar la lista de palabras: editar `supabase/moderacion_resenas.sql` y volver a ejecutarlo en el SQL Editor.

## Al añadir un servicio

Añadir también su URL en `public/sitemap.xml` (`/servicios/<id>`).

## Despliegue

Vercel despliega automáticamente cada push a `main`. Las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` están configuradas en el proyecto de Vercel.
