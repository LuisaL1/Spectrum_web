import Link from "next/link";
import Image from "next/image";
import { getNews } from "@/data/news";
import { ArrowRightIcon } from "../icons";
import { localizedHref } from "@/lib/i18n";

const content = {
  es: {
    backHome: "Volver al home",
    eyebrow: "Spectrum",
    heading: "Novedades",
    lead: "Noticias, alianzas, certificaciones y eventos de Spectrum.",
    featured: "Destacado",
    readMore: "Leer más",
  },
  en: {
    backHome: "Back to home",
    eyebrow: "Spectrum",
    heading: "News",
    lead: "News, partnerships, certifications and events from Spectrum.",
    featured: "Featured",
    readMore: "Read more",
  },
};

export default function Novedades({ locale = "es" }) {
  const news = getNews(locale);
  const t = content[locale] || content.es;
  const [featured, ...rest] = news;

  return (
    <section className="on-light pattern-bg" id="novedades">
      <div className="wrap">
        <Link className="article-back" href={localizedHref(locale, "/#blog")}>
          <ArrowRightIcon size={13} className="article-back-icon" />
          {t.backHome}
        </Link>
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
                href={localizedHref(locale, `/novedades/${featured.slug}`)}
              >
                {t.readMore} <ArrowRightIcon size={13} />
              </Link>
            </div>
          </article>
        )}

        {rest.length > 0 && (
          <div className="news-list">
            {rest.map((item) => (
              <article className="news-list-item" key={item.slug}>
                <div className="blog-thumb news-list-thumb">
                  {item.bg && (
                    <Image
                      src={item.bg}
                      alt=""
                      fill
                      sizes="160px"
                      className="blog-thumb-bg"
                    />
                  )}
                  <span>{item.category}</span>
                </div>
                <div className="news-list-body blog-body">
                  <p className="date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <Link
                    className="more"
                    href={localizedHref(locale, `/novedades/${item.slug}`)}
                  >
                    {t.readMore} <ArrowRightIcon size={13} />
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
