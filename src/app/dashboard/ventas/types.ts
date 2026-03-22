import type { LucideIcon } from "lucide-react"

export type SeatStatus = "DISPONIBLE" | "RESERVADO" | "VENDIDO" | "PAGADO"

export type Seat = {
  number: number
  status: SeatStatus
}

export type LowerDeckRow = {
  col1?: number | "wheel"
  col2?: number
  col3?: number
  col4?: number
}

export type VehicleType = "camioneta" | "auto" | "combi"

export type SalesView = "listing" | "flow"

export type StepTab = "1. Asientos" | "2. Pasajero"

export type PrintPreviewFormat = "options" | "a5"

export type VehicleListing = {
  id: VehicleType
  title: string
  type: string
  seats: string
  totalSeats: string
  seatHistory: string
  rating: string
  reviews: string
  depart: string
  from: string
  duration: string
  arrive: string
  to: string
  oldPrice: string
  price: string
}

export type VehicleFeature = {
  icon: LucideIcon
  title: string
  subtitle: string
}
