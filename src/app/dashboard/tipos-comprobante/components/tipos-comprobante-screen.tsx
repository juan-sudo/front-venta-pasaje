"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { TiposComprobanteDialog } from "./tipos-comprobante-dialog"

const crudModule = CRUD_MODULES_BY_SLUG["tipos-comprobante"]

export function TiposComprobanteScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={TiposComprobanteDialog} />
}
