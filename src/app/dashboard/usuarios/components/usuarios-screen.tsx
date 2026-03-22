"use client"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"

import { UsuariosDialog } from "./usuarios-dialog"

const crudModule = CRUD_MODULES_BY_SLUG.usuarios

export function UsuariosScreen() {
  return <CrudModuleScreen module={crudModule} DialogComponent={UsuariosDialog} />
}
