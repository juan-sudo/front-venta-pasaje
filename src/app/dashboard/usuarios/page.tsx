import { CrudModuleLayout } from "../_components/crud-module-layout"
import { UsuariosScreen } from "./components/usuarios-screen"

export default function Page() {
  return (
    <CrudModuleLayout>
      <UsuariosScreen />
    </CrudModuleLayout>
  )
}
