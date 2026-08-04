import { solutions } from "@/data/solutions-data";
import { articles } from "@/data/articles";
import { news } from "@/data/news";

const CASOS_DE_USO = [
  { slug: "infraestructura-tecnologica", title: "Hiperconvergencia (HCI)" },
  { slug: "infraestructura-tecnologica", title: "Continuidad y respaldo" },
  { slug: "ciberseguridad", title: "SOC 24/7" },
  { slug: "ciberseguridad", title: "Hacking ético / Pentesting" },
  { slug: "conectividad", title: "SD-WAN" },
  { slug: "conectividad", title: "Conectividad cifrada de extremo a extremo" },
  { slug: "servicios-de-ti", title: "Mesa de ayuda" },
  { slug: "servicios-de-ti", title: "Consultoría estratégica" },
  { slug: "inteligencia-artificial", title: "Automatización inteligente" },
  { slug: "inteligencia-artificial", title: "IA aplicada a ciberseguridad" },
];

export const solutionsMenuColumns = [
  {
    heading: "Soluciones",
    items: [
      { title: "Ver todas las soluciones", href: "/#soluciones" },
      ...solutions.map((item) => ({
        title: item.title,
        desc: item.desc,
        href: `/soluciones/${item.slug}`,
      })),
    ],
  },
  {
    heading: "Casos de uso clave",
    items: CASOS_DE_USO.map((item) => ({
      title: item.title,
      href: `/soluciones/${item.slug}`,
    })),
  },
  {
    heading: "Clientes",
    items: [{ title: "Ver todos nuestros clientes", href: "/#casos" }],
  },
];

export const nosotrosMenuColumns = [
  {
    heading: "La empresa",
    items: [
      { title: "Quiénes somos", href: "/nosotros" },
      { title: "Nuestra historia", href: "/nosotros#historia" },
      { title: "Misión y visión", href: "/nosotros#mision-vision" },
    ],
  },
  {
    heading: "Equipo",
    items: [{ title: "Nuestro equipo", href: "/equipo" }],
  },
  {
    heading: "Resultados y alianzas",
    items: [
      { title: "Nuestros principales clientes", href: "/#casos" },
      { title: "Aliados tecnológicos", href: "/#aliados" },
      { title: "Novedades", href: "/novedades" },
    ],
  },
];

export const blogMenuColumns = [
  {
    heading: "Blog técnico",
    items: articles.map((article) => ({
      title: article.category,
      desc: article.title,
      href: `/blog/${article.slug}`,
    })),
  },
  {
    heading: "Novedades Spectrum",
    items: news.map((item) => ({
      title: item.category,
      desc: item.title,
      href: `/novedades/${item.slug}`,
    })),
  },
  {
    heading: "Explorar",
    items: [
      { title: "Ver todo el blog", href: "/#blog" },
      { title: "Ver todas las novedades", href: "/novedades" },
      { title: "Contacto", href: "/#contacto" },
    ],
  },
];
