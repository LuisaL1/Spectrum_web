import Header from "@/components/layout/Header";
import BlogArchive from "@/components/sections/BlogArchive";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Blog | Spectrum",
  description:
    "Artículos técnicos de Spectrum sobre infraestructura, ciberseguridad, conectividad e inteligencia artificial.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <BlogArchive />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
