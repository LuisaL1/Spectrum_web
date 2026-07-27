import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";
import InfoRequestForm from "@/components/widgets/InfoRequestForm";
import { CheckIcon } from "@/components/icons";
import { solutions, getSolutionBySlug } from "@/data/solutions-data";

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Spectrum`,
    description: solution.intro,
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="solution-hero">
          <Image
            src={solution.bg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="solution-hero-bg"
          />
          <div className="wrap">
            <p className="eyebrow">Unidad de negocio {solution.icon}</p>
            <h1>{solution.title}</h1>
            <p className="solution-tagline">{solution.tagline}</p>
            <p className="solution-intro">{solution.intro}</p>
            <div className="tags">
              {solution.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="solution-hero-actions">
              <a
                href="https://soporte.spectrumt.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Mesa de ayuda
              </a>
              <InfoRequestForm
                serviceName={solution.title}
                serviceSlug={solution.slug}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Qué incluye</p>
              <h2>Alcance de la solución</h2>
            </div>
            <div className="capability-grid">
              {solution.capabilities.map((item) => (
                <div className="capability-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="on-graphite">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Por qué Spectrum</p>
              <h2>El valor de trabajar con Spectrum</h2>
            </div>
            <ul className="value-list">
              {solution.values.map((value) => (
                <li key={value}>
                  <CheckIcon size={18} />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
