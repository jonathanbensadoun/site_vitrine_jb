import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Création de Sites Web Professionnels | Expert Next.js & SEO",
  description:
    "Expert en création de sites web modernes, responsive et optimisés SEO. Sites vitrines, e-commerce et applications web sur mesure avec Next.js.",
  keywords:
    "création site web, développeur web, site vitrine, e-commerce, SEO, Next.js, site responsive",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://localhost:3000",
    siteName: "Votre Nom - Création de Sites Web",
    title: "Expert Création Sites Web Professionnels | Développeur Next.js",
    description:
      "Création de sites web modernes et performants. Expert en développement Next.js et optimisation SEO.",
    images: [
      {
        url: "https://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Création de Sites Web Professionnels",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
