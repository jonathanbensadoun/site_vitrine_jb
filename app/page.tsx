import { HeroSection } from "@/components/hero-section";
import { ServicesList } from "@/components/services/services-list";
import { PricingSection } from "@/components/services/pricing-section";
import { FaqSection } from "@/components/services/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <ServicesList />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}