"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { TerminalesDialog } from "./terminales-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.terminales

export function TerminalesScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={TerminalesDialog} />
}
