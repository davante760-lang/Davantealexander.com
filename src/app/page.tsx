import Hero from "@/components/Hero";
import ListingsSection from "@/components/ListingsSection";
import Services from "@/components/Services";
import FullBleedShowcase from "@/components/FullBleedShowcase";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import QuickLinksCTA from "@/components/QuickLinksCTA";
import PortraitMoment from "@/components/PortraitMoment";
import Testimonials from "@/components/Testimonials";
import PressSection from "@/components/PressSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ListingsSection />
      <Services />
      <FullBleedShowcase />
      <About />
      <StatsSection />
      <QuickLinksCTA />
      <PortraitMoment />
      <Testimonials />
      <PressSection />
      <ContactSection />
    </>
  );
}
