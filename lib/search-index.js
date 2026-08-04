import { solutions } from "@/data/solutions-data";

const staticEntries = [
  {
    title: "Nosotros",
    description: "Quiénes somos y qué nos mueve como ecosistema tecnológico.",
    href: "/nosotros",
    keywords: "about ecosistema filosofia",
  },
  {
    title: "Soluciones",
    description: "Las cinco unidades de negocio de Spectrum, en un solo lugar.",
    href: "/#soluciones",
    keywords: "servicios unidades de negocio",
  },
  {
    title: "Nuestros principales clientes",
    description: "Organizaciones que confían en Spectrum.",
    href: "/#casos",
    keywords: "clientes referencias exito casos",
  },
  {
    title: "Aliados tecnológicos",
    description: "Los fabricantes y marcas que respaldan nuestras soluciones.",
    href: "/#aliados",
    keywords: "partners logos marcas fabricantes",
  },
  {
    title: "Blog",
    description: "Artículos técnicos escritos por nuestro equipo.",
    href: "/#blog",
    keywords: "articulos contenido recursos",
  },
  {
    title: "Novedades",
    description: "Noticias y lanzamientos de Spectrum.",
    href: "/novedades",
    keywords: "noticias lanzamientos boletin",
  },
  {
    title: "Nuestro equipo",
    description: "Las personas detrás de Spectrum.",
    href: "/equipo",
    keywords: "equipo directivo liderazgo team",
  },
  {
    title: "Contacto",
    description: "Hablemos de la evolución de su infraestructura.",
    href: "/#contacto",
    keywords: "contactar asesoria whatsapp mesa de ayuda",
  },
  {
    title: "Política de Tratamiento de Datos Personales",
    description: "Cómo protegemos y usamos tus datos personales.",
    href: "/politica-de-datos",
    keywords: "privacidad datos personales habeas data",
  },
];

const solutionEntries = solutions.map((solution) => ({
  title: solution.title,
  description: solution.desc,
  href: `/soluciones/${solution.slug}`,
  keywords: solution.tags.join(" "),
}));

export const searchIndex = [...staticEntries, ...solutionEntries];

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function search(query) {
  const q = normalize(query).trim();
  if (!q) return [];

  return searchIndex
    .map((entry) => {
      const haystack = normalize(
        `${entry.title} ${entry.description} ${entry.keywords}`
      );
      const titleMatch = normalize(entry.title).includes(q);
      const match = haystack.includes(q);
      return { entry, match, score: titleMatch ? 2 : match ? 1 : 0 };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.entry);
}
