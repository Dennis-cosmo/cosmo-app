import Link from "next/link";

export default function QuickBooksIntegrationPage() {
  return (
    <main className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-deep-space min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/integrations"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a Integraciones
          </Link>
          <div className="flex items-center">
            <span className="text-4xl mr-4">💼</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                QuickBooks Integration
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Conecta tu cuenta de QuickBooks para importar automáticamente
                gastos y facturas
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Estado de la integración
              </h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-200">
                <p>
                  Esta integración está disponible para configurar. Una vez
                  conectada, importaremos automáticamente tus gastos de
                  QuickBooks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Details */}
        <div className="bg-white dark:bg-cosmo-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              ¿Qué hace esta integración?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Datos que importamos:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Gastos y facturas</li>
                  <li>• Información de proveedores</li>
                  <li>• Categorías de gastos</li>
                  <li>• Métodos de pago</li>
                  <li>• Fechas y montos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Funcionalidades:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Sincronización automática</li>
                  <li>• Análisis de sostenibilidad</li>
                  <li>• Clasificación verde/no verde</li>
                  <li>• Reportes ESG automatizados</li>
                  <li>• Dashboard en tiempo real</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="bg-white dark:bg-cosmo-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              Pasos de configuración
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-eco-green rounded-full">
                    <span className="text-xs font-medium text-cosmo-500">
                      1
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Autorizar conexión
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Te redirigiremos a QuickBooks para autorizar el acceso a tus
                    datos financieros
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-eco-green rounded-full">
                    <span className="text-xs font-medium text-cosmo-500">
                      2
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Configurar sincronización
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Selecciona qué datos importar y con qué frecuencia
                    sincronizar
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-eco-green rounded-full">
                    <span className="text-xs font-medium text-cosmo-500">
                      3
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Primera importación
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Realizaremos la primera importación de tus datos históricos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Link
            href="/integrations"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-cosmo-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-cosmo-800 hover:bg-gray-50 dark:hover:bg-cosmo-700"
          >
            Cancelar
          </Link>
          <button
            type="button"
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-eco-green hover:bg-eco-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-green"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Conectar con QuickBooks
          </button>
        </div>
      </div>
    </main>
  );
}
