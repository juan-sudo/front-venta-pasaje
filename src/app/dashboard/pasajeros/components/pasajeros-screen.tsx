"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { PasajerosDialog } from "./pasajeros-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.pasajeros

export function PasajerosScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={PasajerosDialog} />
}
