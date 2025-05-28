import Link from "next/link";

export default function StripePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmo-900 to-cosmo-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Integración con Stripe
          </h1>
          <p className="text-xl text-gray-300">
            Conecta tu cuenta de Stripe para importar automáticamente tus
            transacciones financieras
          </p>
        </div>

        <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Beneficios de la integración
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-eco-green mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Importación automática de transacciones
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-eco-green mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Clasificación automática de gastos
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-eco-green mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cálculo de impacto ambiental
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-eco-green mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reportes de sostenibilidad automáticos
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Estado de la conexión
              </h3>
              <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-yellow-500 font-medium">
                    No conectado
                  </span>
                </div>
                <p className="text-gray-300 mt-2 text-sm">
                  Tu cuenta de Stripe no está conectada. Conecta para comenzar a
                  importar transacciones.
                </p>
              </div>

              <button className="w-full bg-eco-green hover:bg-lime-accent text-cosmo-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Conectar con Stripe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
