"use client";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { mockDashboardData } from "../../data/mockData";
import Link from "next/link";

// Datos estáticos para los gráficos
const pieData = [
  { name: "Scope 1", value: 30 },
  { name: "Scope 2", value: 20 },
  { name: "Scope 3", value: 50 },
];
const pieColors = ["#00FF9D", "#A3E635", "#6EE7B7"];

const barData = [
  { name: "Energy", Renewable: 60, NonRenewable: 40 },
  { name: "Water", Usage: 80 },
  { name: "Biodiversity", Impact: 30 },
];

const totalPie = pieData.reduce((acc, curr) => acc + curr.value, 0);

export default function Dashboard() {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: mockDashboardData.companyName,
    period: mockDashboardData.period,
    sustainabilityScore: mockDashboardData.sustainabilityScore,
  });
  const [taxonomyActivities, setTaxonomyActivities] = useState(
    mockDashboardData.taxonomyEligibleActivities
  );

  // Datos simulados para el dashboard
  const [user] = useState({
    name: "Demo User",
    email: "demo@cosmo.com",
    company: "EcoTech Solutions",
  });

  const [stats] = useState({
    totalExpenses: "€45,230",
    carbonFootprint: "2,450 tCO₂e",
    greenExpenses: "68%",
    esgScore: "7.4",
    monthlyChange: {
      expenses: "+12%",
      carbon: "-8%",
      green: "+15%",
      esg: "+0.3",
    },
  });

  const [recentExpenses] = useState([
    {
      id: "1",
      date: "2024-01-15",
      description: "Energía renovable - Solar panels",
      amount: "€2,500",
      category: "Infraestructura",
      impact: "bajo",
      status: "aprobado",
    },
    {
      id: "2",
      date: "2024-01-14",
      description: "Transporte empresarial - Vehículos eléctricos",
      amount: "€850",
      category: "Transporte",
      impact: "bajo",
      status: "pendiente",
    },
    {
      id: "3",
      date: "2024-01-13",
      description: "Materiales de oficina - Papel reciclado",
      amount: "€125",
      category: "Oficina",
      impact: "medio",
      status: "aprobado",
    },
  ]);

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "alto":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medio":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "bajo":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "aprobado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pendiente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "rechazado":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmo-900 to-cosmo-800">
      {/* Header del Dashboard */}
      <div className="bg-cosmo-800/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-300 mt-1">
                Bienvenido, {user.name} • {user.company}
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-eco-green hover:bg-lime-accent text-cosmo-900 px-4 py-2 rounded-md font-medium transition-colors">
                Exportar Reporte
              </button>
              <Link
                href="/expenses/new"
                className="bg-transparent border border-white/30 hover:border-lime-accent text-white px-4 py-2 rounded-md transition-colors"
              >
                Nuevo Gasto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Gastos Totales</h3>
              <span className="text-eco-green text-sm">
                {stats.monthlyChange.expenses}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mt-2">
              {stats.totalExpenses}
            </div>
            <div className="text-sm text-gray-400 mt-1">vs mes anterior</div>
          </div>

          <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">
                Huella de Carbono
              </h3>
              <span className="text-eco-green text-sm">
                {stats.monthlyChange.carbon}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mt-2">
              {stats.carbonFootprint}
            </div>
            <div className="text-sm text-gray-400 mt-1">reducción mensual</div>
          </div>

          <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Gastos Verdes</h3>
              <span className="text-eco-green text-sm">
                {stats.monthlyChange.green}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mt-2">
              {stats.greenExpenses}
            </div>
            <div className="text-sm text-gray-400 mt-1">del total</div>
          </div>

          <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Puntuación ESG</h3>
              <span className="text-eco-green text-sm">
                +{stats.monthlyChange.esg}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mt-2">
              {stats.esgScore}
            </div>
            <div className="text-sm text-gray-400 mt-1">sobre 10</div>
          </div>
        </div>

        {/* Gastos recientes */}
        <div className="bg-cosmo-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Gastos Recientes</h2>
            <Link
              href="/expenses"
              className="text-eco-green hover:text-lime-accent transition-colors"
            >
              Ver todos →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white font-medium py-3">
                    Fecha
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Descripción
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Cantidad
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Categoría
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Impacto
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Estado
                  </th>
                  <th className="text-left text-white font-medium py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentExpenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 text-gray-300">{expense.date}</td>
                    <td className="py-4 text-white">{expense.description}</td>
                    <td className="py-4 font-medium text-white">
                      {expense.amount}
                    </td>
                    <td className="py-4 text-gray-300">{expense.category}</td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(
                          expense.impact
                        )}`}
                      >
                        {expense.impact}
                      </span>
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          expense.status
                        )}`}
                      >
                        {expense.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <Link
                        href={`/expenses/${expense.id}`}
                        className="text-eco-green hover:text-lime-accent transition-colors"
                      >
                        Ver detalle
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Animaciones personalizadas (asegúrate de tenerlas en tailwind.config.js)
// animate-fadeIn: 'fadeIn 0.8s ease-out both'
