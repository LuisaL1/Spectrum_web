import Header from "@/components/layout/Header";
import BlogArchive from "@/components/sections/BlogArchive";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";
import { buildAlternates, buildOpenGraph } from "@/lib/seo";

const title = "Blog | Spectrum";
const description =
  "Artículos técnicos de Spectrum sobre infraestructura, ciberseguridad, conectividad e inteligencia artificial.";

export const metadata = {
  title,
  description,
  alternates: buildAlternates("es", "/blog"),
  ...buildOpenGraph({ title, description, locale: "es", path: "/blog" }),
};

export default function BlogPage() {
  return (
    <>
      <Header locale="es" />
      <main id="main-content">
        <BlogArchive locale="es" />
        <CtaStrip locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
