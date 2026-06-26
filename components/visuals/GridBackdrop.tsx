"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ambient hero backdrop: a faint dotted/ruled field plus one very soft
 * blue radial glow. The single signature gradient on the page.
 */
export function GridBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft brand glow, kept subtle */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-300/10 blur-3xl"
      />
      <div className="absolute -top-24 left-[-8%] h-[420px] w-[420px] rounded-full bg-canvas blur-3xl" />

      {/* hairline ruled field, fading out downward */}
      <div
        className="absolute inset-x-0 top-0 h-full opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(214 24% 91% / 0.6) 1px, transparent 1px), linear-gradient(to bottom, hsl(214 24% 91% / 0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(120% 80% at 70% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 70% 0%, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
