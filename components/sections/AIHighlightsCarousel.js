"use client";

import { useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const highlightsEs = [
  {
    num: "01",
    title: "Automatización de tareas",
    desc: "Ahorra tiempo y reduce costos.",
  },
  {
    num: "02",
    title: "Análisis avanzado",
    desc: "Descubre patrones ocultos en tus datos.",
  },
  {
    num: "03",
    title: "Experiencias personalizadas",
    desc: "Mejora la relación con tus clientes.",
  },
  {
    num: "04",
    title: "Seguridad inteligente",
    desc: "Protege tu negocio con sistemas de detección avanzada.",
  },
];

const highlightsEn = [
  {
    num: "01",
    title: "Task automation",
    desc: "Save time and cut costs.",
  },
  {
    num: "02",
    title: "Advanced analytics",
    desc: "Uncover hidden patterns in your data.",
  },
  {
    num: "03",
    title: "Personalized experiences",
    desc: "Strengthen the relationship with your customers.",
  },
  {
    num: "04",
    title: "Intelligent security",
    desc: "Protect your business with advanced detection systems.",
  },
];

const labels = {
  es: { prev: "Ver highlight anterior", next: "Ver siguiente highlight", goTo: (title) => `Ir al highlight ${title}` },
  en: { prev: "View previous highlight", next: "View next highlight", goTo: (title) => `Go to ${title} highlight` },
};

const total = highlightsEs.length;

function positionOf(index, active) {
  const offset = (index - active + total) % total;
  if (offset === 0) return "active";
  if (offset === 1) return "next";
  if (offset === total - 1) return "prev";
  return "hidden";
}

const SWIPE_THRESHOLD = 40;

export default function AIHighlightsCarousel({ locale = "es" }) {
  const highlights = locale === "en" ? highlightsEn : highlightsEs;
  const l = labels[locale] || labels.es;
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  function go(direction) {
    setActive((current) => (current + direction + total) % total);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) go(-1);
    else if (deltaX < -SWIPE_THRESHOLD) go(1);
    touchStartX.current = null;
  }

  return (
    <div className="ai-carousel">
      <div
        className="ai-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {highlights.map((item, index) => (
          <div
            className={`ai-carousel-card is-${positionOf(index, active)}`}
            key={item.num}
          >
            <p className="num">{item.num}</p>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="ai-carousel-controls">
        <button
          type="button"
          className="ai-carousel-btn"
          aria-label={l.prev}
          onClick={() => go(-1)}
        >
          <ArrowRightIcon size={16} style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className="ai-carousel-dots">
          {highlights.map((item, index) => (
            <button
              key={item.num}
              type="button"
              className={`ai-carousel-dot${index === active ? " active" : ""}`}
              aria-label={l.goTo(item.title)}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="ai-carousel-btn"
          aria-label={l.next}
          onClick={() => go(1)}
        >
          <ArrowRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}
