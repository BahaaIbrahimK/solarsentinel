import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* A plan view of a generic gas plant, drawn like a site drawing, with the mission overlaid step by step.
   Coordinates are in a 800 x 600 drawing space. Colours come from the brand tokens. */

const NAVY = "hsl(var(--navy))";
const GOLD = "hsl(var(--gold))";
const GREEN = "hsl(var(--green))";
const ease = [0.22, 1, 0.36, 1] as const;

const LAUNCH = { x: 84, y: 548 };
// Survey grid: east-west legs over the whole site.
const SURVEY = "M 84 548 L 120 520 L 120 96 L 690 96 L 690 166 L 120 166 L 120 236 L 690 236 L 690 306 L 120 306 L 120 376 L 690 376 L 690 446 L 120 446 L 120 506 L 690 506";
// Closer passes around the unit where methane was found (U-3).
const ORBIT = "M 470 262 a 74 52 0 1 0 148 0 a 74 52 0 1 0 -148 0 M 492 262 a 52 34 0 1 0 104 0 a 52 34 0 1 0 -104 0";

const Aircraft = ({ size = 1 }: { size?: number }) => (
  <g transform={`rotate(90) scale(${size})`}>
    <path d="M0 -13 L1.6 -4 L15 -1 L15 1.6 L1.6 1.2 L1.2 9 L5 11 L5 12.6 L0 11.8 L-5 12.6 L-5 11 L-1.2 9 L-1.6 1.2 L-15 1.6 L-15 -1 L-1.6 -4 Z" fill={NAVY} />
  </g>
);

const Site = () => (
  <g>
    {/* survey grid of the drawing */}
    {Array.from({ length: 15 }, (_, k) => <line key={`v${k}`} x1={40 + k * 52} y1="20" x2={40 + k * 52} y2="580" stroke={NAVY} strokeOpacity=".05" />)}
    {Array.from({ length: 11 }, (_, k) => <line key={`h${k}`} x1="20" y1={40 + k * 52} x2="780" y2={40 + k * 52} stroke={NAVY} strokeOpacity=".05" />)}

    {/* fence line */}
    <rect x="104" y="70" width="610" height="460" rx="6" fill="none" stroke={NAVY} strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="7 5" />
    <text x="110" y="62" fontSize="10" letterSpacing="1.5" fill={NAVY} fillOpacity=".6" fontFamily="Inter, sans-serif">PLANT FENCE</text>

    {/* roads */}
    <path d="M 104 470 H 714 M 300 70 V 530" stroke={NAVY} strokeOpacity=".12" strokeWidth="14" fill="none" />

    {/* pipe rack */}
    <path d="M 140 330 H 690 M 140 338 H 690" stroke={NAVY} strokeOpacity=".7" strokeWidth="1.4" />
    {Array.from({ length: 23 }, (_, k) => <line key={`r${k}`} x1={142 + k * 24} y1="330" x2={142 + k * 24} y2="338" stroke={NAVY} strokeOpacity=".5" />)}

    {/* process units */}
    {[
      { x: 140, y: 110, w: 130, h: 180, n: "U-1" },
      { x: 330, y: 110, w: 120, h: 180, n: "U-2" },
      { x: 490, y: 200, w: 120, h: 110, n: "U-3" },
      { x: 490, y: 110, w: 190, h: 70, n: "U-4" },
    ].map((u) => (
      <g key={u.n}>
        <rect x={u.x} y={u.y} width={u.w} height={u.h} fill="hsl(var(--sand-deep))" stroke={NAVY} strokeWidth="1.4" />
        {Array.from({ length: Math.floor(u.w / 30) }, (_, k) => (
          <circle key={k} cx={u.x + 18 + k * 30} cy={u.y + 22} r="7" fill="none" stroke={NAVY} strokeOpacity=".55" />
        ))}
        <path d={`M ${u.x + 10} ${u.y + u.h - 26} h ${u.w - 20} M ${u.x + 10} ${u.y + u.h - 18} h ${u.w - 20}`} stroke={NAVY} strokeOpacity=".35" />
        <text x={u.x + 8} y={u.y + u.h - 6} fontSize="10" fontWeight="600" letterSpacing="1" fill={NAVY} fontFamily="Inter, sans-serif">{u.n}</text>
      </g>
    ))}

    {/* tank farm */}
    {[0, 1, 2].map((c) => (
      <circle key={`tt${c}`} cx={420 + c * 84} cy="404" r="30" fill="hsl(var(--sand-deep))" stroke={NAVY} strokeWidth="1.4" />
    ))}
    {[0, 1, 2].map((c) => (
      <circle key={`ti${c}`} cx={420 + c * 84} cy="404" r="20" fill="none" stroke={NAVY} strokeOpacity=".35" />
    ))}
    <text x="392" y="452" fontSize="10" letterSpacing="1.5" fill={NAVY} fillOpacity=".6" fontFamily="Inter, sans-serif">STORAGE</text>

    {/* flare */}
    <circle cx="672" cy="250" r="7" fill="none" stroke={NAVY} strokeWidth="1.4" />
    <circle cx="672" cy="250" r="2.5" fill={NAVY} />
    <text x="652" y="276" fontSize="9" letterSpacing="1" fill={NAVY} fillOpacity=".6" fontFamily="Inter, sans-serif">FLARE</text>

    {/* control room and gate */}
    <rect x="140" y="486" width="60" height="30" fill="hsl(var(--sand-deep))" stroke={NAVY} strokeWidth="1.4" />
    <text x="146" y="505" fontSize="8.5" letterSpacing=".8" fill={NAVY} fontFamily="Inter, sans-serif">CONTROL</text>

    {/* north arrow and scale */}
    <g transform="translate(748 70)">
      <path d="M0 -18 L7 6 L0 1 L-7 6 Z" fill={NAVY} />
      <text x="-4" y="22" fontSize="10" fontWeight="600" fill={NAVY} fontFamily="Inter, sans-serif">N</text>
    </g>
    <g transform="translate(560 568)" fontFamily="Inter, sans-serif" fontSize="9" fill={NAVY} fillOpacity=".7">
      <rect x="0" y="0" width="60" height="5" fill={NAVY} />
      <rect x="60" y="0" width="60" height="5" fill="none" stroke={NAVY} />
      <text x="-3" y="18">0</text><text x="52" y="18">100</text><text x="108" y="18">200 m</text>
    </g>
  </g>
);

