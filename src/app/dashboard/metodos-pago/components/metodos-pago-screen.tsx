"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { MetodosPagoDialog } from "./metodos-pago-dialog"

const crudModule = CRUD_MODULES_BY_SLUG["metodos-pago"]

export function MetodosPagoScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={MetodosPagoDialog} />
}
