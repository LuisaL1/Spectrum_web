"use client";

import { useSearchParams } from "next/navigation";
import Cases from "./Cases";

export default function CasesWithSector({ locale = "es" }) {
  const searchParams = useSearchParams();
  return <Cases initialSector={searchParams.get("sector")} locale={locale} />;
}
