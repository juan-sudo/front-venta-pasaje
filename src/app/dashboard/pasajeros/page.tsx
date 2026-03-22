import { CrudModuleLayout } from "../_components/crud-module-layout"
import { PasajerosScreen } from "./components/pasajeros-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <PasajerosScreen />
    </CrudModuleLayout>
  )
}
