import { Metadata } from "next";
import { ServicesList } from "@/components/services/services-list";
import { PricingSection } from "@/components/services/pricing-section";
import { FaqSection } from "@/components/services/faq-section";
import { PageHeader } from "@/components/page-header";

// export const metadata: Metadata = {
//   title: "Services & Tarifs | Création de Sites Web",
//   description: "Services de création de sites web professionnels. Sites vitrines, e-commerce, optimisation SEO et maintenance.",
// };

export default function ServicesPage() {
  return (
    <div className="container px-4 mx-auto py-32">
      <PageHeader
        title="Services & Tarifs"
        description="Des solutions adaptées à vos besoins"
      />
      <ServicesList />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
