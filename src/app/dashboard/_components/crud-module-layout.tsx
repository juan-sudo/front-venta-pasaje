import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

type CrudModuleLayoutProps = {
  children: React.ReactNode
}

export function CrudModuleLayout({ children }: CrudModuleLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden bg-slate-50">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="flex min-h-16 items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <SidebarTrigger />
            <div>
              <h1 className="text-base font-semibold text-slate-900">Modulos CRUD</h1>
              <p className="text-xs text-slate-500">Gestion completa de tablas del sistema</p>
            </div>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
