"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { EmpresasDialog } from "./empresas-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.empresas

export function EmpresasScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={EmpresasDialog} />
}
