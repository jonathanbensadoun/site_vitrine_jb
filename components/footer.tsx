import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold">Créateur de sites web</h2>
            <p className="mt-2 text-muted-foreground">
              Création de sites web modernes et optimisés SEO
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Link
                href="https://maps.app.goo.gl/8H79iavas9Qaq25a8"
                target="_blank"
                className="flex items-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Lagny-sur-marne ,France</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="tel:+33620932403" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+33 6 20 93 24 03</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="mailto:jo.bensadoun@gmail.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span> jo.bensadoun@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Navigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Légal</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-confidentialite"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/jonathan-bensadoun/"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:jo.bensadoun@gmail.com"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t py-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jonathan Bensadoun. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
