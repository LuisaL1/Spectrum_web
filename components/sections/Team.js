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

export default function Team() {
  return (
    <section id="equipo">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Quiénes somos</p>
          <h2>Las personas detrás de cada solución</h2>
          <p>
            En Spectrum no vendemos tecnología: la construyen personas. Este
            es el equipo que le pone nombre, rostro y compromiso a cada
            proyecto que asumimos.
          </p>
        </div>
        <div className="team-group" id="liderazgo">
          <p className="team-group-label">Liderazgo</p>
          <TeamGrid people={leaders} />
        </div>
        <div className="team-group">
          <p className="team-group-label">Equipo</p>
          <TeamGrid people={team} />
        </div>
      </div>
    </section>
  );
}
