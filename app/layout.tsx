import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

const siteUrl = "https://finanssitaito.fi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yritysrahoitus ja rahoituskonsultointi 200k€ – 100M€ | Finanssitaito",
    template: "%s · Finanssitaito",
  },
  description:
    "Finanssitaito Oy on vuonna 2010 perustettu suomalainen rahoituskonsultointiyritys. Järjestämme yrityksille rahoitusta 200 000 – 100 000 000 euroon. Yli 450 toteutettua yritysrahoitusta ja 92 % asiakkaista saa rahoituksen.",
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
    "Espoo",
    "Suomi",
    "rahoituskonsultti",
  ],
  authors: [{ name: "Finanssitaito Oy" }],
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: "Finanssitaito",
    title: "Yritysrahoitus ja rahoituskonsultointi 200k€ – 100M€ | Finanssitaito",
    description:
      "Järjestämme yrityksille rahoitusta 200 000 – 100 000 000 euroon. Yli 450 toteutettua yritysrahoitusta — 92 % asiakkaista saa rahoituksen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanssitaito — Yritysrahoitus ja rahoituskonsultointi",
    description:
      "Yritysrahoitusta yli kymmenen vuoden kokemuksella. 450+ toteutettua hanketta, 92 % onnistumisaste.",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fi": siteUrl,
      "sv": `${siteUrl}/sv`,
      "en": `${siteUrl}/en`,
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
  name: "Finanssitaito Oy",
  description:
    "Suomalainen rahoituskonsultointiyritys, joka järjestää yrityksille rahoitusta 200 000 – 100 000 000 euroon. Palveluita: lainanhakupalvelu, rakennushankkeen rahoitus, Mid Market Bond+, yrityskaupan rahoitus ja rahoituksen uudelleenjärjestely.",
  url: siteUrl,
  email: "asiakaspalvelu@finanssitaito.fi",
  telephone: "+358942703420",
  foundingDate: "2010",
  vatID: "FI23016101",
  areaServed: ["FI", "SE", "NO", "DK"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tekniikantie 14",
    addressLocality: "Espoo",
    postalCode: "02150",
    addressCountry: "FI",
  },
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
