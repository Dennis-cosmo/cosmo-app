"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    // Simular registro sin backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (userData.password !== userData.confirmPassword) {
        setError("Las contraseñas no coinciden");
        return;
      }

      if (userData.password.length < 8) {
        setError("La contraseña debe tener al menos 8 caracteres");
        return;
      }

      console.log("Registro simulado:", userData);
      setSuccess(true);

      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err) {
      setError("Error durante el registro");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmo-900 to-cosmo-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-cosmo-800/50 backdrop-blur-sm border border-eco-green/30 rounded-xl p-8">
            <div className="w-16 h-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-eco-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Registro exitoso!
            </h2>
            <p className="text-gray-300 mb-6">
              Tu cuenta ha sido creada correctamente. Serás redirigido al login
              en unos segundos.
            </p>
            <Link
              href="/auth/login"
              className="inline-block bg-eco-green hover:bg-lime-accent text-cosmo-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Ir al login ahora
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmo-900 to-cosmo-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Crear cuenta nueva
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            O{" "}
            <Link
              href="/auth/login"
              className="font-medium text-eco-green hover:text-lime-accent transition-colors"
            >
              iniciar sesión en tu cuenta existente
            </Link>
          </p>
        </div>

        <div className="bg-cosmo-800/50 backdrop-blur-sm border border-cosmo-700 rounded-xl p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 bg-cosmo-700 border border-cosmo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email empresarial
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
                htmlFor="company"
                className="block text-sm font-medium text-white mb-2"
              >
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full px-3 py-2 bg-cosmo-700 border border-cosmo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                placeholder="EcoTech Solutions S.L."
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
              <p className="text-xs text-gray-400 mt-1">Mínimo 8 caracteres</p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white mb-2"
              >
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full px-3 py-2 bg-cosmo-700 border border-cosmo-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 bg-cosmo-700 border-cosmo-600 rounded focus:ring-eco-green mt-1"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-300"
              >
                Acepto los{" "}
                <Link
                  href="/terms"
                  className="text-eco-green hover:text-lime-accent transition-colors"
                >
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link
                  href="/privacy"
                  className="text-eco-green hover:text-lime-accent transition-colors"
                >
                  política de privacidad
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-cosmo-900 bg-eco-green hover:bg-lime-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-green disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-eco-green hover:text-lime-accent transition-colors"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
