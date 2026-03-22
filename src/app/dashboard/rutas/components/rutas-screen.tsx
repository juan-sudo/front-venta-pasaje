"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { RutasDialog } from "./rutas-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.rutas

export function RutasScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={RutasDialog} />
}
