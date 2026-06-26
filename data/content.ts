import {
  type LucideIcon,
  Search,
  Building2,
  BarChart3,
  Briefcase,
  RefreshCw,
  Network,
  Award,
  BadgePercent,
  Globe,
  ClipboardList,
  FileSearch,
  Users,
  CheckCircle2,
} from "lucide-react";

export const company = {
  name: "Finanssitaito",
  tagline: "Yritysrahoitusta yli kymmenen vuoden kokemuksella.",
  email: "asiakaspalvelu@finanssitaito.fi",
  phone: "09 42703420",
  phoneFull: "+358 9 42703420",
  address: "Tekniikantie 14, 02150 Espoo",
  postalAddress: "PL 77, 02101 Espoo",
  businessId: "2301610-1",
  founded: "2010",
};

export const nav = [
  { label: "Palvelut", href: "#palvelut" },
  { label: "Miksi me", href: "#miksi-me" },
  { label: "Prosessi", href: "#prosessi" },
  { label: "Tulokset", href: "#tulokset" },
  { label: "UKK", href: "#ukk" },
] as const;

/** Financing types shown in the marquee strip */
export const financingTypes = [
  "Investointilainat",
  "Käyttöpääomalainat",
  "Rakennusluotot",
  "Joukkovelkakirjat",
  "Yrityskaupparahoitus",
  "Projektiluotot",
  "Mezzanine-rahoitus",
  "Syndikoidut lainat",
  "Erityisrahoitus",
  "RCF-luottolimiitit",
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: string;
};

export const services: Service[] = [
  {
    index: "01",
    icon: Search,
    title: "Lainanhakupalvelu",
    description:
      "Räätälöityä lainanhakupalvelua yrityksille, jotka tarvitsevat merkittävää rahoitusta investointeihin, projekteihin tai käyttöpääoman vahvistamiseen.",
  },
  {
    index: "02",
    icon: Building2,
    title: "Rakennushankkeen rahoituspalvelut",
    description:
      "Autamme rakennusalan toimijoita hankkimaan riittävän lainaehtoisen rahoituksen — RS-rakentamiseen, ryhmärakentamiseen ja vapaarahoitteisiin kohteisiin.",
  },
  {
    index: "03",
    icon: BarChart3,
    title: "Mid Market Bond+",
    description:
      "Joukkovelkakirjarahoitusta yrityksille, joiden rahoitustarve alkaa kymmenistä miljoonista euroista. Optimoimme ehdot ja avaamme pääomamarkkinat.",
  },
  {
    index: "04",
    icon: Briefcase,
    title: "Yrityskaupan suunnittelu ja rahoitus",
    description:
      "Kokonaisvaltaista apua yrityskauppojen rahoitukseen — sekä ostajan että myyjän näkökulmasta, usein yhteistyössä erikoistuneiden asiantuntijoiden kanssa.",
  },
  {
    index: "05",
    icon: RefreshCw,
    title: "Rahoituksen uudelleenjärjestely",
    description:
      "Autamme pankkilainojen ja velkojen uudelleenjärjestelyssä. Tyypillinen toimeksianto on muutamista sadoista tuhansista kymmeniin miljooniin euroihin.",
  },
  {
    index: "06",
    icon: Network,
    title: "Palvelut rahoittajille",
    description:
      "Kohdevirtapalvelu ammattimaisille rahoittajille ja sijoittajille, jotka etsivät kriteerinsä täyttäviä rahoitus- ja sijoituskohteita.",
  },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const stats: Stat[] = [
  { value: 15, suffix: " v", label: "Kokemus yritysrahoituksesta" },
  { value: 450, suffix: "+", label: "Toteutettua yritysrahoitusta" },
  { value: 92, suffix: "%", label: "Asiakkaista saa rahoituksen" },
  { value: 250, suffix: "M€+", label: "Järjestettyä rahoitusta" },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: Award,
    title: "Kokeneet asiantuntijat",
    description:
      "Yli 15 vuoden kokemus yritysrahoituksesta. Asiantuntijamme tuntevat rahoitusmarkkinat ja löytävät juuri teille sopivimmat rahoittajat.",
  },
  {
    icon: BadgePercent,
    title: "Tulosperusteinen palkkio",
    description:
      "Palkkiomme perustuvat suurelta osin onnistumiseen — maksat tuloksista, ei pelkästä yrityksestä. Ei piilokuluja, ei yllätyksiä.",
  },
  {
    icon: Globe,
    title: "Laaja rahoittajaverkosto",
    description:
      "Meillä on vakiintuneet suhteet pankkeihin, rahoituslaitoksiin ja institutionaalisiin sijoittajiin ympäri Suomen ja Pohjoismaat.",
  },
];

