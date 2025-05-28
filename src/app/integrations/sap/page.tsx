import Link from "next/link";

export default function SAPIntegrationPage() {
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
            <span className="text-4xl mr-4">🏢</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                SAP Integration
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Conecta tu sistema SAP para importar datos empresariales y
                análisis de sostenibilidad
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
                Integración Empresarial
              </h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-200">
                <p>
                  Esta integración está diseñada para grandes empresas con
                  sistemas SAP. Requiere configuración técnica especializada.
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
                  Módulos SAP compatibles:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• SAP FI (Finanzas)</li>
                  <li>• SAP CO (Controlling)</li>
                  <li>• SAP MM (Gestión de Materiales)</li>
                  <li>• SAP SD (Ventas y Distribución)</li>
                  <li>• SAP HR (Recursos Humanos)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Análisis ESG:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Huella de carbono por transacción</li>
                  <li>• Análisis de proveedores sostenibles</li>
                  <li>• Métricas de economía circular</li>
                  <li>• Reportes de cumplimiento regulatorio</li>
                  <li>• Dashboard ejecutivo ESG</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">
                Requisitos Técnicos
              </h3>
              <div className="mt-2 text-sm text-amber-700 dark:text-amber-200">
                <ul className="list-disc list-inside space-y-1">
                  <li>SAP ECC 6.0 o SAP S/4HANA</li>
                  <li>Acceso a usuario técnico con permisos de lectura</li>
                  <li>RFC habilitado en el sistema SAP</li>
                  <li>Conexión VPN o de red segura</li>
                  <li>Certificados SSL válidos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="bg-white dark:bg-cosmo-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              Proceso de implementación
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
                    Análisis inicial
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nuestro equipo técnico evaluará tu arquitectura SAP actual
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
                    Configuración técnica
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Configuración de RFC y permisos de usuario en SAP
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
                    Pruebas y validación
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Pruebas de conectividad y extracción de datos piloto
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-eco-green rounded-full">
                    <span className="text-xs font-medium text-cosmo-500">
                      4
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Puesta en producción
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Activación completa con monitoreo y soporte continuo
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contactar Equipo Técnico
          </button>
        </div>
      </div>
    </main>
  );
}
