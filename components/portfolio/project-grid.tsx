import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "Landing-page-entreprise",
    title: "Landing Page Entreprise",
    description: "optimisée pour convertir les visiteurs",
    image: "bg.avif",
    tags: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "site-vitrine-restaurant",
    title: "Restaurant Gastronomique",
    description: "Site vitrine moderne pour un restaurant étoilé",
    image: "bg.avif",
    tags: ["Next.js", "Animation", "SEO"],
    link: "#",
  },
  {
    id: "application-immobilier",
    title: "Plateforme Immobilière",
    description: "Application web pour une agence immobilière de luxe",
    image: "bg.avif",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="group overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800} // Spécifier une largeur fixe
                height={500} // Spécifier une hauteur fixe
                loading="lazy"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild>
                <Link href={project.link}>
                  Voir le projet
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
