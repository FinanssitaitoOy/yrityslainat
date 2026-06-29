"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, PhoneCall, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Section } from "@/components/primitives/Section";

const AMOUNTS = [
  "200 000 – 500 000 €",
  "500 000 – 1 000 000 €",
  "1 000 000 – 5 000 000 €",
  "5 000 000 – 10 000 000 €",
  "10 000 000 – 50 000 000 €",
  "yli 50 000 000 €",
];

const NEXT_STEPS = [
  {
    icon: Clock,
    title: "Nopea yhteydenotto",
    description:
      "Otamme sinuun yhteyttä mahdollisimman pian hakemuksesi vastaanottamisen jälkeen.",
  },
  {
    icon: PhoneCall,
    title: "Maksuton rahoitusarvio",
    description:
      "Käymme läpi yrityksesi rahoitustarpeen ja arvioimme rahoitusmahdollisuudet yhteistyössä rahoittajakumppaneidemme kanssa. Jos rahoituksen edellytykset eivät vielä täyty, kerromme, mihin asioihin kannattaa keskittyä ennen seuraavaa rahoitushakemusta.",
  },
  {
    icon: ShieldCheck,
    title: "Yhteistyöehdotus",
    description:
      "Jos arvioimme, että yritykselläsi on hyvät edellytykset rahoituksen järjestämiseen, esitämme sinulle yhteistyöehdotuksen. Tämän jälkeen päätät itse, haluatko meidän hoitavan rahoitusprosessin puolestasi alusta aina sopivan rahoitusratkaisun löytämiseen saakka.",
  },
];

const inputBase =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:opacity-50";

const labelBase = "mb-1.5 block text-sm font-medium text-ink";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string) ?? "";

    const lines = [
      `Rahoituksen määrä: ${get("amount")}`,
      `Rahoituksen tarkoitus:\n${get("purpose")}`,
      "",
      `Yrityksen nimi: ${get("company")}`,
      `Y-tunnus: ${get("businessId")}`,
      "",
      `Yhteyshenkilö: ${get("name")}`,
      `Sähköposti: ${get("email")}`,
      `Puhelinnumero: ${get("phone")}`,
      ...(get("info") ? ["", `Lisätiedot:\n${get("info")}`] : []),
    ];

    const subject = encodeURIComponent(`Rahoitushakemus — ${get("company")}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:yrityslainat@finanssitaito.fi?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Section id="yhteystiedot" tone="canvas">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Rahoitushakemus</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
            Jätä yhteydenottopyyntö — se on ilmainen ja sitoumukseton.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          {/* ── Form card ── */}
          <div className="rounded-3xl border border-line bg-background p-8 shadow-card sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-brand/10">
                    <CheckCircle2 className="size-8 text-brand" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    Hakemuksesi on lähetetty!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                    Sähköpostiohjelmasi avautuu hetken kuluttua. Mikäli se ei
                    avaudu, ota yhteyttä suoraan puhelimitse.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-medium text-brand hover:underline"
                  >
                    Lähetä uusi hakemus
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate={false}
                  className="space-y-5"
                >
                  {/* Financing amount */}
                  <div>
                    <label htmlFor="amount" className={labelBase}>
                      Rahoituksen määrä <span className="text-accent">*</span>
                    </label>
                    <select id="amount" name="amount" required className={inputBase}>
                      <option value="" disabled selected>
                        Valitse rahoituksen suuruusluokka
                      </option>
                      {AMOUNTS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className={labelBase}>
                      Rahoituksen tarkoitus <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      required
                      rows={3}
                      placeholder="Kuvaile lyhyesti, mihin rahoitusta tarvitaan (esim. investointi, käyttöpääoma, yrityskauppa)."
                      className={inputBase}
                    />
                  </div>

                  {/* Company + Business ID */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className={labelBase}>
                        Yrityksen nimi <span className="text-accent">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Yritys Oy"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="businessId" className={labelBase}>
                        Y-tunnus <span className="text-accent">*</span>
                      </label>
                      <input
                        id="businessId"
                        name="businessId"
                        type="text"
                        required
                        placeholder="1234567-8"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Contact name */}
                  <div>
                    <label htmlFor="name" className={labelBase}>
                      Yhteyshenkilön nimi <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Etunimi Sukunimi"
                      className={inputBase}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Sähköposti <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="etunimi@yritys.fi"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Puhelinnumero <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+358 40 000 0000"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Additional info (optional) */}
                  <div>
                    <label htmlFor="info" className={labelBase}>
                      Lisätiedot{" "}
                      <span className="font-normal text-ink-faint">(valinnainen)</span>
                    </label>
                    <textarea
                      id="info"
                      name="info"
                      rows={3}
                      placeholder="Muuta oleellista tietoa hakemukseesi liittyen."
                      className={inputBase}
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-canvas px-4 py-3.5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-0.5 size-4 shrink-0 accent-brand"
                    />
                    <label htmlFor="privacy" className="text-sm leading-relaxed text-ink-soft">
                      Hyväksyn{" "}
                      <a
                        href="#"
                        className="font-medium text-brand hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        tietosuojaselosteen
                      </a>{" "}
                      ja annan luvan käsitellä hakemuksessani antamiani tietoja
                      rahoituskartoitusta varten. <span className="text-accent">*</span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Lähetä hakemus
                    <ArrowRight className="size-4" />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right panel ── */}
          <div className="flex flex-col gap-6 lg:pt-2">
            <div className="rounded-3xl border border-line bg-background p-7 shadow-card">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint">
                Mitä tapahtuu seuraavaksi?
              </p>
              <ul className="mt-6 flex flex-col gap-6">
                {NEXT_STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-brand shadow-card">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{step.title}</p>
                        <p className="mt-0.5 text-[0.83rem] leading-relaxed text-ink-soft">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