export type ProcessStep = {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
};

export const process: ProcessStep[] = [
  {
    index: "01",
    icon: ClipboardList,
    title: "Ilmainen rahoitusarviointi",
    description:
      "Kartoitamme yrityksenne rahoitustarpeen ja -mahdollisuudet maksuttomasti. Arvioimme hankkeen toteutettavuuden ennen kuin etenette.",
    duration: "Viikko 1",
  },
  {
    index: "02",
    icon: FileSearch,
    title: "Analyysi ja valmistelu",
    description:
      "Laadimme räätälöidyn rahoitussuunnitelman, talousanalyysit ja hakuasiakirjat, jotka vakuuttavat rahoittajat.",
    duration: "Viikot 2–3",
  },
  {
    index: "03",
    icon: Users,
    title: "Rahoittajaneuvottelut",
    description:
      "Esittelemme hankkeenne sopivimmille rahoittajille ja neuvottelemme parhaat mahdolliset rahoitusehdot puolestanne.",
    duration: "Viikot 4–6",
  },
  {
    index: "04",
    icon: CheckCircle2,
    title: "Rahoituksen järjestäminen",
    description:
      "Tuemme teitä sopimusneuvotteluissa ja rahoituksen lopullisessa toteutuksessa — aina maaliin asti.",
    duration: "Jatkuva",
  },
];

export type Sector = {
  sector: string;
  tag: string;
  summary: string;
  metricLabel: string;
  metric: string;
  highlight: string;
};

