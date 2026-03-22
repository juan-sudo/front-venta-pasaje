"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { TiposVehiculoDialog } from "./tipos-vehiculo-dialog"

const crudModule = CRUD_MODULES_BY_SLUG["tipos-vehiculo"]

export function TiposVehiculoScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={TiposVehiculoDialog} />
}
