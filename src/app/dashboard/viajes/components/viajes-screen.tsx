"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { ViajesDialog } from "./viajes-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.viajes

export function ViajesScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={ViajesDialog} />
}
