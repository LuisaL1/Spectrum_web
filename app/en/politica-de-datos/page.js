import Header from "@/components/layout/Header";
import DataPolicy from "@/components/sections/DataPolicy";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Personal Data Processing Policy | Spectrum",
  description:
    "Spectrum Technology S.A.S's Personal Data Processing Policy, in accordance with Colombian Law 1581 of 2012 and Decree 1377 of 2013.",
};

export default function PoliticaDeDatosPageEn() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <DataPolicy locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
