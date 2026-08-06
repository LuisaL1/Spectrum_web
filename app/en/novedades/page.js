import Header from "@/components/layout/Header";
import Novedades from "@/components/sections/Novedades";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "News | Spectrum",
  description:
    "News, launches and technical content from Spectrum on infrastructure, cybersecurity and connectivity.",
};

export default function NovedadesPageEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <Novedades locale="en" />
        <CtaStrip locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
