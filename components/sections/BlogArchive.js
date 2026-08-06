import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/data/articles";
import { ArrowRightIcon } from "../icons";
import { localizedHref } from "@/lib/i18n";

const content = {
  es: {
    eyebrow: "Spectrum",
    heading: "Blog",
    lead: "Artículos técnicos sobre infraestructura, ciberseguridad, conectividad e inteligencia artificial escritos por nuestro equipo.",
    featured: "Destacado",
    readArticle: "Leer artículo",
  },
  en: {
    eyebrow: "Spectrum",
    heading: "Blog",
    lead: "Technical articles on infrastructure, cybersecurity, connectivity and artificial intelligence written by our team.",
    featured: "Featured",
    readArticle: "Read article",
  },
};

export default function BlogArchive({ locale = "es" }) {
  const articles = getArticles(locale);
  const t = content[locale] || content.es;
  const [featured, ...rest] = articles;

  return (
    <section className="on-light pattern-bg" id="blog-archive">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
          <p className="gray-500">{t.lead}</p>
        </div>

        {featured && (
          <article className="news-featured">
            <div className="blog-thumb news-featured-thumb">
              {featured.bg && (
                <Image
                  src={featured.bg}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="blog-thumb-bg"
                />
              )}
              <span>{featured.category}</span>
            </div>
            <div className="news-featured-body blog-body">
              <p className="date">
                {t.featured} &middot; {featured.date}
              </p>
              <h3>{featured.title}</h3>
              <p className="news-excerpt">{featured.excerpt}</p>
              <Link
                className="more"
                href={localizedHref(locale, `/blog/${featured.slug}`)}
              >
                {t.readArticle} <ArrowRightIcon size={13} />
              </Link>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list">
            {rest.map((article) => (
              <article className="news-list-item" key={article.slug}>
                <div className="blog-thumb news-list-thumb">
                  {article.bg && (
                    <Image
                      src={article.bg}
                      alt=""
                      fill
                      sizes="160px"
                      className="blog-thumb-bg"
                    />
                  )}
                  <span>{article.category}</span>
                </div>
                <div className="news-list-body blog-body">
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
        )}
      </div>
    </section>
  );
}
