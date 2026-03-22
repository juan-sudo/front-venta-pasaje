"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { EncomiendasDialog } from "./encomiendas-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.encomiendas

export function EncomiendasScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={EncomiendasDialog} />
}
