/**
 * SolarSentinel signature motif: concentric sensing rings pulsing outward,
 * echoing the ripples under the wing in the logo. Represents "sensing the invisible."
 */
export const ScanRipple = ({ className = "", color = "hsl(var(--gold))", dot = false }: { className?: string; color?: string; dot?: boolean }) => (
  <div className={`relative ${className}`} aria-hidden="true">
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="scan-ring absolute rounded-full"
          style={{
            width: "100%",
            height: "100%",
            border: `1.5px solid ${color}`,
          }}
        />
      ))}
      {dot && <span className="absolute rounded-full" style={{ width: "6%", height: "6%", background: color }} />}
    </div>
  </div>
);
