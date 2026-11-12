import { useEffect } from 'react';

export const SITE_URL = 'https://cetecp.vercel.app';
export const DEFAULT_TITLE = 'CETECP | Centro Psicológico Integral';
export const DEFAULT_DESCRIPTION =
  'CETECP - Centro de Evaluación y Terapia Emocional, Conductual y Psicopedagógica en San Antonio de Pichincha, Quito. Atención profesional y confidencial en salud mental para niños, adultos, parejas y familias.';

interface PageMeta {
  title?: string;
  description?: string;
  /** Ruta de la página, p. ej. "/servicios/terapia-pareja" */
  path?: string;
  /** true para páginas que no deben indexarse (404) */
  noindex?: boolean;
}

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

// Actualiza título, descripción, canonical y Open Graph de la página actual
export function usePageMeta({ title, description, path = '/', noindex = false }: PageMeta) {
  useEffect(() => {
    const finalTitle = title ?? DEFAULT_TITLE;
    const finalDescription = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;

    document.title = finalTitle;
    setAttr('meta[name="description"]', 'content', finalDescription);
    setAttr('meta[property="og:title"]', 'content', finalTitle);
    setAttr('meta[property="og:description"]', 'content', finalDescription);
    setAttr('meta[property="og:url"]', 'content', url);
    setAttr('link[rel="canonical"]', 'href', url);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex';
    } else {
      robots?.remove();
    }
  }, [title, description, path, noindex]);
}
