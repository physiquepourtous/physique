/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['physiquetous.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    // Désactiver la vérification ESLint pendant la construction pour éviter les erreurs
    // jusqu'à ce que tous les fichiers soient migrés
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Désactiver le streaming (SSR) jusqu'à ce que tous les fichiers soient migrés
    serverComponentsExternalPackages: [],
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
