import { CrudModuleLayout } from "../_components/crud-module-layout"
import { VehiculosScreen } from "./components/vehiculos-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <VehiculosScreen />
    </CrudModuleLayout>
  )
}
