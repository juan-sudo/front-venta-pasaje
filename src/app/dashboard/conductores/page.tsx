import { CrudModuleLayout } from "../_components/crud-module-layout"
import { ConductoresScreen } from "./components/conductores-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <ConductoresScreen />
    </CrudModuleLayout>
  )
}
