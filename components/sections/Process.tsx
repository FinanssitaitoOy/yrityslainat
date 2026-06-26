"use client";

import { motion } from "framer-motion";

import { process } from "@/data/content";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal, staggerContainer, staggerItem } from "@/components/primitives/Reveal";

export function Process() {
  return (
    <Section id="prosessi">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Näin toimimme</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
                Selkeä polku rahoitustarpeesta sopimukseen.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft md:text-right">
              Neljä vaihetta, selkeä laajuus, nimetyt vastuut. Tiedätte aina,
              missä vaiheessa prosessi etenee.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-line lg:block"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <motion.li key={step.index} variants={staggerItem} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-line bg-background font-mono text-sm font-medium text-ink shadow-card">
                      {step.index}
                    </span>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                      {step.duration}
                    </span>
                  </div>

                  <div className="mt-6">
                    <Icon className="size-5 text-brand" />
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
