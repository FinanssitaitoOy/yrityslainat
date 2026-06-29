"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GridBackdrop } from "@/components/visuals/GridBackdrop";
import { TrustPanel } from "@/components/visuals/TrustPanel";
import { useContactModal } from "@/components/providers/ContactModalProvider";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.1 + i * 0.1 },
  }),
};

export function Hero() {
  const { openContactModal } = useContactModal();
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-32">
      <GridBackdrop />

      <Container className="relative pb-20 pt-10 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
              <Eyebrow>Yritysrahoitus</Eyebrow>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-tightest text-ink sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]"
            >
              Maksuton rahoitusarvio yrityksellesi
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
            >
              Selvitämme yrityksesi rahoitusmahdollisuudet yhteistyössä
              rahoittajakumppaneidemme kanssa. Hakemuksen täyttäminen on
              maksutonta, luottamuksellista eikä sido sinua mihinkään.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" onClick={openContactModal}>
                Jätä yhteydenottopyyntö
                <ArrowRight className="size-4" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#yhteystiedot">Laske rahoituksesi</a>
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2"
            >
              {[
                "15 vuotta kokemusta",
                "450+ toteutettua rahoitusta",
                "Ilmainen alkuarviointi",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing, delay: 0.35 }}
            className="relative"
          >
            <TrustPanel />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
