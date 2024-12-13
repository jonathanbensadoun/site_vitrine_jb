import { Metadata } from "next";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { PageHeader } from "@/components/page-header";

// export const metadata: Metadata = {
//   title: "Portfolio | Réalisations Web Professionnelles",
//   description: "Découvrez mes réalisations de sites web modernes et optimisés. Sites vitrines, e-commerce et applications web sur mesure.",
// };

export default function PortfolioPage() {
  return (
    <div className="container px-4 mx-auto py-32">
      <PageHeader
        title="Portfolio"
        description="Découvrez mes dernières réalisations web"
      />
      <ProjectGrid />
    </div>
  );
}
