import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Jätä yhteydenottopyyntö",
    description:
      "Kerro rahoitustarpeesi lyhyesti — ilmainen ja sitoumukseton alkuarviointi.",
  },
  {
    index: "02",
    title: "Kartoitus ja räätälöity suunnitelma",
    description:
      "Asiantuntijamme analysoi tilanteesi ja löytää sopivimmat rahoittajat verkostostamme.",
  },
  {
    index: "03",
    title: "Rahoitus järjestyy",
    description:
      "Neuvottelemme parhaat ehdot puolestasi ja viemme prosessin maaliin saakka.",
  },
];

const trustStats = [
  { value: "15 v", label: "kokemus" },
  { value: "450+", label: "hanketta" },
  { value: "92 %", label: "onnistuu" },
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

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
        {trustStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xl font-semibold tracking-tight text-ink">
              {stat.value}
            </p>
            <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-ink-faint">
              {stat.label}
            </p>
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
