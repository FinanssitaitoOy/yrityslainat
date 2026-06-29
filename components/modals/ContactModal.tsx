"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const easing = [0.22, 1, 0.36, 1] as const;

const inputBase =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0";
const labelBase = "mb-1.5 block text-sm font-medium text-ink";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const phone = (f.get("phone") as string) ?? "";
    const email = (f.get("email") as string) ?? "";

    const lines = [
      `Puhelinnumero: ${phone}`,
      ...(email ? [`Sähköposti: ${email}`] : []),
    ];

    const subject = encodeURIComponent("Yhteydenottopyyntö — Lainakompassi");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:yrityslainat@finanssitaito.fi?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.28, ease: easing }}
              className="relative w-full max-w-md rounded-3xl border border-line bg-background p-8 shadow-lift sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-canvas hover:text-ink"
                aria-label="Sulje"
              >
                <X className="size-4" />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: easing }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <span className="flex size-14 items-center justify-center rounded-full bg-brand/10">
                      <CheckCircle2 className="size-7 text-brand" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                      Yhteydenottopyyntö lähetetty!
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                      Otamme sinuun yhteyttä mahdollisimman pian.
                    </p>
                    <Button onClick={handleClose} className="mt-7">
                      Sulje
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2
                      id="contact-modal-title"
                      className="pr-8 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                    >
                      Jätä yhteydenottopyyntö
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Jätä puhelinnumerosi, niin olemme sinuun yhteydessä
                      mahdollisimman pian.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="modal-phone" className={labelBase}>
                          Puhelinnumero <span className="text-accent">*</span>
                        </label>
                        <input
                          id="modal-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+358 40 000 0000"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-email" className={labelBase}>
                          Sähköposti{" "}
                          <span className="font-normal text-ink-faint">
                            (valinnainen)
                          </span>
                        </label>
                        <input
                          id="modal-email"
                          name="email"
                          type="email"
                          placeholder="etunimi@yritys.fi"
                          className={inputBase}
                        />
                      </div>
                      <Button type="submit" size="lg" className="mt-2 w-full">
                        Lähetä yhteydenottopyyntö
                        <ArrowRight className="size-4" />
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
