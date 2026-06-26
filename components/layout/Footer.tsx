import { footerNav, socials, company } from "@/data/content";
import { Container } from "@/components/primitives/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-background" id="yhteystiedot">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Suomalainen rahoituskonsultointiyritys, joka järjestää yrityksille
              rahoitusta 200 000 – 100 000 000 euroon. Perustettu vuonna {company.founded}.
            </p>
            <div className="mt-6 space-y-1 font-mono text-sm text-ink-soft">
              <p>
                <a
                  href={`tel:${company.phoneFull}`}
                  className="transition-colors hover:text-ink"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {company.email}
                </a>
              </p>
              <p>{company.address}</p>
              <p className="text-ink-faint">{company.postalAddress}</p>
              <p className="pt-1 text-ink-faint">
                Y-tunnus: {company.businessId}
              </p>
            </div>
          </div>

          {(Object.keys(footerNav) as Array<keyof typeof footerNav>).map(
            (group) => (
              <div key={group}>
                <h3 className="eyebrow">{group}</h3>
                <ul className="mt-5 space-y-3">
                  {footerNav[group].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Finanssitaito Oy. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
