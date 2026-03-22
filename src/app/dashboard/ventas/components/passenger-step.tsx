import { Button } from "@/components/ui/button"

type PassengerStepProps = {
  invoiceForCompany: boolean
  onToggleInvoice: () => void
  onPay: () => void
}

export function PassengerStep({
  invoiceForCompany,
  onToggleInvoice,
  onPay,
}: PassengerStepProps) {
  return (
    <>
      <div className="grid gap-4 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="space-y-4">
          <section className="rounded-[18px] bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4">
              <h3 className="text-[17px] font-semibold text-slate-900">Detalles del pasajero</h3>
            </div>

            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="Nombre"
                />
                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="Apellido paterno y materno"
                />
              </div>

              <input
                className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                placeholder="Numero de celular"
              />

              <div>
                <p className="mb-2 text-sm text-slate-500">Genero</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center justify-between rounded-full border border-slate-400 px-4 py-3 text-sm">
                    <span>Femenino</span>
                    <span className="h-5 w-5 rounded-full border border-slate-500" />
                  </label>
                  <label className="flex items-center justify-between rounded-full border border-slate-400 px-4 py-3 text-sm">
                    <span>Masculino</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-500">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <select className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500">
                  <option>DNI</option>
                  <option>CE</option>
                  <option>Pasaporte</option>
                </select>

                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="DNI"
                />
              </div>
            </div>
          </section>

          <section className="rounded-[18px] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5 sm:py-4">
              <h3 className="text-[16px] font-semibold text-slate-900 sm:text-[18px]">
                Factura con RUC (solo para empresas peruanas)
              </h3>
              <button
                type="button"
                onClick={onToggleInvoice}
                className={`flex h-5 w-5 items-center justify-center rounded border text-xs font-bold ${
                  invoiceForCompany
                    ? "border-[#dc3a43] bg-[#dc3a43] text-white"
                    : "border-slate-300 bg-white text-transparent"
                }`}
                aria-pressed={invoiceForCompany}
                aria-label="Activar factura con RUC"
              >
                X
              </button>
            </div>

            {invoiceForCompany ? (
              <div className="space-y-3 p-4">
                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="RUC *"
                />
                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="Razon social *"
                />
                <input
                  className="h-11 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-slate-500"
                  placeholder="Direccion *"
                />
              </div>
            ) : null}
          </section>
        </div>

        <section className="space-y-4">
          <div className="rounded-[18px] bg-white shadow-sm">
            <div className="border-b border-slate-200 p-4">
              <p className="text-[17px] font-semibold text-slate-900">America Express</p>
              <p className="text-sm text-slate-500">1 asiento | PREMIUM</p>
            </div>

            <div className="space-y-5 p-4">
              <div className="grid grid-cols-[auto_1fr] gap-3">
                <div className="text-center">
                  <p className="text-[22px] font-bold text-slate-900 sm:text-[26px]">9:45 PM</p>
                  <p className="text-sm text-slate-500">22 Mar</p>
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-slate-900">Av La Marina</p>
                  <p className="text-sm text-slate-500">Urb. Santa Maria, Av. La Marina 315 - Trujillo</p>
                </div>
              </div>

              <div className="pl-6 text-sm text-slate-400">10h</div>

              <div className="grid grid-cols-[auto_1fr] gap-3">
                <div className="text-center">
                  <p className="text-[22px] font-bold text-slate-900 sm:text-[26px]">7:45 AM</p>
                  <p className="text-sm text-slate-500">23 Mar</p>
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-slate-900">La Victoria</p>
                  <p className="text-sm text-slate-500">Av. 28 de Julio 1192 - La Victoria</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-[18px] bg-white px-4 py-4 shadow-sm sm:px-6 md:flex-row">
        <div>
          <p className="text-sm font-semibold text-slate-900">Monto</p>
          <p className="text-sm text-slate-500">Sin impuestos</p>
        </div>
        <div className="text-[18px] font-bold text-slate-900">
          S/. 80 <span className="text-slate-500">+</span>
        </div>
        <Button
          className="w-full rounded-full bg-[#dc3a43] px-6 py-5 text-[15px] font-semibold text-white hover:bg-[#c9323b] md:min-w-[220px] md:w-auto"
          onClick={onPay}
        >
          Paga ahora
        </Button>
      </div>
    </>
  )
}
