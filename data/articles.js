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

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
