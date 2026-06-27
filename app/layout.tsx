import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

const siteUrl = "https://finanssitaito.fi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yritysrahoitus ja rahoituskonsultointi 200k€ – 100M€ | Lainakompassi",
    template: "%s · Lainakompassi",
  },
  description:
    "Lainakompassi järjestää yrityksille rahoitusta 200 000 – 100 000 000 euroon. Yli 450 toteutettua yritysrahoitusta ja 92 % asiakkaista saa rahoituksen. Ilmainen alkuarviointi.",
  keywords: [
    "yritysrahoitus",
    "lainanhakupalvelu",
    "rakennusrahoitus",
    "yrityslaina",
    "rahoituskonsultointi",
    "yrityskaupan rahoitus",
    "joukkovelkakirja",
    "rahoituksen uudelleenjärjestely",
    "Mid Market Bond",
    "Suomi",
    "rahoituskonsultti",
    "lainakompassi",
  ],
  authors: [{ name: "Lainakompassi" }],
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: "Lainakompassi",
    title: "Yritysrahoitus ja rahoituskonsultointi 200k€ – 100M€ | Lainakompassi",
    description:
      "Järjestämme yrityksille rahoitusta 200 000 – 100 000 000 euroon. Yli 450 toteutettua yritysrahoitusta — 92 % asiakkaista saa rahoituksen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lainakompassi — Yritysrahoitus ja rahoituskonsultointi",
    description:
      "Yritysrahoitusta yli kymmenen vuoden kokemuksella. 450+ toteutettua hanketta, 92 % onnistumisaste.",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fi": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Lainakompassi",
  description:
    "Suomalainen rahoituskonsultointipalvelu, joka järjestää yrityksille rahoitusta 200 000 – 100 000 000 euroon. Palveluita: lainanhakupalvelu, rakennushankkeen rahoitus, Mid Market Bond+, yrityskaupan rahoitus ja rahoituksen uudelleenjärjestely.",
  url: siteUrl,
  areaServed: ["FI", "SE", "NO", "DK"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Siirry sisältöön
        </a>
        {children}
      </body>
    </html>
  );
}
