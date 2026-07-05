import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ExtensionShowcase from "@/components/ExtensionShowcase";
import Merchandise from "@/components/Merchandise";
import Community from "@/components/Community";
import Charity from "@/components/Charity";
import Games from "@/components/Games";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <ExtensionShowcase />
        <Merchandise />
        <Community />
        <Charity />
        <Games />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Download />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
