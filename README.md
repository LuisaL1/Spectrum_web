# Spectrum — Sitio Web

Sitio web corporativo de Spectrum (infraestructura tecnológica y ciberseguridad), construido con **React** y **Next.js** (App Router, JavaScript). Basado en el Brand Book 2026, el Brochure corporativo y el Documento de Visión del sitio. La estructura de secciones y componentes está inspirada en sitios enterprise de infraestructura/ciberseguridad (tipo Nutanix), adaptada a la identidad visual de Spectrum.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build      # build de produccion
npm run start      # sirve el build de produccion
npm run lint       # ESLint (next/core-web-vitals)
npm run format     # Prettier
npm test           # Vitest (una sola corrida)
npm run test:watch # Vitest en modo watch
```

## Arquitectura

El proyecto sigue una **arquitectura por capas** (presentación / negocio / datos). El detalle completo del modelo, el porqué de esa elección frente a otros modelos (hexagonal, microservicios, MVC), la regla de dependencia entre capas y los principios SOLID aplicados están documentados en [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Estructura del proyecto

```
spectrum-web/
├── app/                          # CAPA DE PRESENTACIÓN: rutas + route handlers
│   ├── layout.js                 # Layout raiz: metadata, fuente Montserrat, CSS global
│   ├── page.js                   # Pagina de inicio: ensambla las secciones
│   └── api/                      # Route handlers (chat, contacto)
├── components/                   # CAPA DE PRESENTACIÓN: UI
│   ├── layout/                   # Header, Footer — chrome compartido entre paginas
│   ├── sections/                 # Hero, Ecosystem, Solutions, Cases, Partners,
│   │                              # Blog, Team, Culture, Novedades, DataPolicy, CtaStrip
│   ├── widgets/                  # ChatWidget, SearchModal, InfoRequestForm
│   └── icons/
├── lib/                           # CAPA DE NEGOCIO: logica de la aplicacion
│   ├── assistant-prompt.js       # Arma el prompt del asistente IA
│   ├── search-index.js           # Logica de busqueda
│   ├── email-templates.js        # Genera el HTML de los correos (escapa entradas)
│   └── validation.js             # Valida/normaliza el payload de contacto
├── data/                          # CAPA DE DATOS: contenido estatico
│   ├── solutions-data.js
│   └── knowledge-base.json
├── styles/                        # Espejo de components/: shared, layout, sections, widgets
├── public/                        # Assets estaticos (imagenes, logos, PDFs)
├── ARCHITECTURE.md                # Modelo de arquitectura y buenas practicas aplicadas
├── vitest.config.js               # Configuracion de testing
├── package.json
├── next.config.js
├── jsconfig.json                  # Alias "@/" -> raiz del proyecto
└── .eslintrc.json
```

### Por qué esta organización

- **Capas explícitas**: `app/` + `components/` (presentación), `lib/` (negocio) y `data/` (datos) se corresponden 1:1 con el modelo de arquitectura documentado en `ARCHITECTURE.md`. Ninguna capa inferior importa de una superior.
- **Componentes por rol, no en una lista plana**: `components/layout` (chrome compartido), `components/sections` (bloques de una página) y `components/widgets` (piezas interactivas autocontenidas) separan responsabilidades distintas dentro de la UI.
- **Client components solo donde hace falta**: `Header`, `Cases`, `ChatWidget`, `SearchModal` e `InfoRequestForm` son los componentes con interactividad (`"use client"`); el resto son componentes de servidor, estáticos y ligeros.
- **CSS organizado por dueño**: `styles/` refleja la misma subdivisión que `components/` (`shared/`, `layout/`, `sections/`, `widgets/`), en vez de archivos monolíticos con estilos de todos los componentes mezclados.
- **`public/assets/`**: convención de Next.js para archivos estáticos servidos tal cual (favicon, imágenes).

## Design tokens (Brand Book 2026)

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-black` | `#020202` | Fondo principal |
| `--color-graphite` | `#1f1f1f` | Superficies secundarias |
| `--color-red` | `#fa0001` | Acentos, CTAs, énfasis |
| `--color-white` | `#ffffff` | Texto sobre fondo oscuro |
| `--color-gray-100…700` | `#f4f4f4 → #444a54` | Jerarquía de texto/bordes |
| `--font-family-base` | Montserrat (via `next/font/google`) | Tipografía corporativa (400/500/600/800) |

## Buenas prácticas aplicadas

- HTML semántico (`header`, `nav`, `main`, `section`, `footer`, `article`) y un enlace "saltar al contenido" para usuarios de teclado.
- Accesibilidad: `aria-label`, `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-current`, soporte de foco por teclado en el submenú (`:focus-within`) y respeto de `prefers-reduced-motion`.
- CSS con variables (design tokens), sin valores mágicos repetidos, y `scroll-margin-top` para que el header sticky no tape las secciones ancladas.
- Interactividad con hooks de React (`useState`, `useEffect`) en lugar de manipulación directa del DOM.
- Mobile-first en la interacción: el menú y el submenú funcionan igual con mouse, teclado y touch.

## Próximos pasos sugeridos

1. Reemplazar los símbolos/íconos temporales por los assets reales del Brand Book (logo, iconografía, fotografía).
2. Conectar el formulario de contacto y el botón de WhatsApp a los canales reales.
3. Añadir el contenido en inglés y activar el selector de idioma (`ES`/`EN`) con datos reales, no solo visual.
4. Extraer los datos de contenido (soluciones, casos, blog, aliados) a un CMS o fuente de datos externa en vez de arrays estáticos en los componentes.
