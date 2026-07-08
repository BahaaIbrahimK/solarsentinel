/**
 * Custom domain iconography for SolarSentinel — thin-line, single consistent set.
 * Purpose-built for methane sensing / solar UAV, not generic stock icons.
 */
type IconProps = { className?: string };
const base = "none";
const stroke = "currentColor";
const sw = 1.5;

export const MethaneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2.4" />
    <circle cx="12" cy="4.4" r="1.5" />
    <circle cx="12" cy="19.6" r="1.5" />
    <circle cx="4.9" cy="8" r="1.5" />
    <circle cx="19.1" cy="8" r="1.5" />
    <path d="M12 9.6V5.9M12 14.4v3.7M9.9 10.9 6.2 8.8M14.1 10.9l3.7-2.1" />
  </svg>
);

export const LaserSensorIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="7" height="5" rx="1" />
    <path d="M10 6.5h4.5" strokeDasharray="1 2" />
    <path d="M19 3.5v6M16.5 6.5h5" />
    <path d="M6.5 9v5M4 18.5c1.5-1.2 3.5-1.2 5 0s3.5 1.2 5 0 3.5-1.2 5 0" />
  </svg>
);

export const SolarWingIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10.5 22 8l-0.6 2.4L3 13z" />
    <path d="M8.5 9.7v2.7M12 9.3v2.7M15.5 8.9v2.7" />
    <circle cx="12" cy="6.5" r="2.2" />
    <path d="M12 2.6v1.2M12 9.2v1.2M8.1 6.5H9.3M14.7 6.5h1.2" />
  </svg>
);

export const EnduranceIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="7.5" />
    <path d="M12 9v4l2.6 1.6" />
    <path d="M9 2.5h6" />
  </svg>
);

export const UAVIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20" />
    <path d="M11 8h2l-.4 8h-1.2z" />
    <path d="M11.3 4.5h1.4" />
    <path d="M8 16.5h8" />
  </svg>
);

export const ReportIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M12 11.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 15.5V18" />
  </svg>
);

export const RepairIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20 14.5 9.5" />
    <path d="M13 5.5a3.5 3.5 0 0 0 4.9 4.9l-2-2 1.2-1.2 2 2A3.5 3.5 0 0 0 14.2 4.3l1.9 1.9-1.2 1.2z" />
  </svg>
);

export const SolarPanelIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="10" rx="1" />
    <path d="M3 8.3h18M3 11.6h18M9 5v10M15 5v10" />
    <path d="M12 15v4M9 19h6" />
  </svg>
);

export const BatteryIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="16" height="10" rx="2" />
    <path d="M21 10.5v3" />
    <path d="M11 9.5 9 12.2h3L10 15" />
  </svg>
);

export const ChipIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M10.5 10.5h3v3h-3z" />
    <path d="M9.5 4v3M14.5 4v3M9.5 17v3M14.5 17v3M4 9.5h3M4 14.5h3M17 9.5h3M17 14.5h3" />
  </svg>
);

export const BroadcastIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" />
    <path d="M6 6a8 8 0 0 0 0 12M18 6a8 8 0 0 1 0 12" />
  </svg>
);

export const ScopeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill={base} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);
