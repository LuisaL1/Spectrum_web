import Header from "@/components/layout/Header";
import Ecosystem from "@/components/sections/Ecosystem";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Nosotros | Spectrum",
  description:
    "Quiénes somos, nuestra historia, misión y visión como ecosistema tecnológico.",
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Ecosystem />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
