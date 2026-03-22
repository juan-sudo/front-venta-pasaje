import { CirclePercent, Clock3, Sofa, Tv } from "lucide-react"

import type {
  LowerDeckRow,
  Seat,
  SeatStatus,
  StepTab,
  VehicleFeature,
  VehicleListing,
  VehicleType,
} from "./types"

export const seatPalette: Record<SeatStatus, { stroke: string; fill: string; text: string }> = {
  DISPONIBLE: {
    stroke: "#D8D8D8",
    fill: "#FFFFFF",
    text: "#9A9A9A",
  },
  RESERVADO: {
    stroke: "#8A5A35",
    fill: "#FFFFFF",
    text: "#8A5A35",
  },
  VENDIDO: {
    stroke: "#DB3B43",
    fill: "#FFFFFF",
    text: "#DB3B43",
  },
  PAGADO: {
    stroke: "#6A994E",
    fill: "#F3FAEF",
    text: "#6A994E",
  },
}

export const stepTabs: readonly StepTab[] = ["1. Asientos", "2. Pasajero"]

export const infoTabs = ["Por que reservar este autobus?"] as const

export const initialSeats: Seat[] = Array.from({ length: 16 }, (_, index) => {
  const n = index + 1
  let status: SeatStatus = "DISPONIBLE"
  if (n === 4 || n === 9) status = "RESERVADO"
  if (n === 6 || n === 12 || n === 13) status = "VENDIDO"
  if (n === 3 || n === 15) status = "PAGADO"
  return { number: n, status }
})

export const lowerDeckRows: LowerDeckRow[] = [
  { col1: "wheel", col2: 1, col3: 2 },
  { col1: 3, col2: 4, col3: 5 },
  { col1: 6, col2: 7, col4: 8 },
  { col1: 9, col2: 10, col4: 11 },
  { col1: 12, col2: 13, col3: 14, col4: 15 },
]

export const vehicleListings: VehicleListing[] = [
  {
    id: "camioneta",
    title: "America Express",
    type: "Camioneta",
    seats: "5 Asientos",
    totalSeats: "5",
    seatHistory: "Historial de asientos",
    rating: "4.4",
    reviews: "328",
    depart: "9:45 PM",
    from: "Av La Marina",
    duration: "10h 00m",
    arrive: "7:45 AM",
    to: "La Victoria",
    oldPrice: "70",
    price: "59.50",
  },
  {
    id: "auto",
    title: "America Express",
    type: "Auto",
    seats: "4 Asientos",
    totalSeats: "4",
    seatHistory: "Historial de asientos",
    rating: "4.3",
    reviews: "307",
    depart: "12:00 PM",
    from: "Av La Marina",
    duration: "10h 00m",
    arrive: "10:00 PM",
    to: "La Victoria",
    oldPrice: "50",
    price: "42.50",
  },
  {
    id: "combi",
    title: "America Express",
    type: "Combi",
    seats: "17 Asientos",
    totalSeats: "17",
    seatHistory: "Historial de asientos",
    rating: "4.6",
    reviews: "412",
    depart: "8:30 AM",
    from: "Av La Marina",
    duration: "9h 30m",
    arrive: "6:00 PM",
    to: "La Victoria",
    oldPrice: "90",
    price: "75.00",
  },
]

const autoFeatures: VehicleFeature[] = [
  {
    icon: Tv,
    title: "Capacidad para pocos pasajeros",
    subtitle: "Ideal para traslados directos, viajes ejecutivos y rutas con menor demanda.",
  },
  {
    icon: Sofa,
    title: "Viaje comodo y mas privado",
    subtitle: "Menos pasajeros, mayor comodidad y mejor experiencia para recorridos personalizados.",
  },
  {
    icon: Clock3,
    title: "Salida agil y recorrido directo",
    subtitle: "Perfecto para viajes rapidos con embarque simple y atencion mas inmediata.",
  },
  {
    icon: CirclePercent,
    title: "Rendimiento practico y eficiente",
    subtitle: "Opcion funcional para movilizacion urbana e interprovincial con costos controlados.",
  },
]

const groupVehicleFeatures: VehicleFeature[] = [
  {
    icon: Tv,
    title: "Capacidad para 17 pasajeros",
    subtitle: "Unidad ideal para turismo, transporte de personal y traslados regionales.",
  },
  {
    icon: Sofa,
    title: "Asientos confortables y salon espacioso",
    subtitle: "Interior comodo con aire acondicionado y una distribucion pensada para viajes grupales.",
  },
  {
    icon: Clock3,
    title: "Seguridad y estabilidad Mercedes-Benz",
    subtitle: "Buen frenado, direccion estable y manejo confiable tanto en ciudad como en carretera.",
  },
  {
    icon: CirclePercent,
    title: "Motor eficiente y buen rendimiento",
    subtitle: "Pensada para trabajo continuo con economia de combustible y mantenimiento confiable.",
  },
]

export function getVehicleFeatures(vehicleType: VehicleType): VehicleFeature[] {
  return vehicleType === "auto" ? autoFeatures : groupVehicleFeatures
}
