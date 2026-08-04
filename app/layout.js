import { Montserrat } from "next/font/google";
import ChatWidget from "@/components/widgets/ChatWidget";
import { getSiteUrl } from "@/lib/site-url";

import "@/styles/variables.css";
import "@/styles/base.css";

import "@/styles/shared/buttons.css";
import "@/styles/shared/badges.css";
import "@/styles/shared/brand.css";
import "@/styles/shared/modal.css";
import "@/styles/shared/article-detail.css";
import "@/styles/shared/pattern-bg.css";

import "@/styles/layout/header.css";
import "@/styles/layout/footer.css";

import "@/styles/sections/hero.css";
import "@/styles/sections/ecosystem.css";
import "@/styles/sections/solutions.css";
import "@/styles/sections/partners.css";
import "@/styles/sections/cases.css";
import "@/styles/sections/team.css";
import "@/styles/sections/culture.css";
import "@/styles/sections/blog.css";
import "@/styles/sections/novedades.css";
import "@/styles/sections/cta-strip.css";
import "@/styles/sections/data-policy.css";
import "@/styles/sections/solution-detail.css";

import "@/styles/widgets/chat-widget.css";
import "@/styles/widgets/search-modal.css";
import "@/styles/widgets/info-request-form.css";

import "@/styles/responsive.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Spectrum | Future Powered",
  description:
    "Spectrum es un ecosistema tecnológico de infraestructura, ciberseguridad y conectividad para organizaciones públicas y privadas.",
  openGraph: {
    title: "Spectrum | Future Powered",
    description:
      "Infraestructura tecnológica y ciberseguridad diseñadas como un mismo ecosistema.",
    type: "website",
    images: [
      {
        url: "/logos/logo-spectrum.png",
        width: 2172,
        height: 724,
        alt: "Spectrum",
      },
    ],
  },
  icons: {
    icon: "/logos/logo-spectrum-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido
        </a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
