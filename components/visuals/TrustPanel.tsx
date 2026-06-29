import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Jätä hakemus",
    description:
      "Kerro yrityksesi rahoitustarpeesta. Hakemuksen täyttäminen on maksutonta, luottamuksellista eikä sido sinua mihinkään.",
  },
  {
    index: "02",
    title: "Arvioimme mahdollisuutesi",
    description:
      "Asiantuntijamme arvioi yrityksesi tilanteen ja selvittää rahoitusmahdollisuudet yhteistyössä rahoittajakumppaneidemme kanssa.",
  },
  {
    index: "03",
    title: "Saat asiantuntijan arvion",
    description:
      "Saat selkeän arvion yrityksesi rahoitusmahdollisuuksista. Jos rahoitus ei vielä ole mahdollinen, kerromme mitä kannattaa kehittää ennen seuraavaa hakemusta.",
  },
];

const trustStats = [
  { value: "Maksuton arvio" },
  { value: "Luottamuksellinen käsittely" },
  { value: "Ei sitoumuksia" },
];

export function TrustPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-background p-8 shadow-lift sm:p-10">
      {/* decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/8 blur-3xl"
      />

      <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint">
        Näin se toimii
      </p>

      <ol className="mt-6 flex flex-col gap-6">
        {steps.map((step) => (
          <li key={step.index} className="flex items-start gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-xs font-semibold text-brand">
              {step.index}
            </span>
            <div>
              <p className="text-sm font-semibold leading-snug text-ink">
                {step.title}
              </p>
              <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6">
        {trustStats.map((stat) => (
          <div key={stat.value} className="flex items-center gap-2">
            <CheckCircle2 className="size-3.5 shrink-0 text-accent" />
            <p className="text-[0.85rem] text-ink-soft">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-2xl bg-canvas px-4 py-3">
        <CheckCircle2 className="size-4 shrink-0 text-accent" />
        <p className="text-[0.82rem] text-ink-soft">
          Ilmainen alkuarviointi — ei sitovia sopimuksia
        </p>
      </div>
    </div>
  );
}
