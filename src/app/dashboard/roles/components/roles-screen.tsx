"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { RolesDialog } from "./roles-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.roles

export function RolesScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={RolesDialog} />
}
