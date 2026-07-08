import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Scroll-triggered reveal with a soft rise. Respects reduced motion via viewport-once. */
export const Reveal = ({ children, delay = 0, y = 28, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

type StaggerProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
};

export const Stagger = ({ children, className, gap = 0.09 }: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: gap } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className, y = 24 }: { children: ReactNode; className?: string; y?: number }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);
