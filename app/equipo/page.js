import Header from "@/components/layout/Header";
import Team from "@/components/sections/Team";
import Culture from "@/components/sections/Culture";
import Footer from "@/components/layout/Footer";
import { buildAlternates, buildOpenGraph } from "@/lib/seo";

const title = "Equipo | Spectrum";
const description = "Conoce al equipo directivo y de trabajo que hace posible a Spectrum.";

export const metadata = {
  title,
  description,
  alternates: buildAlternates("es", "/equipo"),
  ...buildOpenGraph({ title, description, locale: "es", path: "/equipo" }),
};

export default function EquipoPage() {
  return (
    <>
      <Header locale="es" />
      <main id="main-content">
        <Team locale="es" />
        <Culture locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
