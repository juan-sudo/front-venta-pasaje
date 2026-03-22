"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Empresas", href: "/dashboard/empresas", icon: "🏢" },
  { label: "Terminales", href: "/dashboard/terminales", icon: "🚏" },
  { label: "Rutas", href: "/dashboard/rutas", icon: "🛣️" },
  { label: "Vehículos", href: "/dashboard/vehiculos", icon: "🚌" },
  { label: "Conductores", href: "/dashboard/conductores", icon: "👨‍✈️" },
  { label: "Viajes", href: "/dashboard/viajes", icon: "✈️" },
  { label: "Pasajeros", href: "/dashboard/pasajeros", icon: "👥" },
  { label: "Ventas", href: "/dashboard/ventas", icon: "💰" },
  { label: "Pagos", href: "/dashboard/pagos", icon: "💳" },
  { label: "Encomiendas", href: "/dashboard/encomiendas", icon: "📦" },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold">PassajeApp</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            🏠 Volver
          </Button>
        </Link>
      </div>
    </aside>
  )
}