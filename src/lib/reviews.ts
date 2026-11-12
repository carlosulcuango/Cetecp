// Acceso a la tabla de reseñas mediante la API REST de Supabase.
// Se usa fetch directo en lugar de @supabase/supabase-js para no cargar
// ~200 kB de librería solo para dos peticiones.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isReviewsBackendConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const endpoint = `${supabaseUrl}/rest/v1/${encodeURIComponent('reseñas')}`;

const baseHeaders = (): Record<string, string> => ({
  apikey: supabaseAnonKey ?? '',
  Authorization: `Bearer ${supabaseAnonKey ?? ''}`,
});

export interface ReviewRow {
  id?: string | number;
  nombre?: string;
  servicio?: string;
  calificacion?: number | string;
  comentario?: string;
  created_at?: string;
}

export interface NewReview {
  nombre: string;
  servicio: string;
  comentario: string;
  calificacion: number;
}

export async function fetchApprovedReviews(): Promise<ReviewRow[]> {
  const params = new URLSearchParams({
    select: 'id,nombre,servicio,calificacion,comentario,created_at',
    aprobado: 'eq.true',
    order: 'created_at.desc',
    limit: '50',
  });
  const response = await fetch(`${endpoint}?${params}`, { headers: baseHeaders() });
  if (!response.ok) {
    throw new Error(`Error ${response.status} al cargar reseñas`);
  }
  return (await response.json()) as ReviewRow[];
}

export async function insertReview(review: NewReview): Promise<void> {
  // La aprobación la decide un trigger en la base (supabase/moderacion_resenas.sql):
  // aprueba sola la reseña salvo que contenga insultos o enlaces.
  // Se envía false para que, si el trigger no existiera, nada se publique sin filtro.
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...baseHeaders(),
      'Content-Type': 'application/json',
      // return=minimal: una reseña retenida no es legible por el público,
      // así que pedir la fila de vuelta haría fallar la petición
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ ...review, aprobado: false }),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status} al guardar la reseña`);
  }
}
