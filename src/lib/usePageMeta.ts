import { useEffect } from 'react';

export const SITE_URL = 'https://cetecp.vercel.app';
export const DEFAULT_TITLE = 'Psicólogos en San Antonio de Pichincha, Quito | CETECP';
export const DEFAULT_DESCRIPTION =
  'CETECP: centro psicológico y psicopedagógico en San Antonio de Pichincha (Mitad del Mundo), norte de Quito. Terapia y evaluación para niños, adolescentes, adultos, parejas y familias. Agenda tu cita por WhatsApp.';

export interface PageMeta {
  title?: string;
  description?: string;
  /** Ruta de la página, p. ej. "/servicios/terapia-pareja" */
  path?: string;
  /** true para páginas que no deben indexarse (404) */
  noindex?: boolean;
}

// Metadatos de una página de servicio (los usan el navegador y el prerenderizado)
export const serviceMeta = (service: { id: string; title: string; description: string }): PageMeta => ({
  title: `${service.title} en Quito | CETECP`,
  description: `${service.description} Atención profesional en CETECP, San Antonio de Pichincha, Quito.`,
  path: `/servicios/${service.id}`,
});

// "NEUROPSICÓLOGA CLÍNICA" -> "Neuropsicóloga Clínica"
const toTitleCase = (text: string) =>
  text.toLowerCase().replace(/(^|\s)\p{L}/gu, (letter) => letter.toUpperCase());

export const therapistMeta = (therapist: {
  id: string;
  name: string;
  title: string;
  bio: string;
}): PageMeta => ({
  title: `${therapist.name} — ${toTitleCase(therapist.title)} en Quito | CETECP`,
  description: `${therapist.bio} Agenda tu consulta en CETECP, San Antonio de Pichincha, Quito.`,
  path: `/equipo/${therapist.id}`,
});

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
