/* A slow, continuous strip of facts from our flight tests and build. Every figure is sourced in
   our flight logs: 3 airframes, 4 m span, 30-minute test flight, 128.4 m max GPS altitude,
   zero fuel burned in flight (electric, solar-assisted). Only flown or built facts; no modelled figures. */
import { useReducedMotion } from "framer-motion";
const FACTS: [string, string][] = [
  ["3", "full-scale airframes built"],
  ["4 m", "wingspan"],
  ["30 min", "test flight"],
  ["128.4 m", "max altitude"],
  ["0 L", "fuel burned in flight"],
];

const Row = ({ hidden = false }: { hidden?: boolean }) => (
  <ul className="flex shrink-0 items-stretch" aria-hidden={hidden || undefined}>
    {FACTS.map(([v, l]) => (
      <li key={v} className="flex items-baseline gap-3 border-l border-white/15 px-8 md:px-12">
        <span className="whitespace-nowrap font-display text-3xl font-bold text-gold md:text-[2.8rem]">{v}</span>
        <span className="whitespace-nowrap font-body text-base font-bold uppercase tracking-[0.06em] text-white md:text-lg">{l}</span>
      </li>
    ))}
  </ul>
);

const FactsTicker = () => {
  const reduced = useReducedMotion();
  if (reduced) return (
    <div className="border-y border-white/10 py-6"><div className="mx-auto flex max-w-7xl flex-wrap gap-y-4 px-2 [&_ul]:flex-wrap"><Row /></div></div>
  );
  return (
  <div role="region" className="group relative overflow-hidden border-y border-white/10 py-6 md:py-8" aria-label="Key facts">
    <div className="flex w-max animate-[ticker_45s_linear_infinite] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
      <Row />
      <Row hidden />
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy to-transparent md:w-32" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy to-transparent md:w-32" />
  </div>
  );
};

export default FactsTicker;
