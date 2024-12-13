/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Désactive l'optimisation des images pendant le développement
  },
  experimental: {
    appDir: true, // Si vous utilisez le répertoire app avec Next.js 13 ou supérieur
  },
  
};

module.exports = nextConfig;