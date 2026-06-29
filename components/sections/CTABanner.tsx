"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { company } from "@/data/content";
import { useContactModal } from "@/components/providers/ContactModalProvider";

export function CTABanner() {
  const { openContactModal } = useContactModal();
  return (
    <section className="py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-ink px-7 py-16 text-background shadow-lift sm:px-14 sm:py-20 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px)",
              backgroundSize: "120px 100%",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-300/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute left-14 top-0 h-px origin-left bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
            style={{ width: "40%" }}
          />

          <div className="relative max-w-2xl">
            <Eyebrow className="text-background/60 [&>span]:bg-accent">
              Aloitetaan yhteistyö
            </Eyebrow>

            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.06] tracking-tightest sm:text-4xl lg:text-[2.9rem]">
              Jätä yhteydenottopyyntö — ilmainen rahoitusarviointi.
            </h2>

            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-background/65">
              Kartoitamme rahoitustarpeenne ja -mahdollisuutenne maksuttomasti.
              Kerromme suoraan, voimmeko auttaa — ja jos emme voi, sanomme sen.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={openContactModal}
                className="bg-background text-ink hover:bg-background/92 active:translate-y-px"
              >
                Jätä yhteydenottopyyntö
                <ArrowRight className="size-4" />
              </Button>
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-7">
              <a
                href={`tel:${company.phoneFull}`}
                className="inline-flex items-center gap-2 font-mono text-sm text-background/55 transition-colors hover:text-background/90"
              >
                <Phone className="size-3.5" />
                {company.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
