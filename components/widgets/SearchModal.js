"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon, CloseIcon, ArrowRightIcon } from "../icons";
import { search } from "@/lib/search-index";

const content = {
  es: {
    placeholder: "Buscar soluciones, equipo, blog...",
    noResults: (query) => `No encontramos resultados para "${query}".`,
    searchLabel: "Buscar",
    close: "Cerrar",
    dialogLabel: "Buscar en el sitio",
  },
  en: {
    placeholder: "Search solutions, team, blog...",
    noResults: (query) => `We couldn't find any results for "${query}".`,
    searchLabel: "Search",
    close: "Close",
    dialogLabel: "Search the site",
  },
};

export default function SearchModal({ inline = false, locale = "es" }) {
  const t = content[locale] || content.es;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = search(query, locale);

  function close() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    if (inline || !open) return undefined;
    function handleKeydown(event) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [inline, open]);

  useEffect(() => {
    if (!inline && open) inputRef.current?.focus();
  }, [inline, open]);

  useEffect(() => {
    if (inline || !open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [inline, open]);

  if (inline) {
    return (
      <div className="search-inline">
        <div className="search-input-row">
          <SearchIcon size={17} />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.placeholder}
            autoComplete="off"
          />
        </div>

        {query.trim() && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="search-empty">{t.noResults(query)}</p>
            ) : (
              results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="search-result"
                  onClick={() => setQuery("")}
                >
                  <div>
                    <strong>{result.title}</strong>
                    <small>{result.description}</small>
                  </div>
                  <ArrowRightIcon size={14} />
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className="icon-btn"
        aria-label={t.searchLabel}
        onClick={() => setOpen(true)}
      >
        <SearchIcon size={15} />
      </button>

      {open && (
        <div className="modal-overlay search-overlay" onClick={close}>
          <div
            className="modal-card search-card"
            role="dialog"
            aria-modal="true"
            aria-label={t.dialogLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label={t.close}
              onClick={close}
            >
              <CloseIcon size={16} />
            </button>

            <div className="search-input-row">
              <SearchIcon size={17} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.placeholder}
                autoComplete="off"
              />
            </div>

            {query.trim() && (
              <div className="search-results">
                {results.length === 0 ? (
                  <p className="search-empty">{t.noResults(query)}</p>
                ) : (
                  results.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      className="search-result"
                      onClick={close}
                    >
                      <div>
                        <strong>{result.title}</strong>
                        <small>{result.description}</small>
                      </div>
                      <ArrowRightIcon size={14} />
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
