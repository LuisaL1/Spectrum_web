export const articles = [
  {
    slug: "auditoria-vulnerabilidades-5-senales",
    category: "Ciberseguridad",
    date: "Julio 2026",
    title: "5 señales de que su red necesita una auditoría de vulnerabilidades",
    excerpt:
      "Del acceso lento a alertas que nadie revisa: estas son las señales que indican que su infraestructura necesita una evaluación de vulnerabilidades antes de que se convierta en un incidente.",
    bg: "/fondos/blogs/5señales.jpg",
    content: [
      {
        body: "La mayoría de los incidentes de seguridad que atendemos no empiezan con un ataque sofisticado. Empiezan con una vulnerabilidad conocida, sin corregir, que llevaba semanas o meses expuesta. Una auditoría de vulnerabilidades no es un lujo reservado para grandes empresas: es la forma más económica de encontrar esos huecos antes de que alguien más lo haga.",
      },
      {
        heading: "1. Los equipos de TI ya no saben qué activos tienen expuestos",
        body: "Cuando una organización crece, crecen también los servidores, aplicaciones, dispositivos y accesos remotos. Si nadie puede responder con certeza cuántos activos están expuestos a internet en este momento, esa falta de visibilidad es en sí misma un riesgo: no se puede proteger lo que no se sabe que existe.",
      },
      {
        heading: "2. Persisten sistemas y software desactualizados",
        body: "Servidores sin parches, sistemas operativos fuera de soporte o software de terceros sin actualizar son la puerta de entrada más común para el malware y el ransomware. Una auditoría identifica exactamente qué versiones son vulnerables y qué CVE específicos las afectan.",
      },
      {
        heading: "3. Hay alertas de seguridad que nadie revisa a tiempo",
        body: "Muchas organizaciones sí cuentan con herramientas de monitoreo, pero generan más alertas de las que el equipo puede analizar. Cuando las alertas se acumulan sin respuesta, la ventana entre la detección y la contención de un incidente se alarga peligrosamente.",
      },
      {
        heading: "4. No se han hecho pruebas de intrusión controladas",
        body: "Un escaneo automatizado encuentra vulnerabilidades conocidas, pero no revela cómo un atacante real encadenaría varias fallas menores para comprometer un sistema crítico. El hacking ético (pentesting) simula ese escenario de forma controlada, antes de que ocurra de verdad.",
      },
      {
        heading: "5. Los accesos y privilegios no se han revisado en meses",
        body: "Cuentas de exempleados que siguen activas, contraseñas compartidas o privilegios administrativos otorgados 'temporalmente' hace un año son hallazgos frecuentes en cualquier auditoría. La gestión de accesos suele ser la brecha más fácil de cerrar y la más ignorada.",
      },
      {
        body: "Si alguna de estas señales le resulta familiar, el siguiente paso no es entrar en pánico, sino diagnosticar con datos reales. En Spectrum realizamos auditorías de vulnerabilidades y pruebas de hacking ético como parte de nuestro servicio de Ciberseguridad, con monitoreo SOC 24/7 para que las alertas que hoy nadie revisa, mañana tengan respuesta.",
      },
    ],
  },
  {
    slug: "hiperconvergencia-que-es",
    category: "Infraestructura",
    date: "Junio 2026",
    title: "Hiperconvergencia: qué es y por qué su empresa la necesita",
    excerpt:
      "Consolidar cómputo, almacenamiento y virtualización en una sola plataforma reduce costos y puntos de falla. Así funciona la hiperconvergencia en la práctica.",
    bg: "/fondos/blogs/hiperconvergencia.jpeg",
    content: [
      {
        body: "Durante años, construir infraestructura empresarial significó comprar servidores, sistemas de almacenamiento y switches de red por separado, de proveedores distintos, para después integrarlos manualmente. La infraestructura hiperconvergente (HCI, por sus siglas en inglés) cambia ese modelo: consolida cómputo, almacenamiento y virtualización en una sola plataforma, gestionada como un solo sistema.",
      },
      {
        heading: "¿Qué problema resuelve realmente?",
        body: "El modelo tradicional obliga a dimensionar cada capa por separado, lo que suele terminar en sobrecostos (comprar de más 'por si acaso') o en cuellos de botella (quedarse corto en almacenamiento mientras sobra cómputo). HCI permite escalar agregando nodos completos, de forma predecible, sin rediseñar la arquitectura cada vez.",
      },
      {
        heading: "Menos puntos de falla, no solo menos cajas",
        body: "Al reducir el número de componentes independientes, también se reduce el número de piezas que pueden fallar de forma aislada y dejar servicios caídos. La redundancia se gestiona a nivel de plataforma, con replicación de datos entre nodos, en lugar de depender de un único arreglo de almacenamiento como punto único de falla.",
      },
      {
        heading: "Operación más simple para equipos de TI pequeños",
        body: "Gestionar tres sistemas separados (servidores, storage, virtualización) exige tres conjuntos de habilidades distintos. HCI se administra desde una sola consola, lo cual es especialmente valioso para equipos de TI que no tienen un especialista dedicado para cada capa de la infraestructura.",
      },
      {
        heading: "¿Cuándo tiene sentido migrar?",
        body: "HCI no es la respuesta universal para cualquier carga de trabajo, pero suele justificarse cuando: la infraestructura actual está llegando al fin de su vida útil, el equipo de TI dedica demasiado tiempo a mantenimiento reactivo, hay planes de crecimiento que la arquitectura actual no soporta fácilmente, o se busca simplificar la recuperación ante desastres.",
      },
      {
        body: "En Spectrum diseñamos e implementamos arquitecturas hiperconvergentes como parte de nuestro servicio de Infraestructura Tecnológica, integradas con monitoreo NOC 24/7 y esquemas de continuidad y respaldo, para que la consolidación no sea solo técnica sino también operativa.",
      },
    ],
  },
  {
    slug: "sd-wan-conectar-sedes-sin-perder-seguridad",
    category: "Conectividad",
    date: "Junio 2026",
    title: "SD-WAN: cómo conectar sus sedes sin perder seguridad",
    excerpt:
      "Conectar múltiples sedes no debería significar sacrificar seguridad ni desempeño. Explicamos cómo SD-WAN resuelve ambos frentes a la vez.",
    bg: "/fondos/blogs/SDWAN.jpeg",
    content: [
      {
        body: "Cuando una organización tiene varias sedes, la forma en que las conecta impacta directamente la experiencia de sus usuarios y la seguridad de su información. Durante mucho tiempo, la respuesta fue MPLS: confiable, pero rígido y costoso de escalar. SD-WAN (Software-Defined Wide Area Network) ofrece una alternativa que combina flexibilidad, costo y seguridad de forma distinta.",
      },
      {
        heading: "¿Qué hace diferente a SD-WAN?",
        body: "En lugar de depender de un único enlace dedicado por sede, SD-WAN enruta el tráfico de forma inteligente entre múltiples conexiones disponibles (fibra, banda ancha, LTE), priorizando aplicaciones críticas en tiempo real según su desempeño y disponibilidad. Esto permite aprovechar enlaces más económicos sin sacrificar la calidad para las aplicaciones que más lo necesitan.",
      },
      {
        heading: "La seguridad no es opcional, es parte del diseño",
        body: "Un error común es asumir que abrir el tráfico a internet mediante enlaces de banda ancha (en vez de un enlace privado MPLS) implica ceder seguridad. Una implementación de SD-WAN bien diseñada incluye cifrado de extremo a extremo entre todas las sedes, segmentación de tráfico y, en muchos casos, integración con plataformas de seguridad perimetral existentes.",
      },
      {
        heading: "Visibilidad centralizada de toda la red",
        body: "Uno de los beneficios menos visibles pero más valiosos de SD-WAN es la administración centralizada: los equipos de TI pueden ver el estado de todas las sedes, aplicar políticas de red y responder a incidentes desde una sola consola, en lugar de gestionar cada sede de forma aislada.",
      },
      {
        heading: "¿Para quién tiene más sentido?",
        body: "SD-WAN resulta especialmente valioso para organizaciones con múltiples sedes que dependen de aplicaciones en la nube, que necesitan desplegar nuevas sucursales rápidamente, o que buscan reducir el costo de conectividad sin renunciar a control ni seguridad sobre el tráfico entre sedes.",
      },
      {
        body: "En Spectrum diseñamos e implementamos arquitecturas SD-WAN como parte de nuestro servicio de Conectividad, con conectividad cifrada de extremo a extremo y switching de Data Center integrado, para que conectar más sedes nunca signifique exponer más su operación.",
      },
    ],
  },
];

