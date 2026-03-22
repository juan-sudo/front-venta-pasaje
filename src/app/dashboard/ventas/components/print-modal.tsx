import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { PrintPreviewFormat } from "../types"

type PrintModalProps = {
  printPreviewFormat: PrintPreviewFormat
  selectedSeatNumber: number | null
  onClose: () => void
  onPreviewA5: () => void
  onBackToOptions: () => void
}

export function PrintModal({
  printPreviewFormat,
  selectedSeatNumber,
  onClose,
  onPreviewA5,
  onBackToOptions,
}: PrintModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4">
      <div className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[20px] font-semibold text-slate-900">
              {printPreviewFormat === "a5" ? "Vista previa A5" : "Pago realizado"}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {printPreviewFormat === "a5"
                ? "Comprobante tipo ticket listo para imprimir."
                : "Selecciona el formato para imprimir tu pasaje."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {printPreviewFormat === "options" ? (
          <>
            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-slate-400 hover:bg-slate-50"
              >
                <div>
                  <p className="font-semibold text-slate-900">Imprimir en A4</p>
                  <p className="text-sm text-slate-500">Formato hoja completa.</p>
                </div>
                <span className="text-sm font-semibold text-[#dc3a43]">A4</span>
              </button>

              <button
                type="button"
                onClick={onPreviewA5}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-slate-400 hover:bg-slate-50"
              >
                <div>
                  <p className="font-semibold text-slate-900">Imprimir en A5</p>
                  <p className="text-sm text-slate-500">Formato ticket o media hoja.</p>
                </div>
                <span className="text-sm font-semibold text-[#dc3a43]">A5</span>
              </button>
            </div>

            <div className="mt-5 flex justify-end">
              <Button variant="outline" className="rounded-full bg-white" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mx-auto max-w-[230px] rounded-[18px] border border-slate-200 bg-white p-4 font-mono text-[10px] leading-4 text-slate-900 shadow-sm">
              <div className="border-b border-dashed border-slate-300 pb-3 text-center">
                <p className="text-[22px] font-bold tracking-tight">VP</p>
                <p className="text-xs font-bold">VIA PACIFICO E.I.R.L.</p>
                <p>RUC: 20553871175</p>
                <p>AV. PANAMERICANA NORTE NRO. 116</p>
                <p>PATZACA, CHICLAYO - LAMBAYEQUE</p>
              </div>

              <div className="border-b border-dashed border-slate-300 py-3 text-center">
                <p className="font-bold">BOLETA DE VENTA ELECTRONICA</p>
                <p>BV04-0037173</p>
              </div>

              <div className="space-y-1 border-b border-dashed border-slate-300 py-3">
                <p>DNI: ____________</p>
                <p>NOMBRE: ____________</p>
                <p>AGENCIA: ORMENO</p>
                <p>DIRECCION: AV. VICTOR RAUL HAYA DE LA TORRE</p>
                <p>CHICLAYO - LAMBAYEQUE</p>
              </div>

              <div className="space-y-1 border-b border-dashed border-slate-300 py-3">
                <p>SERVICIO DE TRANSPORTE EN LA</p>
                <p>RUTA CHICLAYO - PLAZA</p>
                <p>VICTORIA</p>
                <p>ASIENTO: {selectedSeatNumber ?? "--"}</p>
                <p>PASAJERO: CLIENTE</p>
                <div className="flex justify-between">
                  <span>TOTAL</span>
                  <span>80.00</span>
                </div>
              </div>

              <div className="space-y-1 border-b border-dashed border-slate-300 py-3">
                <div className="flex justify-between">
                  <span>EXONERADA</span>
                  <span>80.00</span>
                </div>
                <div className="flex justify-between">
                  <span>IGV</span>
                  <span>0.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>TOTAL</span>
                  <span>S/ 80.00</span>
                </div>
              </div>

              <div className="pt-3 text-center">
                <p>CIENTO TREINTA CON 00/100 SOLES</p>
                <p>F. EMISION: 16/10/2022 08:06 PM</p>
                <p>USUARIO: CHICLAYO</p>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <Button variant="outline" className="rounded-full bg-white" onClick={onBackToOptions}>
                Volver
              </Button>
              <Button className="rounded-full bg-[#dc3a43] text-white hover:bg-[#c9323b]">
                Imprimir A5
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
