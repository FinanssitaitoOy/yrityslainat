"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GrowthChart() {
  const reduce = useReducedMotion();

  const linePath =
    "M 24 256 C 96 250, 132 214, 192 206 S 286 190, 332 150 S 420 96, 496 52";
  const areaPath = `${linePath} L 496 296 L 24 296 Z`;

  const gridX = [24, 142, 260, 378, 496];
  const gridY = [56, 120, 184, 248];

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-background shadow-lift">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex flex-col">
            <span className="eyebrow !tracking-[0.18em]">Järjestetty rahoitus · 2024</span>
            <span className="mt-1 font-mono text-2xl font-medium tracking-tight text-ink">
              250M€+
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line px-3 py-1">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">
              Live
            </span>
          </div>
        </div>

        <div className="px-4 pb-5 pt-6 sm:px-6">
          <svg
            viewBox="0 0 520 320"
            className="h-auto w-full"
            role="img"
            aria-label="Havainnollistava kaavio järjestetyn rahoituksen kasvusta vuosien varrella"
          >
            <defs>
              <linearGradient id="ft-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(213 64% 25%)" stopOpacity="0.16" />
                <stop offset="100%" stopColor="hsl(213 64% 25%)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {gridX.map((x) => (
              <line
                key={`gx-${x}`}
                x1={x} y1={24} x2={x} y2={296}
                stroke="hsl(214 24% 91%)" strokeWidth={1}
              />
            ))}
            {gridY.map((y) => (
              <line
                key={`gy-${y}`}
                x1={24} y1={y} x2={496} y2={y}
                stroke="hsl(214 24% 91%)" strokeWidth={1} strokeDasharray="2 5"
              />
            ))}

            <motion.path
              d={areaPath}
              fill="url(#ft-area)"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.path
              d={linePath}
              fill="none"
              stroke="hsl(213 64% 25%)"
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.g
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.5 }}
              style={{ transformOrigin: "496px 52px" }}
            >
              <circle cx={496} cy={52} r={9} fill="hsl(214 78% 55%)" opacity={0.18} />
              <circle cx={496} cy={52} r={4.5} fill="hsl(214 78% 55%)" />
            </motion.g>
          </svg>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
            {[
              { k: "Hankkeita", v: "450+" },
              { k: "Onnistumisaste", v: "92 %" },
              { k: "Rahoitettu", v: "250M€+" },
            ].map((s) => (
              <div key={s.k}>
                <div className="eyebrow !tracking-[0.14em]">{s.k}</div>
                <div className="mt-1 font-mono text-base font-medium text-ink">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-background px-5 py-4 shadow-card sm:flex sm:flex-col"
      >
        <span className="eyebrow !tracking-[0.14em]">Onnistumisaste</span>
        <span className="mt-1 font-mono text-xl font-medium tracking-tight text-ink">
          92 % <span className="text-ink-soft">asiakkaista</span>
        </span>
      </motion.div>
    </div>
  );
}
