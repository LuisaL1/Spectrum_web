import Header from "@/components/layout/Header";
import Team from "@/components/sections/Team";
import Culture from "@/components/sections/Culture";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Equipo | Spectrum",
  description:
    "Conoce al equipo directivo y de trabajo que hace posible a Spectrum.",
};

export default function EquipoPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Team />
        <Culture />
      </main>
      <Footer />
    </>
  );
}
