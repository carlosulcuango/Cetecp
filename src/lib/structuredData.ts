// Datos estructurados (JSON-LD) por página. Solo se usan en el prerenderizado:
// Google los lee del HTML estático, así que no hace falta cargarlos en el navegador.
import type { ServiceCategory, ServiceItem, Therapist } from '../data/cetecpData';
import { SERVICE_EXTRAS } from '../data/serviceExtras';
import { SITE_URL } from './usePageMeta';

const organization = {
  '@type': 'MedicalBusiness',
  name: 'CETECP',
  url: `${SITE_URL}/`,
};

const breadcrumbs = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export function serviceJsonLd(service: ServiceItem, category: ServiceCategory): object[] {
  const url = `${SITE_URL}/servicios/${service.id}`;
  const faqs = SERVICE_EXTRAS[service.id]?.faqs ?? [];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.overview || service.description,
      serviceType: category.title,
      url,
      provider: organization,
      areaServed: { '@type': 'City', name: 'Quito' },
      ...(service.targetAudience
        ? { audience: { '@type': 'Audience', audienceType: service.targetAudience } }
        : {}),
    },
    breadcrumbs([
      { name: 'Inicio', url: `${SITE_URL}/` },
      { name: category.title, url: `${SITE_URL}/#servicios` },
      { name: service.title, url },
    ]),
    ...(faqs.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
        ]
      : []),
  ];
}

export function therapistJsonLd(therapist: Therapist): object[] {
  const url = `${SITE_URL}/equipo/${therapist.id}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: therapist.name,
      jobTitle: therapist.title,
      description: therapist.bio,
      image: `${SITE_URL}${therapist.image}`,
      url,
      worksFor: organization,
      knowsAbout: therapist.specialties,
      ...(therapist.linkedinUrl ? { sameAs: [therapist.linkedinUrl] } : {}),
    },
    breadcrumbs([
      { name: 'Inicio', url: `${SITE_URL}/` },
      { name: 'Nuestro Equipo', url: `${SITE_URL}/#equipo` },
      { name: therapist.name, url },
    ]),
  ];
}
