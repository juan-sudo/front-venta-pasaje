"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { ConductoresDialog } from "./conductores-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.conductores

export function ConductoresScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={ConductoresDialog} />
}
