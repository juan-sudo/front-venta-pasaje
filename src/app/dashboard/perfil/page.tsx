import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, ShieldCheck, UserRound } from "lucide-react"

export default function PerfilPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden bg-slate-50">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="flex min-h-16 items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <SidebarTrigger />
            <div>
              <h1 className="text-base font-semibold text-slate-900">Perfil</h1>
              <p className="text-xs text-slate-500">Informacion de la cuenta actual</p>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <Card className="max-w-3xl border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <UserRound className="h-7 w-7" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    Administrador
                  </CardTitle>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      <ShieldCheck className="mr-1 h-3.5 w-3.5" />
                      Activo
                    </Badge>
                    <Badge variant="outline" className="rounded-full">
                      Sistema principal
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Nombre
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">Administrador</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Correo
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-900">
                  <Mail className="h-4 w-4 text-slate-400" />
                  admin@ventapasaje.com
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Rol
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">Administrador</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Estado
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">Habilitado</p>
              </div>
              <div className="sm:col-span-2">
                <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800">
                  Editar perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
