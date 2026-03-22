"use client"

import { useEffect, useMemo, useState } from "react"
import { Armchair, Eye, Pencil, Plus, Search, Trash2 } from "lucide-react"

import { CrudField, CrudModule } from "@/lib/crud-modules"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CrudFormModal,
  type CrudFormModalProps,
} from "@/components/crud/crud-form-modal"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type CrudRecord = Record<string, string | number | boolean>
type SeatVisualStatus = "DISPONIBLE" | "RESERVADO" | "VENDIDO" | "PAGADO"

type CrudModuleScreenProps = {
  module: CrudModule
  DialogComponent?: (props: CrudFormModalProps) => React.ReactNode
}

type VehicleInfo = {
  id: number
  label: string
  tipo: string
  capacidad: number
}

const DEFAULT_CAPACITY_BY_TYPE: Record<string, number> = {
  COMBI: 15,
  CAMIONETA: 5,
  AUTO: 4,
  "MINI-BUS": 20,
}

function buildSeats(capacity: number, statusByNumber?: Map<number, SeatVisualStatus>) {
  return Array.from({ length: capacity }, (_, i) => {
    const seatNumber = i + 1
    return {
      seatNumber,
      status: statusByNumber?.get(seatNumber) ?? "DISPONIBLE",
    }
  })
}

