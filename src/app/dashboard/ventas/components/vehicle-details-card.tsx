import { ChevronRight } from "lucide-react"

import { getVehicleFeatures, infoTabs } from "../data"
import type { VehicleType } from "../types"

type VehicleDetailsCardProps = {
  activeInfoTab: string
  selectedVehicleType: VehicleType
  onInfoTabChange: (tab: string) => void
}

export function VehicleDetailsCard({
  activeInfoTab,
  selectedVehicleType,
  onInfoTabChange,
}: VehicleDetailsCardProps) {
  const features = getVehicleFeatures(selectedVehicleType)

  return (
    <section className="overflow-hidden rounded-[20px] bg-white">
      <div className="flex items-start gap-3 p-4">
        <div className="flex h-14 w-10 items-center justify-center overflow-hidden rounded-r-2xl bg-neutral-500 text-white">
          <ChevronRight className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[17px] font-semibold text-slate-900">America Express</h2>
              <p className="text-[13px] text-slate-500">9:45 PM - 7:45 AM | Dom 22 Mar</p>
              <p className="text-[13px] uppercase tracking-wide text-slate-500">Premium</p>
            </div>
            <div className="rounded-lg bg-[#eaf7ea] px-2 py-1 text-center text-[12px] font-semibold text-slate-700">
              <div className="rounded bg-[#139a43] px-1.5 text-white">* 4.4</div>
              <p>328</p>
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-[1.2fr_1.2fr_0.8fr]">
            <div className="h-40 rounded-xl bg-[linear-gradient(140deg,#2e9ae1,#0a4e86)]" />
            <div className="h-40 rounded-xl bg-[linear-gradient(140deg,#1980d1,#d61f2c)]" />
            <div className="h-40 rounded-xl bg-[linear-gradient(160deg,#7c4a2d,#0f172a)]" />
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 px-4">
        <div className="flex gap-6 overflow-x-auto text-[15px]">
          {infoTabs.map((tab) => {
            const isActive = tab === activeInfoTab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onInfoTabChange(tab)}
                className={`whitespace-nowrap border-b-[3px] py-3 transition ${
                  isActive
                    ? "border-[#e23d43] font-semibold text-[#e23d43]"
                    : "border-transparent text-slate-900"
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-6 text-[18px] font-semibold text-slate-900">
          {selectedVehicleType === "auto"
            ? "Auto para traslado rapido"
            : "Mercedes-Benz Sprinter Combi 17 pasajeros"}
        </h3>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 border-b border-slate-200 px-5 py-5 last:border-b-0"
            >
              <feature.icon className="h-6 w-6 text-slate-700" />
              <div className="flex-1">
                <p className="text-[16px] text-slate-900">{feature.title}</p>
                <p className="text-sm text-slate-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
