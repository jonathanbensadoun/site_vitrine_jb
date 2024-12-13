"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Le délai de création varie selon la complexité du projet. Un site vitrine ou une landing varie entre 1-3 semaines. Chaque projet est unique et nous établissons un planning détaillé lors de la phase de conception.",
  },
  {
    question: "Quelles sont les technologies utilisées ?",
    answer:
      "Nous utilisons les dernières technologies web comme Next.js, React, et Tailwind CSS pour créer des sites modernes et performants. Pour l'herbergement nous vous conseillerons des solutions adaptées à vos besoins.",
  },
  {
    question: "Le site sera-t-il optimisé pour le référencement (SEO) ?",
    answer:
      "Oui, tous nos sites sont optimisés pour les moteurs de recherche dès leur conception. Nous appliquons les meilleures pratiques SEO : structure HTML sémantique, métadonnées optimisées, vitesse de chargement optimale, etc.",
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer:
      "Oui, nous proposons différentes formules de maintenance pour garantir la sécurité et les performances de votre site. Cela inclut les mises à jour techniques, les sauvegardes régulières et le support technique.",
  },
];

export function FaqSection() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Retrouvez les réponses aux questions les plus courantes
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
