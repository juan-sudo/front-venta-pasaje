"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { DetallePasajeDialog } from "./detalle-pasaje-dialog"

const crudModule = CRUD_MODULES_BY_SLUG["detalle-pasaje"]

export function DetallePasajeScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={DetallePasajeDialog} />
}
