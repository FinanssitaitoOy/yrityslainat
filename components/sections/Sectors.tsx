"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { sectors } from "@/data/content";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal, staggerContainer, staggerItem } from "@/components/primitives/Reveal";

export function Sectors() {
  return (
    <Section id="tulokset" tone="canvas">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Toimialat</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
                Palvelemme kaikkia toimialoja.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#yhteystiedot"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-700"
            >
              Pyydä tarjousta
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {sectors.map((s) => (
            <motion.article
              key={s.sector}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-3xl border border-line bg-background p-7 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-faint">
                  {s.tag}
                </span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent">
                  {s.highlight}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                {s.sector}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.summary}
              </p>

              <div className="mt-7 rounded-2xl bg-canvas p-5">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-faint">
                  {s.metricLabel}
                </span>
                <div className="mt-2 font-mono text-2xl font-medium tracking-tight text-ink">
                  {s.metric}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
