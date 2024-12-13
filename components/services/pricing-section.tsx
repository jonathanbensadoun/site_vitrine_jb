import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Landing Page",
    price: "1499€",
    description: "Optimisé pour convertir les visiteurs en clients",
    features: [
      "Page unique et ciblée",
      "Optimisation SEO de base",
      "Responsive design",
      "section de témoignages",
      "Design adapté à l'objectif marketing",
      "Appels à l'action clairs",
    ],
  },
  {
    name: "Site Vitrine",
    price: "1999€",
    description: "Idéal pour les petites entreprises",
    features: [
      "Tout du plan Landing Page",
      "Design personnalisé",
      "Responsive design",
      "Jusqu'à 3 pages",
      "Formulaire de contact",
      "Optimisation SEO avancée",
    ],
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    description: "Pour les projets complexes",
    features: [
      "Fonctionnalités avancées",
      "Architecture sur mesure",
      "API personnalisée",
      "Intégrations spécifiques",
      "Support prioritaire",
      "Maintenance évolutive",
    ],
  },
];

export function PricingSection() {
  return (
    <div className="py-16 mx-2">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Tarifs transparents</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Des solutions adaptées à tous les budgets avec un excellent rapport
          qualité-prix
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="relative">
            <CardHeader>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
