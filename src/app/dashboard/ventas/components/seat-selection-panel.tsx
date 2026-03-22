import { Button } from "@/components/ui/button"

import { lowerDeckRows } from "../data"
import type { Seat, VehicleType } from "../types"
import { SeatButton } from "./seat-button"
import { WheelIcon } from "./wheel-icon"

type SeatSelectionPanelProps = {
  selectedSeat: Seat | null
  selectedSeatNumber: number | null
  seatsByNumber: Map<number, Seat>
  selectedVehicleType: VehicleType
  total: number | null
  onReserve: () => void
  onSelectSeat: (seatNumber: number) => void
}

export function SeatSelectionPanel({
  selectedSeat,
  selectedSeatNumber,
  seatsByNumber,
  selectedVehicleType,
  total,
  onReserve,
  onSelectSeat,
}: SeatSelectionPanelProps) {
  const renderSeat = (seatNumber?: number, className = "h-[50px] w-[36px]") => (
    <SeatButton
      seat={seatNumber ? seatsByNumber.get(seatNumber) : null}
      isSelected={selectedSeatNumber === seatNumber}
      className={className}
      onSelect={onSelectSeat}
    />
  )

  const renderCell = (value?: number | "wheel") => {
    if (value === "wheel") return <WheelIcon />
    return renderSeat(value)
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-4 xl:justify-start">
        <button className="rounded-lg bg-[#e23d43] px-4 py-2.5 text-[15px] font-semibold text-white">
          Todos los precios
        </button>
        <button className="rounded-xl border border-[#74a85b] bg-white px-4 py-2 text-[15px] text-slate-900">
          S/. 80
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-1">
        <div className="flex justify-center rounded-[24px] bg-transparent px-3 py-2">
          <div className="rounded-[22px] bg-white px-4 py-4 shadow-sm">
            {selectedVehicleType === "auto" ? (
              <div className="space-y-3">
                <div className="grid grid-cols-[36px_36px_36px] items-center justify-center gap-x-3">
                  <WheelIcon />
                  {renderSeat(1)}
                  <div className="h-[50px] w-[36px]" />
                </div>
                <div className="grid grid-cols-[36px_36px_36px] items-center justify-center gap-x-3">
                  {renderSeat(2)}
                  {renderSeat(3)}
                  {renderSeat(4)}
                </div>
              </div>
            ) : selectedVehicleType === "camioneta" ? (
              <div className="space-y-3">
                <div className="grid grid-cols-[36px_36px_36px] items-center justify-center gap-x-3">
                  <WheelIcon />
                  {renderSeat(1)}
                  <div className="h-[50px] w-[36px]" />
                </div>
                <div className="grid grid-cols-[36px_36px_36px_36px] items-center justify-center gap-x-3">
                  {renderSeat(2)}
                  {renderSeat(3)}
                  {renderSeat(4)}
                  {renderSeat(5)}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {lowerDeckRows.map((row, index) => (
                  <div
                    key={`lower-${index}`}
                    className="grid grid-cols-[36px_36px_36px_36px] items-center justify-center gap-x-3"
                  >
                    {renderCell(row.col1)}
                    {renderCell(row.col2)}
                    {renderCell(row.col3)}
                    {renderCell(row.col4)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedSeat ? (
        <div className="flex items-center justify-between rounded-[20px] bg-white px-5 py-4 shadow-sm">
          <div className="text-[15px] text-slate-900">
            1 asiento <span className="px-2 text-slate-400">|</span> {selectedSeat.number}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[20px] font-semibold text-slate-900">S/. {total}</div>
            <Button
              className="rounded-full bg-[#dc3a43] px-6 py-2 text-[14px] font-semibold text-white hover:bg-[#c9323b]"
              onClick={onReserve}
            >
              Reservar
            </Button>
          </div>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-[20px] bg-white shadow-sm">
        <div className="grid grid-cols-[1fr_auto] border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900">
          <span>Tipo</span>
          <span>Asiento</span>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center border-b border-slate-200 px-4 py-4">
          <span className="text-[15px] text-slate-900">Sin reservar</span>
          {renderSeat(1)}
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center border-b border-slate-200 px-4 py-4">
          <span className="text-[15px] text-slate-900">Reservado con adelanto</span>
          {renderSeat(6)}
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center px-4 py-4">
          <span className="text-[15px] text-slate-900">Reservado pagado completo</span>
          {renderSeat(3)}
        </div>
      </div>
    </section>
  )
}