export const sectors: Sector[] = [
  {
    sector: "Kasvuyritykset",
    tag: "Lainanhakupalvelu",
    summary:
      "Järjestämme kasvuvaiheen rahoitusta investointeihin, käyttöpääomaan ja yritysostoihin. Rahoitusväli 200 000 – 50 000 000 €.",
    metricLabel: "Rahoitusväli",
    metric: "200k€ – 50M€",
    highlight: "450+ hanketta",
  },
  {
    sector: "Rakennushankkeet",
    tag: "Rakennusrahoitus",
    summary:
      "RS-rakentaminen, ryhmärakentaminen ja vapaarahoitteiset kohteet — löydämme oikean rahoitusrakenteen kaikille hanketyypeille.",
    metricLabel: "Asiantuntemusta",
    metric: "Kaikki hanketyypit",
    highlight: "15+ vuotta",
  },
  {
    sector: "Yrityskaupat",
    tag: "M&A-rahoitus",
    summary:
      "Kokonaisvaltainen tuki yrityskauppojen rahoitukseen ostajan ja myyjän näkökulmasta — alusta sopimukseen asti.",
    metricLabel: "Onnistumisaste",
    metric: "92 %",
    highlight: "Tulosperusteinen palkkio",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  phone: string;
  email: string;
  initials: string;
  focus: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Björn Masalin",
    role: "Toimitusjohtaja, KTM",
    phone: "+358 41 501 5290",
    email: "bjorn.masalin@finanssitaito.fi",
    initials: "BM",
    focus:
      "Yritysten rahoitusjärjestelyiden asiantuntija. Yli 15 vuoden kokemus kasvuyritysten ja rakennushankkeiden rahoituksesta.",
  },
  {
    name: "Ismo Sopanen",
    role: "Partneri",
    phone: "+358 45 852 9711",
    email: "ismo.sopanen@finanssitaito.fi",
    initials: "IS",
    focus:
      "Erikoistunut suuriin yrityskauppoihin ja rahoitusjärjestelyihin. Laaja verkosto pankkeihin ja institutionaalisiin sijoittajiin.",
  },
  {
    name: "Juha Hentilä",
    role: "Rahoituskonsultti, KTM",
    phone: "+358 40 844 3535",
    email: "juha.hentila@finanssitaito.fi",
    initials: "JH",
    focus:
      "Rakennusalan ja projektiyhtiöiden rahoituksen erikoisosaaja. Analyyttinen lähestymistapa monimutkaisiin hankkeisiin.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Voinko käyttää palvelua, vaikka yritykseni olisi vasta aloittanut toimintansa?",
    answer:
      "Aloittavia yrityksiä palvellaan pääsääntöisesti vain poikkeustapauksissa. Projektiyhtiöt, joilla on kokenut johto ja selkeä hankesuunnitelma, voivat kuitenkin täyttää arviointikriteerimme. Ota yhteyttä, niin arvioimme tilanteenne maksuttomasti.",
  },
  {
    question: "Mitä lainanhakupalvelu maksaa?",
    answer:
      "Palkkiorakenne koostuu kolmesta osasta: peruspalkkio (ennakkoon), menestyspalkkio (rahoituksen järjestyessä) sekä valinnainen tarjouspalkkio prosessin aikana. Tarkat hinnat sovitaan aina projektikohtaisesti hankkeen koon mukaan.",
  },
  {
    question: "Voiko palvelun keskeyttää kesken prosessin?",
    answer:
      "Kyllä, palvelun voi keskeyttää. Kustannukset rajoittuvat tehtyyn työhön ja maksamattomiin palkkioihin. Finanssitaito pidättää kolmen vuoden menestyspalkkio-oikeuden myös keskeytystilanteessa.",
  },
  {
    question: "Mitä tapahtuu, jos rahoitusta ei järjesty?",
    answer:
      "Teemme ennen toimeksiantoa perusteellisen arvion rahoitusmahdollisuuksista. Emme ota toimeksiantoja, joissa näkymät ovat heikot. Onnistumisprosenttimme on yli 90 % niiden asiakkaiden kohdalla, joiden kanssa aloitamme yhteistyön.",
  },
  {
    question: "Mitä dokumentteja rahoitusprosessi vaatii?",
    answer:
      "Tyypillisesti tarvitaan tilinpäätökset, tasekirjat, budjetit, kassavirtaennusteet, liiketoimintasuunnitelma sekä tiedot vastuista, vakuuksista ja omistusrakenteesta. Autamme asiakirjojen laadinnassa osana palveluamme.",
  },
  {
    question: "Voitteko auttaa ennusteiden tai kassavirran mallintamisessa?",
    answer:
      "Kyllä. Talousennusteiden ja kassavirran mallintaminen sisältyy konsultointipalveluumme. Laadukas taloudellinen dokumentaatio on keskeinen osa onnistunutta rahoitusprosessia.",
  },
  {
    question: "Tarjoatteko neuvontaa rahoituksen jälkeenkin?",
    answer:
      "Kyllä. Palveluumme kuuluu jatkotuki sopimusehtojen seurannassa ja investointisuunnittelussa. Pitkäaikaiset asiakassuhteet ovat meille tärkeitä.",
  },
  {
    question: "Voiko yritykseni saada rahoitusta maksuhäiriöiden tai heikon kannattavuuden kanssa?",
    answer:
      "Tapaukset arvioidaan aina yksilöllisesti. Joissain tilanteissa rahoitus on mahdollista vakuuksien, takausten tai uudistetun strategian tuella. Ota yhteyttä, niin arvioimme mahdollisuutenne.",
  },
];

export const footerNav = {
  Palvelut: [
    { label: "Lainanhakupalvelu", href: "#palvelut" },
    { label: "Rakennushankkeen rahoitus", href: "#palvelut" },
    { label: "Mid Market Bond+", href: "#palvelut" },
    { label: "Yrityskaupan rahoitus", href: "#palvelut" },
    { label: "Rahoituksen uudelleenjärjestely", href: "#palvelut" },
    { label: "Palvelut rahoittajille", href: "#palvelut" },
  ],
  Yritys: [
    { label: "Miksi Finanssitaito", href: "#miksi-me" },
    { label: "Prosessi", href: "#prosessi" },
    { label: "Tulokset", href: "#tulokset" },
    { label: "Yhteystiedot", href: "#yhteystiedot" },
  ],
  Lakiasiat: [
    { label: "Tietosuojaseloste", href: "#" },
    { label: "Vastuulauseke", href: "#" },
    { label: "Evästeasetukset", href: "#" },
  ],
} as const;

export const socials = [
  { label: "LinkedIn", href: "#" },
] as const;