/** Flies the aircraft along an SVG path (SMIL animateMotion, started when mounted). */
const Follow = ({ path, dur, repeat = false }: { path: string; dur: number; repeat?: boolean }) => {
  const anim = useRef<SVGAnimateMotionElement>(null);
  useEffect(() => { anim.current?.beginElement(); }, []);
  return (
    <g>
      <Aircraft size={1.25} />
      <animateMotion ref={anim} path={path} dur={`${dur}s`} rotate="auto" begin="indefinite" fill="freeze"
        repeatCount={repeat ? "indefinite" : "1"} calcMode="spline" keyTimes="0;1" keySplines={repeat ? "0 0 1 1" : "0.45 0 0.55 1"} />
    </g>
  );
};
const ORBIT_LOOP = "M 470 262 a 74 52 0 1 0 148 0 a 74 52 0 1 0 -148 0";

export const PlantPlan = ({ step }: { step: number }) => (
  <svg viewBox="0 0 800 600" className="h-full w-full" role="img"
    aria-label="Illustration: plan of a gas plant with the aircraft's launch point, survey route, closer passes over the leaking unit and the report">
    <defs>
      <radialGradient id="plume" cx="0.3" cy="0.5" r="0.7">
        <stop offset="0" stopColor={GOLD} stopOpacity=".75" />
        <stop offset=".55" stopColor={GOLD} stopOpacity=".28" />
        <stop offset="1" stopColor={GOLD} stopOpacity="0" />
      </radialGradient>
    </defs>
    <Site />

    {/* 1 · launch */}
    <g>
      <circle cx={LAUNCH.x} cy={LAUNCH.y} r="16" fill="none" stroke={GREEN} strokeWidth="1.5" />
      <circle cx={LAUNCH.x} cy={LAUNCH.y} r="4" fill={GREEN} />
      <text x={LAUNCH.x - 36} y={LAUNCH.y + 34} fontSize="10" fontWeight="600" letterSpacing="1.5" fill={GREEN} fontFamily="Inter, sans-serif">LAUNCH</text>
      {step === 0 && (
        <motion.circle cx={LAUNCH.x} cy={LAUNCH.y} r="16" fill="none" stroke={GREEN} strokeWidth="1.5"
          initial={{ scale: 1, opacity: 0.9 }} animate={{ scale: 2.6, opacity: 0 }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: `${LAUNCH.x}px ${LAUNCH.y}px` }} />
      )}
    </g>

    {/* 2 · survey route */}
    <motion.path d={SURVEY} fill="none" stroke={NAVY} strokeWidth="1.6" strokeDasharray="1 0"
      initial={false} animate={{ pathLength: step >= 1 ? 1 : 0, opacity: step >= 1 ? (step >= 2 ? 0.35 : 0.9) : 0 }}
      transition={{ pathLength: { duration: step >= 1 ? 3.2 : 0.4, ease: "easeInOut" }, opacity: { duration: 0.5 } }} />

    {/* 3 · methane found over U-3 */}
    <AnimatePresence>
      {step >= 2 && (
        <motion.g key="plume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease }}>
          <ellipse cx="590" cy="250" rx="120" ry="44" fill="url(#plume)" transform="rotate(-12 590 250)" />
          <motion.path d={ORBIT} fill="none" stroke={GOLD} strokeWidth="1.8"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }} />
          <g transform="translate(548 236)">
            <path d="M0 0 c-9 -14 -9 -26 0 -26 c9 0 9 12 0 26 z" fill={NAVY} />
            <circle cx="0" cy="-17" r="3.5" fill={GOLD} />
          </g>
        </motion.g>
      )}
    </AnimatePresence>

    {/* aircraft: waiting at launch, flying the survey grid, then circling the unit */}
    {step === 0 && <g transform={`translate(${LAUNCH.x} ${LAUNCH.y - 1}) rotate(-50)`}><Aircraft size={1.25} /></g>}
    {step === 1 && <Follow key="survey" path={SURVEY} dur={3.2} />}
    {step >= 2 && <Follow key="orbit" path={ORBIT_LOOP} dur={6} repeat />}

    {/* corner tag */}
    <text x="24" y="34" fontSize="14" letterSpacing="1.5" fill={NAVY} fillOpacity=".55" fontFamily="Inter, sans-serif">ILLUSTRATION · NOT A REAL SITE</text>
  </svg>
);
