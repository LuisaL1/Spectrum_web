"use client";

import { useSearchParams } from "next/navigation";
import Cases from "./Cases";

export default function CasesWithSector() {
  const searchParams = useSearchParams();
  return <Cases initialSector={searchParams.get("sector")} />;
}
