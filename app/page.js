import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";
import Solutions from "@/components/sections/Solutions";
import Cases from "@/components/sections/Cases";
import Partners from "@/components/sections/Partners";
import Blog from "@/components/sections/Blog";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Ecosystem />
        <Solutions />
        <Cases />
        <Partners />
        <Blog />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
