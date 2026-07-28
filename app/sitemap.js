import { getSiteUrl } from "@/lib/site-url";
import { solutions } from "@/data/solutions-data";
import { articles } from "@/data/articles";
import { news } from "@/data/news";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "",
    "/equipo",
    "/novedades",
    "/blog",
    "/politica-de-datos",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: `${siteUrl}/soluciones/${solution.slug}`,
    lastModified: now,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: now,
  }));

  const newsRoutes = news.map((item) => ({
    url: `${siteUrl}/novedades/${item.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...solutionRoutes, ...articleRoutes, ...newsRoutes];
}
