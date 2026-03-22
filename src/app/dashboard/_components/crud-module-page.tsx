import { notFound } from "next/navigation"

import { CrudModuleScreen } from "@/components/crud/crud-module-screen"
import { CRUD_MODULES_BY_SLUG } from "@/lib/crud-modules"
import { CrudModuleLayout } from "./crud-module-layout"

type CrudModulePageProps = {
  slug: string
}

export function CrudModulePage({ slug }: CrudModulePageProps) {
  const crudModule = CRUD_MODULES_BY_SLUG[slug]

  if (!crudModule) {
    notFound()
  }

  return (
    <CrudModuleLayout>
      <CrudModuleScreen module={crudModule} />
    </CrudModuleLayout>
  )
}
