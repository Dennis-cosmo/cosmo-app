/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },

  output: "export",
  images: {
    unoptimized: true,
  },
  // Solo usar basePath en producción para GitHub Pages
  ...(process.env.NODE_ENV === "production" && {
    basePath: "/cosmo-app",
  }),
  trailingSlash: true,

  // Omitir errores de TypeScript y ESLint durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