function SeatCabin({
  tipo,
  seats,
  compact = false,
}: {
  tipo: string
  seats: Array<{ seatNumber: number; status: SeatVisualStatus }>
  compact?: boolean
}) {
  const isSmallVehicle = tipo === "CAMIONETA" || tipo === "AUTO"
  const frontSeat = seats[0]
  const backSeats = tipo === "AUTO" ? seats.slice(1, 4) : seats.slice(1, 5)
  const seatClass = (status: SeatVisualStatus) =>
    `flex h-11 items-center justify-center rounded-2xl border-2 bg-white text-center font-semibold shadow-sm ${seatStatusClass(status)} ${compact ? "text-xs" : "text-sm"}`
  const wheelSize = compact ? "h-8 w-8" : "h-10 w-10"
  const wheelInnerSize = compact ? "h-4 w-4" : "h-[18px] w-[18px]"

  return (
    <div className={`rounded-[28px] border border-slate-100 bg-white ${compact ? "p-3" : "p-4"} shadow-sm`}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`font-semibold tracking-wide text-slate-900 ${compact ? "text-xs" : "text-sm"}`}>Cabina</span>
        <Badge className="border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-50">{tipo}</Badge>
      </div>

      {isSmallVehicle ? (
        <div className={compact ? "space-y-3" : "space-y-4"}>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center justify-center">
              <div className={`flex items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400 shadow-sm ${wheelSize}`}>
                <div className={`relative rounded-full border-2 border-current ${wheelInnerSize}`}>
                  <span className="absolute left-1/2 top-[-1px] h-2.5 w-[2px] -translate-x-1/2 bg-current" />
                  <span className="absolute left-[1px] top-1/2 h-[2px] w-2.5 -translate-y-1/2 rotate-[35deg] bg-current" />
                  <span className="absolute right-[1px] top-1/2 h-[2px] w-2.5 -translate-y-1/2 -rotate-[35deg] bg-current" />
                </div>
              </div>
            </div>
            {frontSeat ? (
              <div className={seatClass(frontSeat.status)}>{frontSeat.seatNumber}</div>
            ) : (
              <div />
            )}
            <div />
          </div>
          <div className={`grid gap-3 ${tipo === "AUTO" ? "grid-cols-3" : "grid-cols-4"}`}>
            {backSeats.map((seat) => (
              <div key={seat.seatNumber} className={seatClass(seat.status)}>
                {seat.seatNumber}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`mx-auto space-y-3 ${compact ? "max-w-[176px]" : "max-w-[196px]"}`}>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center justify-center">
              <div className={`flex items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400 shadow-sm ${wheelSize}`}>
                <div className={`relative rounded-full border-2 border-current ${wheelInnerSize}`}>
                  <span className="absolute left-1/2 top-[-1px] h-2.5 w-[2px] -translate-x-1/2 bg-current" />
                  <span className="absolute left-[1px] top-1/2 h-[2px] w-2.5 -translate-y-1/2 rotate-[35deg] bg-current" />
                  <span className="absolute right-[1px] top-1/2 h-[2px] w-2.5 -translate-y-1/2 -rotate-[35deg] bg-current" />
                </div>
              </div>
            </div>
            {seats[0] ? <div className={seatClass(seats[0].status)}>{seats[0].seatNumber}</div> : <div />}
            {seats[1] ? <div className={seatClass(seats[1].status)}>{seats[1].seatNumber}</div> : <div />}
          </div>
          {Array.from({ length: Math.ceil((seats.length - 2) / 3) }, (_, row) => {
            const base = 2 + row * 3
            const a = seats[base]
            const b = seats[base + 1]
            const c = seats[base + 2]
            return (
              <div key={row} className="grid grid-cols-3 gap-3">
                {a ? <div className={seatClass(a.status)}>{a.seatNumber}</div> : <div />}
                {b ? <div className={seatClass(b.status)}>{b.seatNumber}</div> : <div />}
                {c ? <div className={seatClass(c.status)}>{c.seatNumber}</div> : <div />}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function getStorageKey(slug: string) {
  return `crud:${slug}`
}

function buildInitialForm(fields: CrudField[]) {
  const form: CrudRecord = {}

  for (const field of fields) {
    if (field.type === "boolean") {
      form[field.key] = false
      continue
    }

    if (field.type === "select" && field.options?.length) {
      form[field.key] = field.options[0]
      continue
    }

    form[field.key] = ""
  }

  return form
}

function formatCell(value: string | number | boolean | undefined) {
  if (value === undefined || value === "") return "-"
  if (typeof value === "boolean") return value ? "SI" : "NO"
  return String(value)
}

function toSeatNumber(value: string | number | boolean | undefined) {
  const raw = String(value ?? "")
  const match = raw.match(/\d+/)
  return match ? Number(match[0]) : null
}

function normalizeSeatStatus(value: unknown): SeatVisualStatus {
  const raw = String(value ?? "").toUpperCase()
  if (raw === "PAGADO") return "PAGADO"
  if (raw === "RESERVADO") return "RESERVADO"
  if (raw === "VENDIDO" || raw === "OCUPADO") return "VENDIDO"
  return "DISPONIBLE"
}

function seatStatusClass(status: SeatVisualStatus) {
  if (status === "PAGADO") return "border-emerald-500 text-emerald-600"
  if (status === "RESERVADO") return "border-amber-700 text-amber-700"
  if (status === "VENDIDO") return "border-rose-500 text-rose-500"
  return "border-slate-200 text-slate-300"
}

function AsientosVisual({
  records,
}: {
  records: CrudRecord[]
}) {
  const [vehicles, setVehicles] = useState<VehicleInfo[]>([])
  const [vehicleId, setVehicleId] = useState("")
  const [manualTipo, setManualTipo] = useState("COMBI")
  const [manualCapacidad, setManualCapacidad] = useState(15)

  useEffect(() => {
    const vehiculosRaw = window.localStorage.getItem(getStorageKey("vehiculos"))
    const tiposRaw = window.localStorage.getItem(getStorageKey("tipos-vehiculo"))

    const vehiculos = vehiculosRaw ? (JSON.parse(vehiculosRaw) as CrudRecord[]) : []
    const tipos = tiposRaw ? (JSON.parse(tiposRaw) as CrudRecord[]) : []

    const tipoById = new Map<number, string>()
    for (const tipo of tipos) {
      const id = Number(tipo.id)
      const nombre = String(tipo.nombre ?? "")
      if (!Number.isNaN(id) && nombre) tipoById.set(id, nombre)
    }

    const mapped = vehiculos
      .map((vehiculo) => {
        const id = Number(vehiculo.id)
        if (Number.isNaN(id)) return null
        const tipoId = Number(vehiculo.idTipoVehiculo)
        const tipo = tipoById.get(tipoId) ?? "COMBI"
        const capFromRow = Number(vehiculo.capacidad)
        const capacidad = Number.isFinite(capFromRow) && capFromRow > 0
          ? capFromRow
          : DEFAULT_CAPACITY_BY_TYPE[tipo] ?? 15
        const label = `${id} - ${String(vehiculo.nroPlaca ?? "SIN PLACA")} (${tipo})`
        return { id, label, tipo, capacidad }
      })
      .filter((item): item is VehicleInfo => item !== null)

    setVehicles(mapped)
    if (mapped.length > 0 && !vehicleId) {
      setVehicleId(String(mapped[0].id))
      setManualTipo(mapped[0].tipo)
      setManualCapacidad(mapped[0].capacidad)
    }
  }, [vehicleId])

  const selectedVehicle = useMemo(
    () => vehicles.find((vehicle) => String(vehicle.id) === vehicleId),
    [vehicleId, vehicles]
  )

  const activeTipo = selectedVehicle?.tipo ?? manualTipo
  const activeCapacidad = selectedVehicle?.capacidad ?? manualCapacidad
  const vehicleSeats = records.filter((row) => String(row.idVehiculo ?? "") === (vehicleId || "0"))

  const seatStatusByNumber = useMemo(() => {
    const map = new Map<number, SeatVisualStatus>()
    for (const row of vehicleSeats) {
      const n = toSeatNumber(row.numeroAsiento)
      if (!n) continue
      map.set(n, normalizeSeatStatus(row.estado))
    }
    return map
  }, [vehicleSeats])

  const seats = useMemo(
    () => buildSeats(activeCapacidad, seatStatusByNumber),
    [activeCapacidad, seatStatusByNumber]
  )

  const counters = useMemo(() => {
    const initial = { DISPONIBLE: 0, RESERVADO: 0, VENDIDO: 0, PAGADO: 0 }
    for (const seat of seats) initial[seat.status] += 1
    return initial
  }, [seats])

  const sampleLayouts = useMemo(
    () => [
      { tipo: "AUTO", seats: buildSeats(DEFAULT_CAPACITY_BY_TYPE.AUTO) },
      { tipo: "CAMIONETA", seats: buildSeats(DEFAULT_CAPACITY_BY_TYPE.CAMIONETA) },
      { tipo: "COMBI", seats: buildSeats(DEFAULT_CAPACITY_BY_TYPE.COMBI) },
    ],
    []
  )

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Mapa grafico de asientos</CardTitle>
        <CardDescription>
          Vista elegante por estado: disponible, reservado, vendido y pagado.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="space-y-1.5 md:col-span-2">
            <Label>Vehiculo</Label>
            <select
              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
              value={vehicleId}
              onChange={(event) => {
                const next = event.target.value
                setVehicleId(next)
                const found = vehicles.find((vehicle) => String(vehicle.id) === next)
                if (found) {
                  setManualTipo(found.tipo)
                  setManualCapacidad(found.capacidad)
                }
              }}
            >
              {vehicles.length === 0 ? (
                <option value="">Sin vehiculos registrados</option>
              ) : (
                vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={String(vehicle.id)}>
                    {vehicle.label}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label>Tipo</Label>
            <select
              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm"
              value={activeTipo}
              onChange={(event) => setManualTipo(event.target.value)}
              disabled={Boolean(selectedVehicle)}
            >
              {["COMBI", "CAMIONETA", "AUTO", "MINI-BUS"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">Vehiculo seleccionado</p>
            <SeatCabin tipo={activeTipo} seats={seats} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">Tipos de asientos</p>
            <div className="grid gap-3">
              {sampleLayouts.map((layout) => (
                <div key={layout.tipo} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{layout.tipo}</p>
                    <span className="text-xs text-slate-500">
                      {layout.seats.length} asientos
                    </span>
                  </div>
                  <SeatCabin tipo={layout.tipo} seats={layout.seats} compact />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <Badge className="border border-slate-300 bg-white text-slate-700 hover:bg-white">Disponible</Badge>
          <Badge className="border border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-100">Reservado</Badge>
          <Badge className="border border-rose-300 bg-rose-100 text-rose-800 hover:bg-rose-100">Vendido</Badge>
          <Badge className="border border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Pagado</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export function CrudModuleScreen({
  module,
  DialogComponent = CrudFormModal,
}: CrudModuleScreenProps) {
  const [records, setRecords] = useState<CrudRecord[]>([])
  const [form, setForm] = useState<CrudRecord>(() => buildInitialForm(module.fields))
  const [editingId, setEditingId] = useState<number | null>(null)
  const [selected, setSelected] = useState<CrudRecord | null>(null)
  const [query, setQuery] = useState("")
  const [showFormModal, setShowFormModal] = useState(false)

  useEffect(() => {
    const key = getStorageKey(module.slug)
    const raw = window.localStorage.getItem(key)

    if (!raw) {
      window.localStorage.setItem(key, JSON.stringify(module.seed))
      setRecords(module.seed)
      return
    }

    try {
      const parsed = JSON.parse(raw) as CrudRecord[]
      setRecords(Array.isArray(parsed) ? parsed : [])
    } catch {
      setRecords([])
    }
  }, [module.slug, module.seed])

  useEffect(() => {
    window.localStorage.setItem(getStorageKey(module.slug), JSON.stringify(records))
  }, [module.slug, records])

  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase()
    if (!text) return records

    return records.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(text)
      )
    )
  }, [records, query])

  const visibleColumns = module.fields.slice(0, 6)

  function resetForm() {
    setForm(buildInitialForm(module.fields))
    setEditingId(null)
    setShowFormModal(false)
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    for (const field of module.fields) {
      if (field.required && String(form[field.key] ?? "").trim() === "") return
    }

    if (editingId !== null) {
      setRecords((prev) =>
        prev.map((row) =>
          Number(row.id) === editingId
            ? { ...row, ...form, updatedAt: new Date().toISOString() }
            : row
        )
      )
      resetForm()
      return
    }

    const nextId =
      records.length > 0
        ? Math.max(...records.map((row) => Number(row.id ?? 0))) + 1
        : 1

    setRecords((prev) => [
      ...prev,
      {
        id: nextId,
        ...form,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ])

    resetForm()
  }

  function onEdit(row: CrudRecord) {
    const payload: CrudRecord = {}
    for (const field of module.fields) {
      payload[field.key] = row[field.key] ?? (field.type === "boolean" ? false : "")
    }
    setForm(payload)
    setEditingId(Number(row.id))
    setShowFormModal(true)
  }

  function onDelete(id: number) {
    setRecords((prev) => prev.filter((row) => Number(row.id) !== id))
    if (selected && Number(selected.id) === id) setSelected(null)
    if (editingId === id) resetForm()
  }

  function onFieldChange(field: CrudField, value: string | boolean) {
    setForm((prev) => ({
      ...prev,
      [field.key]:
        field.type === "boolean"
          ? Boolean(value)
          : field.type === "number"
            ? value === ""
              ? ""
              : Number(value)
            : String(value),
    }))
  }

  return (
    <div className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-slate-900">{module.title}</h1>
        <p className="text-sm text-slate-600">{module.description}</p>
      </div>

      {module.slug === "asientos" ? <AsientosVisual records={records} /> : null}

      <div className="grid gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="text-lg">Listado</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  className="rounded-full bg-slate-900 text-white hover:bg-slate-800"
                  onClick={() => {
                    setEditingId(null)
                    setForm(buildInitialForm(module.fields))
                    setShowFormModal(true)
                  }}
                >
                  <Plus className="mr-1.5 h-4 w-4" />
                  {module.slug === "viajes" ? "Programar viaje" : "Nuevo registro"}
                </Button>
                <Badge variant="outline">{filtered.length} registros</Badge>
              </div>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                placeholder="Buscar por cualquier campo..."
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  {visibleColumns.map((field) => (
                    <TableHead key={field.key}>{field.label}</TableHead>
                  ))}
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={visibleColumns.length + 1}
                      className="py-6 text-center text-slate-500"
                    >
                      No hay registros en este modulo.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((row) => (
                    <TableRow key={String(row.id)}>
                      {visibleColumns.map((field) => (
                        <TableCell key={field.key}>{formatCell(row[field.key])}</TableCell>
                      ))}
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => setSelected(row)}
                            title="Ver"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => onEdit(row)}
                            title="Editar"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => onDelete(Number(row.id))}
                            title="Eliminar"
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {selected ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Detalle registro #{String(selected.id)}
                </h3>
                <div className="grid gap-2 text-sm sm:grid-cols-2">
                  {module.fields.map((field) => (
                    <div key={field.key} className="rounded-lg bg-white px-3 py-2">
                      <p className="text-xs text-slate-500">{field.label}</p>
                      <p className="font-medium text-slate-800">
                        {formatCell(selected[field.key])}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>

      {showFormModal ? (
        <DialogComponent
          module={module}
          form={form}
          editingId={editingId}
          onClose={resetForm}
          onSubmit={onSubmit}
          onFieldChange={onFieldChange}
        />
      ) : null}
    </div>
  )
}
