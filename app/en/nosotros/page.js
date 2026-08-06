import Header from "@/components/layout/Header";
import Ecosystem from "@/components/sections/Ecosystem";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About us | Spectrum",
  description: "Who we are, our story, mission and vision as a technology ecosystem.",
};

export default function NosotrosPageEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <Ecosystem locale="en" />
        <CtaStrip locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
