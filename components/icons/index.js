/*
  Sistema de iconos de Spectrum: trazo uniforme (1.6-1.8px), terminaciones
  redondeadas y proporciones consistentes, siguiendo los lineamientos de
  iconografia del Brand Book (simplicidad, claridad, precision).
*/

function IconBase({ children, size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4.35-4.35" />
    </IconBase>
  );
}

export function MenuIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </IconBase>
  );
}

export function CaretIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 9l6 6 6-6" />
    </IconBase>
  );
}

export function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </IconBase>
  );
}

export function CheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </IconBase>
  );
}

export function ChatIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6z" />
    </IconBase>
  );
}

export function SendIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 20l17-8-17-8v6.5l12 1.5-12 1.5V20z" />
    </IconBase>
  );
}

export function LinkedInIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8.6 10.5v6" />
      <path d="M8.6 8v.01" />
      <path d="M12.2 16.5v-3.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.6" />
    </IconBase>
  );
}

export function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.6 7.4h.01" />
    </IconBase>
  );
}

export function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M13.2 19v-5.6h1.9l.3-2.3h-2.2V9.6c0-.66.2-1.1 1.16-1.1h1.24V6.44c-.21-.03-.95-.1-1.8-.1-1.79 0-3 1.1-3 3.1v1.66H8.9v2.3h1.9V19" />
    </IconBase>
  );
}