export const articlesEn = [
  {
    slug: "auditoria-vulnerabilidades-5-senales",
    category: "Cybersecurity",
    date: "July 2026",
    title: "5 signs your network needs a vulnerability audit",
    excerpt:
      "From slow access to alerts nobody reviews: these are the signs that your infrastructure needs a vulnerability assessment before it becomes an incident.",
    bg: "/fondos/blogs/5señales.jpg",
    content: [
      {
        body: "Most of the security incidents we handle don't start with a sophisticated attack. They start with a known, unpatched vulnerability that had been exposed for weeks or months. A vulnerability audit isn't a luxury reserved for large companies: it's the most cost-effective way to find those gaps before someone else does.",
      },
      {
        heading: "1. IT teams no longer know what assets they have exposed",
        body: "As an organization grows, so do its servers, applications, devices and remote access points. If no one can say with certainty how many assets are exposed to the internet right now, that lack of visibility is itself a risk: you can't protect what you don't know exists.",
      },
      {
        heading: "2. Outdated systems and software persist",
        body: "Unpatched servers, unsupported operating systems, or third-party software left un-updated are the most common entry point for malware and ransomware. An audit identifies exactly which versions are vulnerable and which specific CVEs affect them.",
      },
      {
        heading: "3. Security alerts go unreviewed in time",
        body: "Many organizations do have monitoring tools in place, but they generate more alerts than the team can analyze. When alerts pile up without a response, the window between detection and containment of an incident grows dangerously wide.",
      },
      {
        heading: "4. No controlled penetration testing has been done",
        body: "An automated scan finds known vulnerabilities, but it doesn't reveal how a real attacker would chain together several minor flaws to compromise a critical system. Ethical hacking (pentesting) simulates that scenario in a controlled way, before it happens for real.",
      },
      {
        heading: "5. Access and privileges haven't been reviewed in months",
        body: "Former employees' accounts that are still active, shared passwords, or admin privileges granted 'temporarily' a year ago are frequent findings in any audit. Access management is usually the easiest gap to close, and the most ignored.",
      },
      {
        body: "If any of these signs sound familiar, the next step isn't to panic, but to diagnose with real data. At Spectrum, we perform vulnerability audits and ethical hacking tests as part of our Cybersecurity service, with 24/7 SOC monitoring, so the alerts nobody reviews today get a response tomorrow.",
      },
    ],
  },
  {
    slug: "hiperconvergencia-que-es",
    category: "Infrastructure",
    date: "June 2026",
    title: "Hyperconvergence: what it is and why your company needs it",
    excerpt:
      "Consolidating compute, storage and virtualization on a single platform reduces costs and points of failure. Here's how hyperconvergence works in practice.",
    bg: "/fondos/blogs/hiperconvergencia.jpeg",
    content: [
      {
        body: "For years, building enterprise infrastructure meant buying servers, storage systems and network switches separately, from different vendors, and then integrating them manually. Hyperconverged infrastructure (HCI) changes that model: it consolidates compute, storage and virtualization on a single platform, managed as one system.",
      },
      {
        heading: "What problem does it actually solve?",
        body: "The traditional model forces you to size each layer separately, which usually ends in overspending (buying extra 'just in case') or bottlenecks (running short on storage while compute sits idle). HCI lets you scale by adding complete nodes, predictably, without redesigning the architecture every time.",
      },
      {
        heading: "Fewer points of failure, not just fewer boxes",
        body: "By reducing the number of independent components, you also reduce the number of pieces that can fail in isolation and take services down. Redundancy is managed at the platform level, with data replication between nodes, instead of relying on a single storage array as a single point of failure.",
      },
      {
        heading: "Simpler operations for small IT teams",
        body: "Managing three separate systems (servers, storage, virtualization) requires three different skill sets. HCI is managed from a single console, which is especially valuable for IT teams that don't have a dedicated specialist for every layer of the infrastructure.",
      },
      {
        heading: "When does it make sense to migrate?",
        body: "HCI isn't the universal answer for every workload, but it's usually justified when: your current infrastructure is reaching end of life, your IT team spends too much time on reactive maintenance, you have growth plans your current architecture can't easily support, or you're looking to simplify disaster recovery.",
      },
      {
        body: "At Spectrum, we design and implement hyperconverged architectures as part of our Technology Infrastructure service, integrated with 24/7 NOC monitoring and continuity and backup schemes, so consolidation isn't just technical — it's operational too.",
      },
    ],
  },
  {
    slug: "sd-wan-conectar-sedes-sin-perder-seguridad",
    category: "Connectivity",
    date: "June 2026",
    title: "SD-WAN: how to connect your sites without losing security",
    excerpt:
      "Connecting multiple sites shouldn't mean sacrificing security or performance. We explain how SD-WAN solves both fronts at once.",
    bg: "/fondos/blogs/SDWAN.jpeg",
    content: [
      {
        body: "When an organization has multiple sites, how it connects them directly impacts both user experience and information security. For a long time, the answer was MPLS: reliable, but rigid and costly to scale. SD-WAN (Software-Defined Wide Area Network) offers an alternative that combines flexibility, cost and security in a different way.",
      },
      {
        heading: "What makes SD-WAN different?",
        body: "Instead of relying on a single dedicated link per site, SD-WAN intelligently routes traffic across multiple available connections (fiber, broadband, LTE), prioritizing critical applications in real time based on their performance and availability. This makes it possible to take advantage of cheaper links without sacrificing quality for the applications that need it most.",
      },
      {
        heading: "Security isn't optional, it's part of the design",
        body: "A common mistake is assuming that opening traffic to the internet through broadband links (instead of a private MPLS link) means giving up security. A well-designed SD-WAN deployment includes end-to-end encryption across all sites, traffic segmentation and, in many cases, integration with existing perimeter security platforms.",
      },
      {
        heading: "Centralized visibility across the entire network",
        body: "One of the less visible but more valuable benefits of SD-WAN is centralized management: IT teams can see the status of every site, apply network policies and respond to incidents from a single console, instead of managing each site in isolation.",
      },
      {
        heading: "Who does it make the most sense for?",
        body: "SD-WAN is especially valuable for organizations with multiple sites that depend on cloud applications, that need to roll out new branches quickly, or that are looking to reduce connectivity costs without giving up control or security over traffic between sites.",
      },
      {
        body: "At Spectrum, we design and implement SD-WAN architectures as part of our Connectivity service, with end-to-end encrypted connectivity and integrated Data Center switching, so connecting more sites never means exposing more of your operation.",
      },
    ],
  },
];

export function getArticles(locale = "es") {
  return locale === "en" ? articlesEn : articles;
}

export function getArticleBySlug(slug, locale = "es") {
  return getArticles(locale).find((article) => article.slug === slug);
}
