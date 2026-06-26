import { financingTypes } from "@/data/content";
import { Container } from "@/components/primitives/Container";

const doubled = [...financingTypes, ...financingTypes];

export function ClientLogos() {
  return (
    <section className="border-y border-line bg-background py-12" aria-label="Rahoitustyypit">
      <Container>
        <p className="text-center font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-faint">
          Järjestämme rahoitusta — kaikki hanketyypit
        </p>
      </Container>

      <div
        className="marquee-track relative mt-9 flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        }}
      >
        {[0, 1].map((run) => (
          <ul
            key={run}
            aria-hidden={run === 1}
            className="animate-marquee flex shrink-0 items-center gap-16 whitespace-nowrap pr-16"
          >
            {doubled.map((name, i) => (
              <li
                key={i}
                className="select-none text-[0.95rem] font-semibold tracking-tight text-ink-faint transition-colors duration-300 hover:text-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
