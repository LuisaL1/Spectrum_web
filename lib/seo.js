import { localizedHref } from "./i18n";

// Genera el canonical + las etiquetas hreflang (ES/EN/x-default) de una
// pagina a partir de su ruta logica sin prefijo de idioma (ej. "/nosotros",
// "/blog/mi-articulo", "/" para el home). Evita contenido duplicado entre
// "/" y "/en" a ojos de los buscadores.
export function buildAlternates(locale, path) {
  return {
    canonical: localizedHref(locale, path),
    languages: {
      es: localizedHref("es", path),
      en: localizedHref("en", path),
      "x-default": localizedHref("es", path),
    },
  };
}

// Logo compartido para las vistas previas de Open Graph/Twitter Card. Mismo
// archivo que ya usa app/layout.js como imagen por defecto.
const OG_IMAGE = {
  url: "/logos/logo-spectrum.png",
  width: 2172,
  height: 724,
  alt: "Spectrum",
};

// Genera openGraph + twitter especificos de una pagina, para que compartir
// un link en redes sociales muestre el titulo/descripcion reales de esa
// pagina en vez de la vista previa generica del layout raiz. Next.js no
// hace deep-merge de `openGraph` entre layout y pagina (si la pagina lo
// define, reemplaza el objeto completo), asi que cada pagina debe traer su
// propio bloque completo -- por eso este helper.
export function buildOpenGraph({ title, description, locale, path }) {
  return {
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "es_CO",
      url: localizedHref(locale, path),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
