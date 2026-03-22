import { CrudModuleLayout } from "../_components/crud-module-layout"
import { RolesScreen } from "./components/roles-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <RolesScreen />
    </CrudModuleLayout>
  )
}
