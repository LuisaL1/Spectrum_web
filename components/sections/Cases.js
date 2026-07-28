"use client";

import { useState } from "react";
import Image from "next/image";

const cases = [
  {
    name: "Alcaldía de Yumbo",
    meta: "Continuidad de negocio & NOC",
    tag: "Sector gobierno",
    title: "Alcaldía de Yumbo fortalece su continuidad operativa",
    desc: "Implementación de infraestructura de respaldo y monitoreo continuo para garantizar disponibilidad de servicios críticos a la ciudadanía.",
    bg: "/assets/images/alcaldiayumbo.webp",
  },
  {
    name: "Universidad Militar Nueva Granada",
    meta: "Redes empresariales & ciberseguridad",
    tag: "Sector educación",
    title:
      "Redes empresariales de alto rendimiento para un campus más seguro",
    desc: "Rediseño de la arquitectura de red y despliegue de controles de ciberseguridad perimetral en todas las sedes.",
    bg: "/assets/images/universidad-militar.jpg",
  },
  {
    name: "Redeban",
    meta: "Infraestructura crítica & SOC",
    tag: "Sector financiero",
    title: "Infraestructura crítica con disponibilidad garantizada",
    desc: "Monitoreo NOC y SOC 24/7 sobre la infraestructura que soporta transacciones a nivel nacional.",
    bg: "/assets/images/redeban.webp",
  },
  {
    name: "Armada de Colombia",
    meta: "Protección perimetral",
    tag: "Sector defensa",
    title: "Protección perimetral de infraestructura estratégica",
    desc: "Implementación de sistemas de detección y prevención de intrusos para blindar el perímetro digital.",
    bg: "/assets/images/armada-colombia.jpeg",
  },
];

export default function Cases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = cases[activeIndex];

  return (
    <section className="on-graphite" id="casos">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Casos de éxito</p>
          <h2>Organizaciones que confían en Spectrum</h2>
          <p>
            Entidades públicas y privadas que fortalecieron su
            infraestructura y seguridad con nuestro acompañamiento.
          </p>
        </div>
        <div className="cases">
          <div className="case-visual">
            {active.bg && (
              <Image
                key={active.bg}
                src={active.bg}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="case-visual-bg"
              />
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
            aria-label="Selector de casos de éxito"
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
