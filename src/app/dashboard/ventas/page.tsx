"use client"

import { useMemo, useState } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { PassengerStep } from "./components/passenger-step"
import { PrintModal } from "./components/print-modal"
import { SalesFlowHeader } from "./components/sales-flow-header"
import { SalesListingView } from "./components/sales-listing-view"
import { SeatSelectionPanel } from "./components/seat-selection-panel"
import { VehicleDetailsCard } from "./components/vehicle-details-card"
import { infoTabs, initialSeats, stepTabs } from "./data"
import type { PrintPreviewFormat, SalesView, Seat, StepTab, VehicleType } from "./types"

export default function VentasPage() {
  const [salesView, setSalesView] = useState<SalesView>("listing")
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleType>("combi")
  const [activeStep, setActiveStep] = useState<StepTab>("1. Asientos")
  const [activeInfoTab, setActiveInfoTab] = useState<(typeof infoTabs)[number]>(infoTabs[0])
  const [seats] = useState<Seat[]>(initialSeats)
  const [selectedSeatNumber, setSelectedSeatNumber] = useState<number | null>(null)
  const [invoiceForCompany, setInvoiceForCompany] = useState(false)
  const [showPrintModal, setShowPrintModal] = useState(false)
  const [printPreviewFormat, setPrintPreviewFormat] = useState<PrintPreviewFormat>("options")

  const seatByNumber = useMemo(
    () => new Map(seats.map((seat) => [seat.number, seat])),
    [seats]
  )

  const selectedSeat = selectedSeatNumber ? seatByNumber.get(selectedSeatNumber) ?? null : null
  const total = selectedSeat ? 80 : null

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden bg-[#efeff7]">
        <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white">
          <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <SidebarTrigger />
            <h1 className="text-base font-semibold text-slate-900">Modulo de venta de pasajes</h1>
          </div>
        </header>

        <main className="px-4 py-5 sm:px-6 lg:px-8">
          {salesView === "listing" ? (
            <SalesListingView
              onSelectVehicle={(vehicleType) => {
                setSelectedVehicleType(vehicleType)
                setSalesView("flow")
              }}
            />
          ) : (
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <SalesFlowHeader
                activeStep={activeStep}
                stepTabs={stepTabs}
                onBack={() => setSalesView("listing")}
                onStepChange={setActiveStep}
              />

              <div className="bg-[#f4f4fb] px-5 py-4">
                {activeStep === "1. Asientos" ? (
                  <div className="grid gap-5 xl:grid-cols-[1.15fr_0.95fr]">
                    <VehicleDetailsCard
                      activeInfoTab={activeInfoTab}
                      selectedVehicleType={selectedVehicleType}
                      onInfoTabChange={(tab) => setActiveInfoTab(tab as (typeof infoTabs)[number])}
                    />
                    <SeatSelectionPanel
                      selectedSeat={selectedSeat}
                      selectedSeatNumber={selectedSeatNumber}
                      seatsByNumber={seatByNumber}
                      selectedVehicleType={selectedVehicleType}
                      total={total}
                      onReserve={() => setActiveStep("2. Pasajero")}
                      onSelectSeat={setSelectedSeatNumber}
                    />
                  </div>
                ) : (
                  <PassengerStep
                    invoiceForCompany={invoiceForCompany}
                    onToggleInvoice={() => setInvoiceForCompany((prev) => !prev)}
                    onPay={() => {
                      setPrintPreviewFormat("options")
                      setShowPrintModal(true)
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </main>

        {showPrintModal ? (
          <PrintModal
            printPreviewFormat={printPreviewFormat}
            selectedSeatNumber={selectedSeat?.number ?? null}
            onClose={() => {
              setShowPrintModal(false)
              setPrintPreviewFormat("options")
            }}
            onPreviewA5={() => setPrintPreviewFormat("a5")}
            onBackToOptions={() => setPrintPreviewFormat("options")}
          />
        ) : null}
      </SidebarInset>
    </SidebarProvider>
  )
}
