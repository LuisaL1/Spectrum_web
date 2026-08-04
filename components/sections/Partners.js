import Image from "next/image";

const partners = [
  { name: "Adobe", logo: "adobe.png", width: 1350, height: 356 },
  { name: "Aranda", logo: "aranda.png", width: 2233, height: 874 },
  { name: "Aruba", logo: "aruba.png", width: 1990, height: 507 },
  {
    name: "Check Point",
    logo: "check-point.png",
    width: 500,
    height: 224,
  },
  { name: "Pentera", logo: "pentera.png", width: 390, height: 496 },
  { name: "AWS", logo: "aws.png", width: 2000, height: 1178 },
  {
    name: "CrowdStrike",
    logo: "crowdstrike.png",
    width: 1875,
    height: 835,
  },
  { name: "ExaGrid", logo: "exagrid.png", width: 288, height: 58 },
  {
    name: "Extreme Networks",
    logo: "extreme.png",
    width: 540,
    height: 132,
  },
  { name: "KELA", logo: "kela.png", width: 2000, height: 505 },
  { name: "Fortinet", logo: "fortinet.png", width: 1256, height: 995 },
  {
    name: "Google Cloud",
    logo: "google-cloud.png",
    width: 4096,
    height: 2564,
  },
  { name: "Hitachi", logo: "hitachi.png", width: 2728, height: 471 },
  { name: "HP", logo: "hp.png", width: 3000, height: 3000 },
  { name: "IBM", logo: "ibm.png", width: 1088, height: 442 },
  { name: "Lenovo", logo: "lenovo.png", width: 215, height: 43 },
  { name: "Microsoft", logo: "microsoft.png", width: 662, height: 476 },
  { name: "Nutanix", logo: "nutanix.png", width: 615, height: 522 },
  { name: "TrendAI", logo: "trend-ai.png", width: 684, height: 178 },
  { name: "Veeam", logo: "veeam.png", width: 3703, height: 1123 },
  {
    name: "SentinelOne",
    logo: "sentinelone.png",
    width: 1004,
    height: 573,
  },
  { name: "Broadcom", logo: "broadcom.png", width: 603, height: 374 },
  { name: "Zoho", logo: "zoho.png", width: 1581, height: 676 },
];

const mid = Math.ceil(partners.length / 2);
const rows = [partners.slice(0, mid), partners.slice(mid)];

function LogoRow({ items, reverse }) {
  const track = [...items, ...items];
  return (
    <div className="logo-marquee">
      <div className={`logo-track${reverse ? " reverse" : ""}`}>
        {track.map((partner, i) => (
          <div className="logo-pill" key={`${partner.name}-${i}`}>
            <Image
              src={`/logos/aliados/web/${partner.logo}`}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="on-light" id="aliados">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Aliados tecnológicos</p>
          <h2>Respaldados por los líderes de la industria</h2>
        </div>
      </div>
      <div className="logo-marquee-group">
        <LogoRow items={rows[0]} />
        <LogoRow items={rows[1]} reverse />
      </div>
    </section>
  );
}
