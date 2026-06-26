"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

import { teamMembers } from "@/data/content";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal, staggerContainer, staggerItem } from "@/components/primitives/Reveal";

export function Team() {
  return (
    <Section id="tiimi">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Asiantuntijamme</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
              Kohtaatte aina senioritason asiantuntijan.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              Ensimmäisessä tapaamisessa oleva asiantuntija on sama, joka
              vie hankkeenne maaliin. Ei välikäsiä, ei juniorityötä.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-line bg-background p-7 shadow-card"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand font-mono text-sm font-medium text-background">
                  {member.initials}
                </span>
                <div>
                  <p className="text-base font-semibold tracking-tight text-ink">
                    {member.name}
                  </p>
                  <p className="text-sm text-ink-soft">{member.role}</p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {member.focus}
              </p>

              <div className="mt-7 flex flex-col gap-2 border-t border-line pt-6">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <Phone className="size-3.5 shrink-0 text-brand" />
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <Mail className="size-3.5 shrink-0 text-brand" />
                  {member.email}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
