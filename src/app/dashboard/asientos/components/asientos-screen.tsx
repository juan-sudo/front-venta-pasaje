"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { AsientosDialog } from "./asientos-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.asientos

export function AsientosScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={AsientosDialog} />
}
