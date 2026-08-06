import { getSiteUrl } from "@/lib/site-url";
import { solutions } from "@/data/solutions-data";
import { articles } from "@/data/articles";
import { news } from "@/data/news";

const staticPaths = [
  "",
  "/nosotros",
  "/equipo",
  "/novedades",
  "/blog",
  "/politica-de-datos",
];

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const entriesFor = (prefix) => {
    const staticRoutes = staticPaths.map((path) => ({
      url: `${siteUrl}${prefix}${path}`,
      lastModified: now,
    }));

    const solutionRoutes = solutions.map((solution) => ({
      url: `${siteUrl}${prefix}/soluciones/${solution.slug}`,
      lastModified: now,
    }));

    const articleRoutes = articles.map((article) => ({
      url: `${siteUrl}${prefix}/blog/${article.slug}`,
      lastModified: now,
    }));

    const newsRoutes = news.map((item) => ({
      url: `${siteUrl}${prefix}/novedades/${item.slug}`,
      lastModified: now,
    }));

    return [...staticRoutes, ...solutionRoutes, ...articleRoutes, ...newsRoutes];
  };

  return [...entriesFor(""), ...entriesFor("/en")];
}
