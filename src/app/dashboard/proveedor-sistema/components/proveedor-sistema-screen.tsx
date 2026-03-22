"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { ProveedorSistemaDialog } from "./proveedor-sistema-dialog"

const crudModule = CRUD_MODULES_BY_SLUG["proveedor-sistema"]

export function ProveedorSistemaScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={ProveedorSistemaDialog} />
}
