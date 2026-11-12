/* eslint-disable react-refresh/only-export-components -- módulo de servidor, no participa en Fast Refresh */
// Punto de entrada para el prerenderizado (scripts/prerender.mjs).
// Genera el HTML de cada ruta en tiempo de build para que los buscadores
// reciban el contenido sin tener que ejecutar JavaScript.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { SERVICE_CATEGORIES, getServiceById } from './data/cetecpData';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL,
  serviceMeta,
  type PageMeta,
} from './lib/usePageMeta';

export { SITE_URL };

export const NOT_FOUND_PATH = '/404';

// Todas las rutas reales del sitio: portada + una por servicio
export const routes: string[] = [
  '/',
  ...SERVICE_CATEGORIES.flatMap((category) =>
    category.services.map((service) => `/servicios/${service.id}`)
  ),
];

export function getMeta(path: string): Required<PageMeta> {
  const base = { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path, noindex: false };
  if (path === '/') return base;

  const match = path.match(/^\/servicios\/([^/]+)$/);
  const serviceData = match ? getServiceById(match[1]) : null;
  if (serviceData) return { ...base, ...serviceMeta(serviceData.service) };

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
