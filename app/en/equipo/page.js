import Header from "@/components/layout/Header";
import Team from "@/components/sections/Team";
import Culture from "@/components/sections/Culture";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Team | Spectrum",
  description: "Meet the leadership and working team that makes Spectrum possible.",
};

export default function EquipoPageEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <Team locale="en" />
        <Culture locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
