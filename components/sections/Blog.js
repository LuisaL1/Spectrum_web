import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "../icons";
import { getArticles } from "@/data/articles";
import { localizedHref } from "@/lib/i18n";

const content = {
  es: {
    eyebrow: "Recursos",
    heading: "Blog & contenido técnico",
    lead: "Artículos mensuales sobre infraestructura, ciberseguridad y conectividad escritos por nuestro equipo.",
    readArticle: "Leer artículo",
    viewNews: "Ver novedades",
  },
  en: {
    eyebrow: "Resources",
    heading: "Blog & technical content",
    lead: "Monthly articles on infrastructure, cybersecurity and connectivity written by our team.",
    readArticle: "Read article",
    viewNews: "View news",
  },
};

export default function Blog({ locale = "es" }) {
  const articles = getArticles(locale);
  const t = content[locale] || content.es;

  return (
    <section className="on-light pattern-bg" id="blog">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
          <p className="gray-500">{t.lead}</p>
        </div>
        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className="blog-thumb">
                {article.bg && (
                  <Image
                    src={article.bg}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="blog-thumb-bg"
                  />
                )}
                <span>{article.category}</span>
              </div>
              <div className="blog-body">
                <p className="date">{article.date}</p>
                <h3>{article.title}</h3>
                <Link
                  className="more"
                  href={localizedHref(locale, `/blog/${article.slug}`)}
                >
                  {t.readArticle} <ArrowRightIcon size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-footer-cta">
          <Link href={localizedHref(locale, "/novedades")} className="btn btn-primary">
            {t.viewNews}
          </Link>
        </div>
      </div>
    </section>
  );
}
