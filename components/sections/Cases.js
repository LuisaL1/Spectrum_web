"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const casesEs = [
  {
    name: "Alcaldía de Yumbo",
    meta: "Continuidad de negocio & NOC",
    tag: "Sector gobierno",
    sector: "gobierno",
    title: "Alcaldía de Yumbo fortalece su continuidad operativa",
    desc: "Implementación de infraestructura de respaldo y monitoreo continuo para garantizar disponibilidad de servicios críticos a la ciudadanía.",
    bg: "/assets/images/alcaldiayumbo.webp",
  },
  {
    name: "Universidad Militar Nueva Granada",
    meta: "Redes empresariales & ciberseguridad",
    tag: "Sector educación",
    sector: "educacion",
    title:
      "Redes empresariales de alto rendimiento para un campus más seguro",
    desc: "Rediseño de la arquitectura de red y despliegue de controles de ciberseguridad perimetral en todas las sedes.",
    bg: "/assets/images/universidad-militar.jpg",
  },
  {
    name: "Redeban",
    meta: "Infraestructura crítica & SOC",
    tag: "Sector financiero",
    sector: "financiero",
    title: "Infraestructura crítica con disponibilidad garantizada",
    desc: "Monitoreo NOC y SOC 24/7 sobre la infraestructura que soporta transacciones a nivel nacional.",
    bg: "/assets/images/redeban.webp",
  },
  {
    name: "Armada de Colombia",
    meta: "Protección perimetral",
    tag: "Sector defensa",
    sector: "defensa",
    title: "Protección perimetral de infraestructura estratégica",
    desc: "Implementación de sistemas de detección y prevención de intrusos para blindar el perímetro digital.",
    bg: "/assets/images/armada-colombia.jpeg",
  },
];

const casesEn = [
  {
    name: "Alcaldía de Yumbo",
    meta: "Business continuity & NOC",
    tag: "Government sector",
    sector: "gobierno",
    title: "Alcaldía de Yumbo strengthens its operational continuity",
    desc: "Deployment of backup infrastructure and continuous monitoring to guarantee availability of critical services to citizens.",
    bg: "/assets/images/alcaldiayumbo.webp",
  },
  {
    name: "Universidad Militar Nueva Granada",
    meta: "Enterprise networks & cybersecurity",
    tag: "Education sector",
    sector: "educacion",
    title: "High-performance enterprise networks for a safer campus",
    desc: "Redesign of the network architecture and deployment of perimeter cybersecurity controls across all campuses.",
    bg: "/assets/images/universidad-militar.jpg",
  },
  {
    name: "Redeban",
    meta: "Critical infrastructure & SOC",
    tag: "Financial sector",
    sector: "financiero",
    title: "Critical infrastructure with guaranteed availability",
    desc: "24/7 NOC and SOC monitoring over the infrastructure that supports nationwide transactions.",
    bg: "/assets/images/redeban.webp",
  },
  {
    name: "Colombian Navy",
    meta: "Perimeter protection",
    tag: "Defense sector",
    sector: "defensa",
    title: "Perimeter protection for strategic infrastructure",
    desc: "Deployment of intrusion detection and prevention systems to shield the digital perimeter.",
    bg: "/assets/images/armada-colombia.jpeg",
  },
];

const content = {
  es: {
    eyebrow: "Nuestros principales clientes",
    heading: "Organizaciones que confían en Spectrum",
    lead: "Entidades públicas y privadas que fortalecieron su infraestructura y seguridad con nuestro acompañamiento.",
    ariaLabel: "Selector de casos de éxito",
  },
  en: {
    eyebrow: "Our leading clients",
    heading: "Organizations that trust Spectrum",
    lead: "Public and private entities that strengthened their infrastructure and security with our support.",
    ariaLabel: "Success story selector",
  },
};

export default function Cases({ initialSector = null, locale = "es" }) {
  const cases = locale === "en" ? casesEn : casesEs;
  const t = content[locale] || content.es;
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = cases.findIndex((item) => item.sector === initialSector);
    return index === -1 ? 0 : index;
  });
  const active = cases[activeIndex];

  useEffect(() => {
    if (!initialSector) return;
    const index = cases.findIndex((item) => item.sector === initialSector);
    if (index !== -1) setActiveIndex(index);
  }, [initialSector, cases]);

  return (
    <section className="on-graphite" id="casos">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
          <p>{t.lead}</p>
        </div>
        <div className="cases">
          <div className="case-visual">
            {cases.map(
              (item, index) =>
                item.bg && (
                  <Image
                    key={item.bg}
                    src={item.bg}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    priority
                    className={`case-visual-bg${
                      index === activeIndex ? " is-active" : ""
                    }`}
                  />
                )
            )}
            <Image
              className="case-logo"
              src="/logos/logo-spectrum-favicon.png"
              alt=""
              aria-hidden="true"
              width={512}
              height={512}
            />
            <div className="case-content">
              <p className="case-tag">{active.tag}</p>
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
            </div>
          </div>
          <div
            className="case-side"
            role="group"
            aria-label={t.ariaLabel}
          >
            {cases.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`case-item${index === activeIndex ? " active" : ""}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <b>{item.name}</b>
                <span>{item.meta}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
