"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BadgeCheck,
  Building2,
  Bus,
  CreditCard,
  FileText,
  HandCoins,
  IdCard,
  LayoutDashboard,
  ListChecks,
  LogOut,
  MapPinned,
  Package,
  Settings2,
  ShieldCheck,
  ReceiptText,
  Route,
  ScanLine,
  Settings,
  ShieldUser,
  Store,
  UserCog,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Proveedor", url: "/dashboard/proveedor-sistema", icon: Store },
  { title: "Empresas", url: "/dashboard/empresas", icon: Building2 },
  { title: "Licencias", url: "/dashboard/licencias", icon: BadgeCheck },
  { title: "Terminales", url: "/dashboard/terminales", icon: MapPinned },
  { title: "Rutas", url: "/dashboard/rutas", icon: Route },
  { title: "Viajes", url: "/dashboard/viajes", icon: MapPinned },
  { title: "Tipos vehiculo", url: "/dashboard/tipos-vehiculo", icon: Settings },
  { title: "Vehiculos", url: "/dashboard/vehiculos", icon: Bus },
  { title: "Asientos", url: "/dashboard/asientos", icon: ScanLine },
  { title: "Conductores", url: "/dashboard/conductores", icon: ShieldUser },
  { title: "Roles", url: "/dashboard/roles", icon: UserCog },
  { title: "Usuarios", url: "/dashboard/usuarios", icon: IdCard },
  { title: "Pasajeros", url: "/dashboard/pasajeros", icon: Users },
  { title: "Tipos comprobante", url: "/dashboard/tipos-comprobante", icon: FileText },
  { title: "Pagos", url: "/dashboard/pagos", icon: CreditCard },
  { title: "Ventas", url: "/dashboard/ventas", icon: ReceiptText },
  { title: "Metodos pago", url: "/dashboard/metodos-pago", icon: HandCoins },
  { title: "Detalle pasaje", url: "/dashboard/detalle-pasaje", icon: ListChecks },
  { title: "Encomiendas", url: "/dashboard/encomiendas", icon: Package },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border/70">
      <SidebarHeader className="border-b border-sidebar-border/70 px-3 py-4">
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/60 px-3 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <Bus className="h-5 w-5" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">
              Venta Pasaje
            </p>
            <p className="truncate text-xs text-sidebar-foreground/70">
              Centro de control
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarGroupLabel>Navegacion</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const Icon = item.icon
                const isActive =
                  item.url === "/dashboard"
                    ? pathname === item.url
                    : pathname?.startsWith(item.url)

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="h-10 rounded-xl px-3"
                    >
                      <Link href={item.url}>
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border/70 p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl bg-sidebar-accent/60 px-3 py-3 text-left transition hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-primary/15 text-sidebar-primary">
                <span className="text-xs font-semibold">VP</span>
              </div>
              <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                <p className="truncate text-sm font-medium text-sidebar-foreground">
                  Administrador
                </p>
                <p className="truncate text-xs text-sidebar-foreground/70">
                  admin@ventapasaje.com
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="top"
            className="w-56 rounded-xl"
          >
            <DropdownMenuLabel className="px-3 py-2">
              <p className="text-sm font-semibold text-slate-900">Administrador</p>
              <p className="text-xs text-slate-500">admin@ventapasaje.com</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/perfil" className="cursor-pointer">
                <ShieldCheck className="h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/usuarios" className="cursor-pointer">
                <IdCard className="h-4 w-4" />
                <span>Usuarios</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesion</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
