import { mockExpenses } from "../../data/mockData";

export default function ExpensesPage() {
  const expenses = mockExpenses;

  // Calcular estadísticas basadas en los gastos
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // Extraer categorías únicas
  const uniqueCategories = new Set<string>();
  expenses.forEach((expense) => {
    if (expense.category) uniqueCategories.add(expense.category);
  });
  const categories = uniqueCategories.size;

  // Extraer proveedores únicos para el filtro
  const uniqueSuppliers = new Set<string>();
  expenses.forEach((expense) => {
    if (expense.supplier) uniqueSuppliers.add(expense.supplier);
  });

  // Convertir Sets a Arrays para iteración
  const categoriesArray = Array.from(uniqueCategories);
  const suppliersArray = Array.from(uniqueSuppliers);

  // Estadísticas de gastos
  const expenseStats = [
    {
      label: "Total mensual",
      value: `${expenses[0]?.currency || "EUR"} ${totalAmount.toFixed(2)}`,
    },
    { label: "Categorías", value: categories.toString() },
    { label: "Elementos", value: expenses.length.toString() },
  ];

  return (
    <main className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-deep-space min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Gestión de Gastos
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Monitorea, clasifica y analiza todos tus gastos empresariales.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {expenseStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-cosmo-800 overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-cosmo-800 shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Filtrar gastos
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Categoría
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-eco-green focus:border-eco-green sm:text-sm rounded-md dark:bg-cosmo-700 dark:border-cosmo-600 dark:text-white"
                >
                  <option>Todas las categorías</option>
                  {categoriesArray.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="supplier"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Proveedor
                </label>
                <select
                  id="supplier"
                  name="supplier"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-eco-green focus:border-eco-green sm:text-sm rounded-md dark:bg-cosmo-700 dark:border-cosmo-600 dark:text-white"
                >
                  <option>Todos los proveedores</option>
                  {suppliersArray.map((supplier, index) => (
                    <option key={index}>{supplier}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Buscar
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="focus:ring-eco-green focus:border-eco-green block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md dark:bg-cosmo-700 dark:border-cosmo-600 dark:text-white"
                    placeholder="Buscar gastos..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {expenses.length > 0 ? (
          <div className="flex flex-col mt-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-cosmo-700 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-cosmo-700">
                    <thead className="bg-gray-50 dark:bg-cosmo-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Fecha
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Descripción
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Importe
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Categoría
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Proveedor
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-cosmo-800 divide-y divide-gray-200 dark:divide-cosmo-700">
                      {expenses.map((expense, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0
                              ? "bg-gray-50 dark:bg-cosmo-700/30"
                              : "bg-white dark:bg-cosmo-800"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {new Date(expense.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {expense.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {new Intl.NumberFormat("es-ES", {
                              style: "currency",
                              currency: expense.currency,
                            }).format(expense.amount)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {expense.category || "Sin categoría"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {expense.supplier || "No especificado"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-cosmo-800 shadow rounded-lg">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 10c0 5-3.5 8.5-7 11.5-3.5-3-7-6.5-7-11.5a7 7 0 0114 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No hay gastos
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              No se encontraron gastos para el período seleccionado.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
