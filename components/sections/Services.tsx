"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/content";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal, staggerContainer, staggerItem } from "@/components/primitives/Reveal";

export function Services() {
  return (
    <Section id="palvelut">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Palvelumme</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
              Kattavat rahoitusratkaisut yrityksellesi.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Jokainen toimeksianto räätälöidään yrityksenne tarpeisiin.
              Löydämme sopivimman rahoittajan ja parhaat ehdot puolestanne.
            </p>
          </Reveal>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col rounded-3xl border border-line bg-background p-7 shadow-card transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-background text-brand shadow-card transition-all duration-300 group-hover:border-brand/20 group-hover:bg-brand group-hover:text-background group-hover:shadow-none">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.16em] text-ink-faint">
                    {service.index}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex -translate-x-1 items-center gap-1.5 text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Lue lisää
                  <ArrowUpRight className="size-4" />
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}
