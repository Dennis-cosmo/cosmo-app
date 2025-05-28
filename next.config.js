/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },

  // Configuración de rewrite para redirigir peticiones /api a la API real
  async rewrites() {
    return [
      // Excluimos las rutas de NextAuth de la redirección
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*",
      },
      // Redirigimos el resto de las peticiones /api a la API real
      {
        source: "/api/:path*",
        destination: "http://api:4000/:path*", // Usa el nombre del servicio Docker
      },
    ];
  },

  // Configuración de headers para permitir CORS
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
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
};

module.exports = nextConfig;
