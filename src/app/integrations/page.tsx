import Link from "next/link";

const integrations = [
  {
    id: "quickbooks",
    name: "QuickBooks",
    description:
      "Sincroniza automáticamente tus gastos y facturas desde QuickBooks",
    icon: "💼",
    status: "available",
    category: "Accounting",
  },
  {
    id: "sap",
    name: "SAP",
    description: "Integración completa con SAP para grandes empresas",
    icon: "🏢",
    status: "available",
    category: "ERP",
  },
  {
    id: "xero",
    name: "Xero",
    description:
      "Conecta tu contabilidad de Xero con análisis de sostenibilidad",
    icon: "📊",
    status: "coming-soon",
    category: "Accounting",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Analiza tus transacciones de Stripe para reportes ESG",
    icon: "💳",
    status: "available",
    category: "Payments",
  },
  {
    id: "sage",
    name: "Sage",
    description: "Integración con Sage para pequeñas y medianas empresas",
    icon: "🌿",
    status: "coming-soon",
    category: "Accounting",
  },
  {
    id: "excel",
    name: "Excel/CSV",
    description: "Importa datos desde archivos Excel o CSV",
    icon: "📝",
    status: "available",
    category: "Files",
  },
];

export default function IntegrationsPage() {
  const availableIntegrations = integrations.filter(
    (i) => i.status === "available"
  );
  const comingSoonIntegrations = integrations.filter(
    (i) => i.status === "coming-soon"
  );
  const uniqueCategories = Array.from(
    new Set(integrations.map((i) => i.category))
  );

  return (
    <main className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-deep-space min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Integraciones
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Conecta tus sistemas de gestión empresarial para automatizar el
            análisis de sostenibilidad
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <div className="bg-white dark:bg-cosmo-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                Integraciones Disponibles
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {availableIntegrations.length}
              </dd>
            </div>
          </div>
          <div className="bg-white dark:bg-cosmo-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                Próximamente
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {comingSoonIntegrations.length}
              </dd>
            </div>
          </div>
          <div className="bg-white dark:bg-cosmo-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                Categorías
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {uniqueCategories.length}
              </dd>
            </div>
          </div>
        </div>

        {/* Available Integrations */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Integraciones Disponibles
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {availableIntegrations.map((integration) => (
              <Link
                key={integration.id}
                href={`/integrations/${integration.id}`}
                className="relative rounded-lg border border-gray-300 dark:border-cosmo-600 bg-white dark:bg-cosmo-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-eco-green dark:hover:border-eco-green focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-eco-green transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl">{integration.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {integration.name}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                      Disponible
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {integration.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {integration.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Próximamente
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonIntegrations.map((integration) => (
              <div
                key={integration.id}
                className="relative rounded-lg border border-gray-300 dark:border-cosmo-600 bg-white dark:bg-cosmo-800 px-6 py-5 shadow-sm flex items-center space-x-3 opacity-75"
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl grayscale">{integration.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {integration.name}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                      Próximamente
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {integration.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {integration.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
