import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AISpotlight from "@/components/sections/AISpotlight";
import Solutions from "@/components/sections/Solutions";
import Cases from "@/components/sections/Cases";
import CasesWithSector from "@/components/sections/CasesWithSector";
import Partners from "@/components/sections/Partners";
import Blog from "@/components/sections/Blog";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AISpotlight />
        <Solutions />
        <Suspense fallback={<Cases />}>
          <CasesWithSector />
        </Suspense>
        <Partners />
        <Blog />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
