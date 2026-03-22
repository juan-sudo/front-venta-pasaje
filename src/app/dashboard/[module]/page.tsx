import { CrudModulePage } from "../_components/crud-module-page"

type ModulePageProps = {
  params: { module: string }
}

export default function ModulePage({ params }: ModulePageProps) {
  return <CrudModulePage slug={params.module} />
}
