"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon, CloseIcon, ArrowRightIcon } from "../icons";
import { search } from "@/lib/search-index";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = search(query);

  function close() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    if (!open) return undefined;
    function handleKeydown(event) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="icon-btn"
        aria-label="Buscar"
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
            aria-label="Buscar en el sitio"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Cerrar"
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
                placeholder="Buscar soluciones, equipo, blog..."
                autoComplete="off"
              />
            </div>

            {query.trim() && (
              <div className="search-results">
                {results.length === 0 ? (
                  <p className="search-empty">
                    No encontramos resultados para &quot;{query}&quot;.
                  </p>
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
