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

export const metadata = {
  title: "Spectrum | Future Powered",
  description:
    "Spectrum is a technology ecosystem of infrastructure, cybersecurity and connectivity for public and private organizations.",
};

export default function HomeEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <Hero locale="en" />
        <AISpotlight locale="en" />
        <Solutions locale="en" />
        <Suspense fallback={<Cases locale="en" />}>
          <CasesWithSector locale="en" />
        </Suspense>
        <Partners locale="en" />
        <Blog locale="en" />
        <CtaStrip locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
