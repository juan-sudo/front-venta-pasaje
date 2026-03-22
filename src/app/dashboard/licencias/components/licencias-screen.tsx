"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { LicenciasDialog } from "./licencias-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.licencias

export function LicenciasScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={LicenciasDialog} />
}
