"use client";

import { motion } from "framer-motion";

import { benefits, stats } from "@/data/content";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { AnimatedNumber } from "@/components/primitives/AnimatedNumber";

export function WhyChooseUs() {
  return (
    <Section id="miksi-me" tone="canvas">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Miksi Lainakompassi</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
                Rahoitusta yrityksesi tarpeisiin.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                Lainakompassi on suomalainen rahoituskonsultointipalvelu,
                joka auttaa yrityksiä löytämään sopivat rahoitusratkaisut.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-7">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal as="li" key={b.title} delay={0.12 + i * 0.08}>
                    <div className="flex gap-4">
                      <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-background text-brand">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">
                          {b.title}
                        </h3>
                        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal delay={0.15} className="lg:pt-2">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink p-8 text-background shadow-lift sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-brand-300/20 blur-3xl"
              />
              <p className="relative font-mono text-[0.72rem] uppercase tracking-[0.22em] text-background/60">
                Lukuina
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono text-4xl font-medium tracking-tight text-background sm:text-[2.75rem]">
                      <AnimatedNumber
                        value={stat.value}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="mt-2 text-sm leading-snug text-background/65">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="relative mt-10 h-px origin-left bg-background/15"
              />
              <p className="relative mt-6 text-sm leading-relaxed text-background/70">
                Luvut perustuvat vuodesta 2010 lähtien toteutettuihin
                asiakastoimeksiantoihin.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
