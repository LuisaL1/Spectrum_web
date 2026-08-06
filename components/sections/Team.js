const leaders = [
  { name: "Cristian Valencia", role: "Chief Executive Officer" },
  { name: "Edison Hernandez", role: "Chief Commercial Officer" },
  {
    name: "Sneyder Martinez",
    role: "Project and Operations Engineering Manager",
  },
  {
    name: "Paola Molano",
    role: "Legal Advisor and Procurement Specialist",
  },
];

const team = [
  { name: "Juan Duque", role: "Associate Solutions Engineer" },
  { name: "Leidy Naranjo", role: "Executive Administrative Assistant" },
  { name: "Luisa Londoño", role: "Software Engineer" },
  { name: "Sebastian Jaramillo", role: "Pre-sales Technical Consultant" },
  { name: "Johana Agudelo", role: "Sales Account Manager" },
];

const content = {
  es: {
    eyebrow: "Quiénes somos",
    heading: "Las personas detrás de cada solución",
    lead: "En Spectrum no vendemos tecnología: la construyen personas. Este es el equipo que le pone nombre, rostro y compromiso a cada proyecto que asumimos.",
    leadership: "Liderazgo",
    team: "Equipo",
  },
  en: {
    eyebrow: "Who we are",
    heading: "The people behind every solution",
    lead: "At Spectrum, we don't sell technology — people build it. This is the team that gives every project we take on a name, a face and a commitment.",
    leadership: "Leadership",
    team: "Team",
  },
};

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamGrid({ people }) {
  return (
    <div className="team-grid">
      {people.map((member) => (
        <div className="team-card" key={member.name}>
          <div className="team-avatar" aria-hidden="true">
            {initials(member.name)}
          </div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default function Team({ locale = "es" }) {
  const t = content[locale] || content.es;

  return (
    <section id="equipo">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.heading}</h2>
          <p>{t.lead}</p>
        </div>
        <div className="team-group" id="liderazgo">
          <p className="team-group-label">{t.leadership}</p>
          <TeamGrid people={leaders} />
        </div>
        <div className="team-group">
          <p className="team-group-label">{t.team}</p>
          <TeamGrid people={team} />
        </div>
      </div>
    </section>
  );
}
