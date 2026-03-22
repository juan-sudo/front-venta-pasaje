import { CrudModuleLayout } from "../_components/crud-module-layout"
import { EmpresasScreen } from "./components/empresas-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <EmpresasScreen />
    </CrudModuleLayout>
  )
}
