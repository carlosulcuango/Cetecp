/* eslint-disable react-refresh/only-export-components -- módulo de servidor, no participa en Fast Refresh */
// Punto de entrada para el prerenderizado (scripts/prerender.mjs).
// Genera el HTML de cada ruta en tiempo de build para que los buscadores
// reciban el contenido sin tener que ejecutar JavaScript.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { SERVICE_CATEGORIES, THERAPISTS, getServiceById, getTherapistById } from './data/cetecpData';
import { serviceJsonLd, therapistJsonLd } from './lib/structuredData';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
  serviceMeta,
  therapistMeta,
  type PageMeta,
} from './lib/usePageMeta';

export { SITE_URL };

export const NOT_FOUND_PATH = '/404';

// Todas las rutas reales del sitio: portada, una por servicio y una por terapeuta
export const routes: string[] = [
  '/',
  ...SERVICE_CATEGORIES.flatMap((category) =>
    category.services.map((service) => `/servicios/${service.id}`)
  ),
  ...THERAPISTS.map((therapist) => `/equipo/${therapist.id}`),
];

export interface RouteMeta extends Required<PageMeta> {
  /** Datos estructurados propios de la página (se suman a los del negocio en index.html) */
  jsonLd: object[];
}

export function getMeta(path: string): RouteMeta {
  const base: RouteMeta = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path,
    noindex: false,
    jsonLd: [],
  };
  if (path === '/') return base;

  const serviceMatch = path.match(/^\/servicios\/([^/]+)$/);
  const serviceData = serviceMatch ? getServiceById(serviceMatch[1]) : null;
  if (serviceData) {
    return {
      ...base,
      ...serviceMeta(serviceData.service),
      jsonLd: serviceJsonLd(serviceData.service, serviceData.category),
    };
  }

  const therapistMatch = path.match(/^\/equipo\/([^/]+)$/);
  const therapist = therapistMatch ? getTherapistById(therapistMatch[1]) : undefined;
  if (therapist) {
    return { ...base, ...therapistMeta(therapist), jsonLd: therapistJsonLd(therapist) };
  }

  return { ...base, title: 'Página no encontrada | CETECP', noindex: true };
}

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppContent />
      </StaticRouter>
    </StrictMode>
  );
}
