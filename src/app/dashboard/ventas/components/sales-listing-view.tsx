import { Button } from "@/components/ui/button"

import { vehicleListings } from "../data"
import type { VehicleType } from "../types"

type SalesListingViewProps = {
  onSelectVehicle: (vehicleType: VehicleType) => void
}

export function SalesListingView({ onSelectVehicle }: SalesListingViewProps) {
  return (
    <div className="space-y-5">
      <div className="rounded-[24px] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>Inicio</span>
          <span>&gt;</span>
          <span>Guia de rutas</span>
          <span>&gt;</span>
          <span className="font-medium text-slate-700">Huamanga, camioneta, combi, auto</span>
        </div>

        <div className="grid gap-3 rounded-[20px] bg-[#f4f4fb] p-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <div className="rounded-2xl bg-white px-4 py-3">
            <p className="text-xs text-slate-500">Desde</p>
            <p className="font-semibold text-slate-900">Huamanga</p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3">
            <p className="text-xs text-slate-500">Hasta</p>
            <p className="font-semibold text-slate-900">Todos</p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3">
            <p className="text-xs text-slate-500">Fecha de ida</p>
            <p className="font-semibold text-slate-900">22 Mar, 2026</p>
          </div>
          <Button className="rounded-full bg-[#dc3a43] px-5 text-white hover:bg-[#c9323b]">
            Cambiar
          </Button>
        </div>
      </div>

      <section className="space-y-4">
        <div className="space-y-5 rounded-[24px] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-semibold text-slate-900">75 buses encontrado</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-[#baf3c0] px-4 py-2 text-slate-700">Pago seguro</span>
              <span className="rounded-full bg-[#baf3c0] px-4 py-2 text-slate-700">Pasaje inmediato</span>
              <span className="rounded-full bg-[#baf3c0] px-4 py-2 text-slate-700">Soporte 24/7</span>
            </div>
          </div>

          {vehicleListings.map((vehicle) => (
            <article
              key={vehicle.id}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-[#d49b00] sm:text-lg">{vehicle.title}</p>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-[32px]">{vehicle.type}</h3>
                  <p className="text-sm text-slate-500 sm:text-[15px]">
                    Asientos disponibles para comprar: {vehicle.totalSeats}
                  </p>
                </div>
                <div className="rounded bg-[#ffe8a3] px-3 py-1 text-xs font-semibold text-slate-700">
                  Prueba lo nuevo 15% DCTO
                </div>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-[#eaf7ea] px-2 py-1 text-center text-[12px] font-semibold text-slate-700">
                  <div className="rounded bg-[#139a43] px-1.5 text-white">* {vehicle.rating}</div>
                  <p>{vehicle.reviews}</p>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.2fr_1.6fr_auto] lg:items-end">
                <div className="space-y-2">
                  {vehicle.id === "combi" ? (
                    <img
                      src="/combi-mercedes.svg"
                      alt="Combi Mercedes-Benz"
                      className="h-20 w-[220px] rounded-xl border border-slate-200 object-cover"
                    />
                  ) : (
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-xl bg-[linear-gradient(140deg,#2e9ae1,#0a4e86)]" />
                      <div className="h-16 rounded-xl bg-[linear-gradient(140deg,#1980d1,#d61f2c)]" />
                      <div className="h-16 rounded-xl bg-[linear-gradient(160deg,#7c4a2d,#0f172a)]" />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Reclinacion de 160 grados</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Television compartida</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Reprogramacion en linea</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto_1fr_auto] sm:items-center">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{vehicle.depart}</p>
                    <p className="text-sm text-slate-500">{vehicle.from}</p>
                  </div>
                  <div className="h-px bg-slate-300" />
                  <div className="text-sm text-slate-400">{vehicle.duration}</div>
                  <div className="h-px bg-slate-300" />
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{vehicle.arrive}</p>
                    <p className="text-sm text-slate-500">{vehicle.to}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 lg:items-end">
                  <div className="text-right">
                    <p className="text-sm text-slate-400 line-through">S/. {vehicle.oldPrice}</p>
                    <p className="text-2xl font-bold text-slate-900">S/. {vehicle.price}</p>
                  </div>
                  <Button
                    className="rounded-full bg-[#dc3a43] px-6 text-white hover:bg-[#c9323b]"
                    onClick={() => onSelectVehicle(vehicle.id)}
                  >
                    Ver asientos
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
