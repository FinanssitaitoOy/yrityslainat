import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Sectors } from "@/components/sections/Sectors";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { ApplicationForm } from "@/components/sections/ApplicationForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <ClientLogos />
        <Services />
        <WhyChooseUs />
        <Sectors />
        <FAQ />
        <CTABanner />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
