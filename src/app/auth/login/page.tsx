"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simular autenticación sin backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "demo@cosmo.com" && password === "demo123456") {
        console.log("Login simulado exitoso");
        // Simular redirección a dashboard
        router.push("/dashboard");
      } else {
        setError("Credenciales incorrectas. Use demo@cosmo.com / demo123456");
      }
    } catch (err) {
      setError("Error durante el login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmo-900 to-cosmo-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            O{" "}
            <Link
              href="/auth/register"
              className="font-medium text-eco-green hover:text-lime-accent transition-colors"
            >
              crear una cuenta nueva
            </Link>
          </p>
        </div>

        <div className="bg-cosmo-800/50 backdrop-blur-sm border border-cosmo-700 rounded-xl p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4 p-3 bg-blue-900/50 border border-blue-700 rounded-lg text-blue-200 text-sm">
            <strong>Demo:</strong> email: demo@cosmo.com, contraseña: demo123456
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 bg-cosmo-700 border border-cosmo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                placeholder="tu@empresa.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 bg-cosmo-700 border border-cosmo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-cosmo-700 border-cosmo-600 rounded focus:ring-eco-green"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/auth/forgot-password"
                  className="font-medium text-eco-green hover:text-lime-accent transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-cosmo-900 bg-eco-green hover:bg-lime-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-green disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-eco-green hover:text-lime-accent transition-colors"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
