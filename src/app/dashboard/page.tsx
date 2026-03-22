import { AppSidebar } from "@/components/app-sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  ArrowUpRight,
  Bus,
  CalendarRange,
  CreditCard,
  MapPinned,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react"

const stats = [
  {
    title: "Ventas de hoy",
    value: "S/ 12,480",
    detail: "+18% frente a ayer",
    icon: CreditCard,
  },
  {
    title: "Pasajes emitidos",
    value: "326",
    detail: "48 pendientes de pago",
    icon: Ticket,
  },
  {
    title: "Buses activos",
    value: "24",
    detail: "3 en mantenimiento",
    icon: Bus,
  },
  {
    title: "Ocupacion promedio",
    value: "82%",
    detail: "Meta semanal: 85%",
    icon: Users,
  },
]

const routes = [
  { name: "Lima -> Arequipa", time: "08:30", seats: "34/40", status: "Alta" },
  { name: "Cusco -> Puno", time: "09:15", seats: "18/32", status: "Media" },
  { name: "Trujillo -> Chiclayo", time: "10:00", seats: "27/30", status: "Alta" },
  { name: "Piura -> Lima", time: "11:45", seats: "12/40", status: "Baja" },
]

const activity = [
  "3 nuevas empresas solicitaron activacion.",
  "Se confirmaron 18 reservas en los ultimos 20 minutos.",
  "La ruta Lima -> Ica subio 12% en ocupacion.",
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden bg-slate-50">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="flex min-h-16 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-start gap-3">
              <SidebarTrigger className="mt-1 shrink-0" />
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 hover:bg-emerald-100">
                    Sistema operativo
                  </Badge>
                  <span className="text-sm text-slate-500">
                    Panel general de operaciones
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    Dashboard de venta de pasajes
                  </h1>
                  <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                    Visualiza ventas, ocupacion y salidas programadas en una sola
                    vista clara.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" className="bg-white">
                <CalendarRange className="mr-2 h-4 w-4" />
                Hoy
              </Button>
              <Button className="bg-slate-900 text-white hover:bg-slate-800">
                Exportar reporte
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex min-w-0 flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <Card
                  key={item.title}
                  className="border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                    <div>
                      <CardDescription className="text-sm text-slate-500">
                        {item.title}
                      </CardDescription>
                      <CardTitle className="mt-2 text-3xl font-semibold text-slate-900">
                        {item.value}
                      </CardTitle>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </CardContent>
                </Card>
              )
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <Card className="overflow-hidden border-slate-200 bg-white shadow-sm">
              <CardHeader className="gap-3 border-b border-slate-100 bg-slate-900 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">Panorama del dia</CardTitle>
                    <CardDescription className="text-slate-300">
                      Flujo comercial y salud operativa de la plataforma.
                    </CardDescription>
                  </div>
                  <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10">
                    Actualizado hace 5 min
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5">
                  <div className="rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 p-6 text-white shadow-lg">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                      Recaudacion acumulada
                    </p>
                    <div className="mt-4 flex flex-wrap items-end gap-3">
                      <span className="text-4xl font-semibold">S/ 148,900</span>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
                        +9.4% esta semana
                      </span>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/12 p-4">
                        <p className="text-sm text-white/75">Rutas activas</p>
                        <p className="mt-2 text-2xl font-semibold">16</p>
                      </div>
                      <div className="rounded-2xl bg-white/12 p-4">
                        <p className="text-sm text-white/75">Salidas hoy</p>
                        <p className="mt-2 text-2xl font-semibold">43</p>
                      </div>
                      <div className="rounded-2xl bg-white/12 p-4">
                        <p className="text-sm text-white/75">Incidencias</p>
                        <p className="mt-2 text-2xl font-semibold">02</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Check-in digital</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">
                        74%
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Pago online</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">
                        61%
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Satisfaccion</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">
                        4.8/5
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      <h2 className="font-semibold text-emerald-900">
                        Estado del sistema
                      </h2>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-emerald-800">
                      Todos los servicios criticos estan respondiendo con
                      normalidad y no hay alertas graves abiertas.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <h2 className="font-semibold text-slate-900">
                      Actividad reciente
                    </h2>
                    <div className="mt-4 space-y-3">
                      {activity.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Proximas salidas
                </CardTitle>
                <CardDescription>
                  Monitorea ocupacion y prioridad de despacho.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {routes.map((route, index) => (
                  <div key={route.name} className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPinned className="h-4 w-4 text-slate-400" />
                          <p className="font-medium text-slate-900">
                            {route.name}
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">
                          Sale a las {route.time}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-full border-slate-200 text-slate-700"
                      >
                        {route.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>Asientos vendidos</span>
                      <span className="font-medium text-slate-800">
                        {route.seats}
                      </span>
                    </div>
                    {index < routes.length - 1 ? <Separator /> : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
