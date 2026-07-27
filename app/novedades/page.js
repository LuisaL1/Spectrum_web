import Header from "@/components/layout/Header";
import Novedades from "@/components/sections/Novedades";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Novedades | Spectrum",
  description:
    "Noticias, lanzamientos y contenido técnico de Spectrum sobre infraestructura, ciberseguridad y conectividad.",
};

export default function NovedadesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Novedades />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
