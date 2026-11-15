import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/* Reveals start only once an element is well inside the screen (its top past ~75% of the screen height),
   so the visitor sees the motion instead of arriving after it has finished. */
const VIEW = { once: true, margin: "0px 0px -25% 0px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered reveal with a soft rise. */
export const Reveal = ({ children, delay = 0, y = 40, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEW}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

type StaggerProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
};

export const Stagger = ({ children, className, gap = 0.12 }: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={VIEW}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: gap } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, y = 36 }: { children: ReactNode; className?: string; y?: number }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);
