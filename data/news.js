/*
  Noticias y anuncios de la empresa (alianzas, certificaciones, eventos).
  Los 3 elementos actuales son EJEMPLOS DE RELLENO para probar la
  estructura — reemplazarlos por noticias reales de Spectrum.
*/

export const news = [
  {
    slug: "alianza-crowdstrike-respuesta-incidentes",
    category: "Alianzas",
    date: "Julio 2026",
    title: "Spectrum se certifica como aliado de CrowdStrike en respuesta a incidentes",
    excerpt:
      "La certificación refuerza nuestra capacidad de contención y respuesta ante incidentes de ciberseguridad para clientes en Colombia.",
    content: [
      {
        body: "(Contenido de ejemplo) Spectrum anuncia su certificación como aliado especializado en respuesta a incidentes junto a CrowdStrike, fortaleciendo la capacidad de nuestro SOC 24/7 para contener amenazas activas en tiempo real.",
      },
    ],
  },
  {
    slug: "certificacion-iso-27001-soc",
    category: "Certificaciones",
    date: "Junio 2026",
    title: "Nuestro Centro de Operaciones de Seguridad obtiene la certificación ISO 27001",
    excerpt:
      "El SOC de Spectrum certifica sus procesos de gestión de seguridad de la información bajo el estándar internacional ISO 27001.",
    content: [
      {
        body: "(Contenido de ejemplo) Esta certificación valida los controles y procesos de seguridad de la información que aplicamos internamente y en el servicio a nuestros clientes, alineados con el estándar ISO/IEC 27001.",
      },
    ],
  },
  {
    slug: "participacion-congreso-ciberseguridad-2026",
    category: "Eventos",
    date: "Mayo 2026",
    title: "Spectrum participa en el Congreso Colombiano de Ciberseguridad 2026",
    excerpt:
      "Nuestro equipo compartió casos de estudio sobre continuidad operativa y respuesta a incidentes en el sector público.",
    content: [
      {
        body: "(Contenido de ejemplo) Representantes de Spectrum presentaron casos reales de implementación de infraestructura de respaldo y monitoreo NOC/SOC en entidades del sector público colombiano.",
      },
    ],
  },
];

export const newsEn = [
  {
    slug: "alianza-crowdstrike-respuesta-incidentes",
    category: "Partnerships",
    date: "July 2026",
    title: "Spectrum becomes a certified CrowdStrike incident response partner",
    excerpt:
      "The certification strengthens our containment and cybersecurity incident response capabilities for clients in Colombia.",
    content: [
      {
        body: "(Sample content) Spectrum announces its certification as a specialized incident response partner alongside CrowdStrike, strengthening our 24/7 SOC's ability to contain active threats in real time.",
      },
    ],
  },
  {
    slug: "certificacion-iso-27001-soc",
    category: "Certifications",
    date: "June 2026",
    title: "Our Security Operations Center earns ISO 27001 certification",
    excerpt:
      "Spectrum's SOC certifies its information security management processes under the international ISO 27001 standard.",
    content: [
      {
        body: "(Sample content) This certification validates the information security controls and processes we apply internally and in service to our clients, aligned with the ISO/IEC 27001 standard.",
      },
    ],
  },
  {
    slug: "participacion-congreso-ciberseguridad-2026",
    category: "Events",
    date: "May 2026",
    title: "Spectrum takes part in the 2026 Colombian Cybersecurity Congress",
    excerpt:
      "Our team shared case studies on operational continuity and incident response in the public sector.",
    content: [
      {
        body: "(Sample content) Spectrum representatives presented real implementation cases of backup infrastructure and NOC/SOC monitoring in Colombian public sector entities.",
      },
    ],
  },
];

export function getNews(locale = "es") {
  return locale === "en" ? newsEn : news;
}

export function getNewsItemBySlug(slug, locale = "es") {
  return getNews(locale).find((item) => item.slug === slug);
}
