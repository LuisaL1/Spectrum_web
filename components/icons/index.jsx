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

export function WhatsAppIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 18l-1.2 3.6L8.6 20.4A8.5 8.5 0 1 0 4.5 16.2z" />
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

/*
  Iconos de capacidades (paginas de detalle de solucion). Mismo trazo que
  el resto del sistema; cada uno representa una capacidad especifica.
*/

export function StackIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4.5" width="16" height="4" rx="1.4" />
      <rect x="4" y="10" width="16" height="4" rx="1.4" />
      <rect x="4" y="15.5" width="16" height="4" rx="1.4" />
    </IconBase>
  );
}

export function BroadcastIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8.8 15.2a5 5 0 0 1 0-6.4" />
      <path d="M15.2 15.2a5 5 0 0 0 0-6.4" />
      <path d="M6.2 17.8a9 9 0 0 1 0-11.6" />
      <path d="M17.8 17.8a9 9 0 0 0 0-11.6" />
    </IconBase>
  );
}

export function CloudIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7.5 18a4 4 0 0 1-.6-7.95 5.5 5.5 0 0 1 10.7-1.9A4 4 0 0 1 17 18h-9.5z" />
    </IconBase>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3.2l6.5 2.8v5.6c0 4.2-2.8 6.9-6.5 8.2-3.7-1.3-6.5-4-6.5-8.2V6l6.5-2.8z" />
      <path d="M9 12.2l2.1 2.1 3.9-4" />
    </IconBase>
  );
}

export function ShieldClockIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3.2l6.5 2.8v5.6c0 4.2-2.8 6.9-6.5 8.2-3.7-1.3-6.5-4-6.5-8.2V6l6.5-2.8z" />
      <path d="M12 8.6v3.4l2.2 1.4" />
    </IconBase>
  );
}

export function BugIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="13" r="4.6" />
      <path d="M12 8.4V6" />
      <path d="M9.2 8.6L7.4 6.8" />
      <path d="M14.8 8.6l1.8-1.8" />
      <path d="M7.4 13H4.5" />
      <path d="M19.5 13h-2.9" />
      <path d="M8.2 16.8l-1.7 1.9" />
      <path d="M15.8 16.8l1.7 1.9" />
    </IconBase>
  );
}

export function CodeLockIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M8.2 7.5L4 12l4.2 4.5" />
      <path d="M15.8 7.5L20 12l-4.2 4.5" />
      <rect x="10.4" y="10.3" width="3.2" height="3.2" rx="0.6" />
    </IconBase>
  );
}

export function AuditIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="5" y="3.5" width="11" height="15" rx="1.4" />
      <path d="M7.7 8h5.6M7.7 11h5.6M7.7 14h3.4" />
      <circle cx="16.6" cy="16.6" r="2.8" />
      <path d="M18.7 18.7L20.5 20.5" />
    </IconBase>
  );
}

export function NodesIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="4.8" r="1.8" />
      <circle cx="5" cy="17.5" r="1.8" />
      <circle cx="19" cy="17.5" r="1.8" />
      <path d="M12 6.6v3.4" />
      <path d="M12 10l-5.6 5.9" />
      <path d="M12 10l5.6 5.9" />
    </IconBase>
  );
}

export function BuildingIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="5.5" y="3.5" width="13" height="17" rx="1" />
      <path d="M9 7.2h.01M14.8 7.2h.01M9 11h.01M14.8 11h.01M9 14.8h.01M14.8 14.8h.01" />
      <path d="M10.5 20.5V17h3v3.5" />
    </IconBase>
  );
}

export function ServerRackIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="5.5" y="2.5" width="13" height="19" rx="1.2" />
      <path d="M8.5 6.8h.01M8.5 12h.01M8.5 17.2h.01" />
      <path d="M11.5 6.8h4M11.5 12h4M11.5 17.2h4" />
    </IconBase>
  );
}

export function LockIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="6.5" y="11" width="11" height="8.5" rx="2" />
      <path d="M8.8 11V7.8a3.2 3.2 0 0 1 6.4 0V11" />
      <circle cx="12" cy="15.1" r="1.3" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function RenewIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4.5" y="4.5" width="10.5" height="14" rx="1.4" />
      <path d="M18.8 8.3a4.3 4.3 0 1 1-1.3-3" />
      <path d="M18.8 4.5v3.8H15" />
    </IconBase>
  );
}

export function HeadsetIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4.5 13.5a7.5 7.5 0 0 1 15 0" />
      <rect x="3.7" y="13.2" width="4" height="6.3" rx="1.6" />
      <rect x="16.3" y="13.2" width="4" height="6.3" rx="1.6" />
      <path d="M20.3 19.5v.8a2.8 2.8 0 0 1-2.8 2.8h-2.7" />
    </IconBase>
  );
}

export function CompassIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M14.8 9.2l-1.9 5.6-5.7 1.9 1.9-5.6 5.7-1.9z" />
    </IconBase>
  );
}

export function WrenchIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M14.9 6a4 4 0 0 0-5.3 5.3L4.9 16l3.1 3.1 4.7-4.7A4 4 0 0 0 18 9.1l-2.9 2.9-2-2L15.9 6z" />
    </IconBase>
  );
}

export function GearIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.5v2.7M12 17.8v2.7M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M3.5 12h2.7M17.8 12h2.7M5.3 18.7l1.9-1.9M16.8 7.2l1.9-1.9" />
    </IconBase>
  );
}

export function TrendIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 16.5l5-5 4 4 6.5-7.5" />
      <path d="M15 8h4.5v4.5" />
    </IconBase>
  );
}

export function ChipShieldIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3.2l6.5 2.8v5.6c0 4.2-2.8 6.9-6.5 8.2-3.7-1.3-6.5-4-6.5-8.2V6l6.5-2.8z" />
      <path d="M8.6 12.6h1.8l1-2.2 1.6 4.4 1-2.2h1.4" />
    </IconBase>
  );
}

export function PlugIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 3.5v4M15 3.5v4" />
      <path d="M6.5 7.5h11l-.8 4.7a4.7 4.7 0 0 1-9.4 0l-.8-4.7z" />
      <path d="M12 16.7v4" />
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
