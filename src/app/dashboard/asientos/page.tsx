import { CrudModuleLayout } from "../_components/crud-module-layout"
import { AsientosScreen } from "./components/asientos-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <AsientosScreen />
    </CrudModuleLayout>
  )
}
