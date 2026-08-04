import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";
import { ArrowRightIcon } from "@/components/icons";
import { news, getNewsItemBySlug } from "@/data/news";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} | Spectrum`,
    description: item.excerpt,
  };
}

export default async function NewsItemPage({ params }) {
  const { slug } = await params;
  const item = getNewsItemBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="on-light pattern-bg article-doc">
          <div className="wrap article-wrap">
            <Link className="article-back" href="/novedades">
              <ArrowRightIcon size={13} className="article-back-icon" />
              Volver a Novedades
            </Link>
            <p className="eyebrow">{item.category}</p>
            <h1>{item.title}</h1>
            <p className="article-meta">{item.date}</p>
            <p className="article-lead">{item.excerpt}</p>

            {item.bg && (
              <div className="article-image">
                <Image
                  src={item.bg}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 760px"
                  priority
                />
              </div>
            )}

            {item.content.map((block, index) => (
              <div key={index}>
                {block.heading && <h2>{block.heading}</h2>}
                <p>{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
