import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { PageHeader } from "@/components/page-header";

// export const metadata: Metadata = {
//   title: "Contact | Demande de Devis",
//   description: "Contactez-moi pour discuter de votre projet web et obtenir un devis personnalisé.",
// };

export default function ContactPage() {
  return (
    <div className="container px-4 mx-auto py-32">
      <PageHeader title="Contact" description="Discutons de votre projet" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
