"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { PagosDialog } from "./pagos-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.pagos

export function PagosScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={PagosDialog} />
}
