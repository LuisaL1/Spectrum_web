import Header from "@/components/layout/Header";
import BlogArchive from "@/components/sections/BlogArchive";
import CtaStrip from "@/components/sections/CtaStrip";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Blog | Spectrum",
  description:
    "Technical articles from Spectrum on infrastructure, cybersecurity, connectivity and artificial intelligence.",
};

export default function BlogPageEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <BlogArchive locale="en" />
        <CtaStrip locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
