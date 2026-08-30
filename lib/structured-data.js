import { getSiteUrl } from "./site-url";

const SITE_URL = getSiteUrl();

// Schema.org Organization: se renderiza una vez en el layout raiz para que
// Google pueda asociar el sitio a una entidad de empresa (logo en resultados
// de busqueda, panel de conocimiento).
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spectrum",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-spectrum.png`,
    description:
      "Ecosistema tecnológico de infraestructura, ciberseguridad y conectividad para organizaciones públicas y privadas.",
  };
}

// Schema.org BreadcrumbList: items es un arreglo de { name, path } con la
// ruta ya localizada (incluyendo el prefijo /en si aplica). Habilita que
// Google muestre la migaja de pan en el resultado de busqueda en vez de la
// URL completa.
export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
