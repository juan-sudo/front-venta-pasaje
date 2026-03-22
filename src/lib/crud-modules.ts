export type CrudFieldType =
  | "text"
  | "email"
  | "number"
  | "date"
  | "datetime-local"
  | "textarea"
  | "boolean"
  | "select"

export type CrudField = {
  key: string
  label: string
  type: CrudFieldType
  required?: boolean
  options?: string[]
  placeholder?: string
}

export type CrudModule = {
  slug: string
  title: string
  description: string
  fields: CrudField[]
  seed: Record<string, string | number | boolean>[]
}

export const CRUD_MODULES: CrudModule[] = [
  {
    slug: "proveedor-sistema",
    title: "Proveedor del sistema",
    description: "Gestiona los datos de la empresa proveedora del software.",
    fields: [
      { key: "ruc", label: "RUC", type: "text", required: true },
      { key: "razonSocial", label: "Razon social", type: "text", required: true },
      { key: "nombreComercial", label: "Nombre comercial", type: "text" },
      { key: "direccion", label: "Direccion", type: "text" },
      { key: "telefono", label: "Telefono", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "web", label: "Web", type: "text" },
    ],
    seed: [],
  },
  {
    slug: "empresas",
    title: "Empresas",
    description: "CRUD de empresas de transporte cliente.",
    fields: [
      { key: "ruc", label: "RUC", type: "text", required: true },
      { key: "razonSocial", label: "Razon social", type: "text", required: true },
      { key: "nombreComercial", label: "Nombre comercial", type: "text" },
      { key: "direccion", label: "Direccion", type: "text" },
      { key: "telefono", label: "Telefono", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "logo", label: "Logo (URL)", type: "text" },
      {
        key: "estadoServicio",
        label: "Estado servicio",
        type: "select",
        options: ["ACTIVO", "SUSPENDIDO"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "licencias",
    title: "Licencias del sistema",
    description: "Control de activacion y expiracion de licencias por empresa.",
    fields: [
      { key: "idEmpresa", label: "ID empresa", type: "number", required: true },
      { key: "claveLicencia", label: "Clave licencia", type: "text", required: true },
      { key: "fechaActivacion", label: "Fecha activacion", type: "date", required: true },
      { key: "fechaExpiracion", label: "Fecha expiracion", type: "date", required: true },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        options: ["ACTIVA", "EXPIRADA", "BLOQUEADA"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "terminales",
    title: "Terminales",
    description: "Registro de terminales de salida y llegada.",
    fields: [
      { key: "nombre", label: "Nombre", type: "text", required: true },
      { key: "ciudad", label: "Ciudad", type: "text", required: true },
      { key: "departamento", label: "Departamento", type: "text" },
      { key: "direccion", label: "Direccion", type: "text" },
      { key: "activo", label: "Activo", type: "boolean" },
    ],
    seed: [],
  },
  {
    slug: "rutas",
    title: "Rutas",
    description: "Define rutas por empresa entre terminal de origen y destino.",
    fields: [
      { key: "idEmpresa", label: "ID empresa", type: "number", required: true },
      { key: "idOrigen", label: "ID terminal origen", type: "number", required: true },
      { key: "idDestino", label: "ID terminal destino", type: "number", required: true },
      { key: "duracionHoras", label: "Duracion horas", type: "number" },
    ],
    seed: [],
  },
  {
    slug: "tipos-vehiculo",
    title: "Tipos de vehiculo",
    description: "Catalogo de tipos de unidad.",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "select",
        options: ["CAMIONETA", "AUTO", "COMBI", "MINI-BUS"],
        required: true,
      },
      { key: "descripcion", label: "Descripcion", type: "text" },
    ],
    seed: [],
  },
  {
    slug: "vehiculos",
    title: "Vehiculos",
    description: "Gestion completa de flota por empresa.",
    fields: [
      { key: "idEmpresa", label: "ID empresa", type: "number", required: true },
      { key: "idTipoVehiculo", label: "ID tipo vehiculo", type: "number", required: true },
      { key: "nroPlaca", label: "Nro placa", type: "text", required: true },
      { key: "marca", label: "Marca", type: "text" },
      { key: "modelo", label: "Modelo", type: "text" },
      { key: "anioFabricacion", label: "Anio fabricacion", type: "number" },
      { key: "numeroChasis", label: "Numero chasis", type: "text" },
      { key: "capacidad", label: "Capacidad", type: "number", required: true },
      { key: "nroSoat", label: "Nro SOAT", type: "text" },
      { key: "fechaVencSoat", label: "Vencimiento SOAT", type: "date" },
      { key: "nroRevisionTecnica", label: "Nro revision tecnica", type: "text" },
      { key: "fechaVencRevTecnica", label: "Vencimiento revision tecnica", type: "date" },
      { key: "activo", label: "Activo", type: "boolean" },
    ],
    seed: [],
  },
  {
    slug: "asientos",
    title: "Asientos",
    description: "CRUD y visualizacion grafica de asientos por vehiculo.",
    fields: [
      { key: "idVehiculo", label: "ID vehiculo", type: "number", required: true },
      { key: "numeroAsiento", label: "Numero asiento", type: "text", required: true },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        options: ["DISPONIBLE", "RESERVADO", "VENDIDO", "PAGADO"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "conductores",
    title: "Conductores",
    description: "Gestion de choferes y vigencia de licencia.",
    fields: [
      { key: "idEmpresa", label: "ID empresa", type: "number", required: true },
      { key: "nombres", label: "Nombres", type: "text", required: true },
      { key: "apellidos", label: "Apellidos", type: "text", required: true },
      { key: "dni", label: "DNI", type: "text", required: true },
      { key: "telefono", label: "Telefono", type: "text" },
      { key: "direccion", label: "Direccion", type: "text" },
      { key: "numeroLicencia", label: "Numero licencia", type: "text", required: true },
      { key: "categoriaLicencia", label: "Categoria licencia", type: "text" },
      {
        key: "fechaVencLicencia",
        label: "Fecha venc. licencia",
        type: "date",
        required: true,
      },
      { key: "activo", label: "Activo", type: "boolean" },
    ],
    seed: [],
  },
  {
    slug: "viajes",
    title: "Viajes",
    description: "Programacion y estado de viajes.",
    fields: [
      { key: "idRuta", label: "ID ruta", type: "number", required: true },
      { key: "idVehiculo", label: "ID vehiculo", type: "number", required: true },
      { key: "idConductor", label: "ID conductor", type: "number", required: true },
      { key: "fechaSalida", label: "Fecha salida", type: "datetime-local", required: true },
      { key: "fechaLlegada", label: "Fecha llegada", type: "datetime-local" },
      { key: "precioBase", label: "Precio base", type: "number", required: true },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        options: ["PROGRAMADO", "EN_CURSO", "COMPLETADO", "CANCELADO"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "roles",
    title: "Roles",
    description: "Catalogo de roles de usuario.",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "select",
        options: ["ADMIN", "VENDEDOR"],
        required: true,
      },
      { key: "descripcion", label: "Descripcion", type: "textarea" },
    ],
    seed: [],
  },
  {
    slug: "usuarios",
    title: "Usuarios",
    description: "Gestion de usuarios del sistema.",
    fields: [
      { key: "idEmpresa", label: "ID empresa", type: "number", required: true },
      { key: "idRol", label: "ID rol", type: "number", required: true },
      { key: "nombre", label: "Nombre", type: "text", required: true },
      { key: "apellidos", label: "Apellidos", type: "text", required: true },
      { key: "dni", label: "DNI", type: "text", required: true },
      { key: "email", label: "Email", type: "email", required: true },
      { key: "password", label: "Password", type: "text", required: true },
      { key: "telefono", label: "Telefono", type: "text" },
      { key: "activo", label: "Activo", type: "boolean" },
    ],
    seed: [],
  },
  {
    slug: "pasajeros",
    title: "Pasajeros",
    description: "Registro y mantenimiento de pasajeros.",
    fields: [
      {
        key: "tipoDocumento",
        label: "Tipo documento",
        type: "select",
        options: ["DNI", "CE", "PASAPORTE"],
        required: true,
      },
      { key: "nroDocumento", label: "Nro documento", type: "text", required: true },
      { key: "nombres", label: "Nombres", type: "text", required: true },
      { key: "apellidos", label: "Apellidos", type: "text", required: true },
      { key: "telefono", label: "Telefono", type: "text", required: true },
      { key: "email", label: "Email", type: "email" },
      { key: "fechaNacimiento", label: "Fecha nacimiento", type: "date" },
    ],
    seed: [],
  },
  {
    slug: "tipos-comprobante",
    title: "Tipos de comprobante",
    description: "Catalogo de boleta, factura y ticket.",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "select",
        options: ["BOLETA", "FACTURA", "TICKET"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "ventas",
    title: "Ventas",
    description: "Registro de ventas y comprobantes emitidos.",
    fields: [
      { key: "idUsuario", label: "ID usuario", type: "number", required: true },
      { key: "idTipoComprobante", label: "ID tipo comprobante", type: "number", required: true },
      { key: "serie", label: "Serie", type: "text", required: true },
      { key: "correlativo", label: "Correlativo", type: "number", required: true },
      { key: "nota", label: "Nota", type: "text" },
      { key: "observaciones", label: "Observaciones", type: "textarea" },
      { key: "qrCode", label: "QR code", type: "text" },
      { key: "subtotal", label: "Subtotal", type: "number" },
      { key: "igv", label: "IGV", type: "number" },
      { key: "total", label: "Total", type: "number", required: true },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        options: ["REGISTRADA", "PAGADA", "ANULADA"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "metodos-pago",
    title: "Metodos de pago",
    description: "Catalogo de medios de pago habilitados.",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "select",
        options: ["EFECTIVO", "YAPE", "PLIN", "TARJETA", "TRANSFERENCIA"],
        required: true,
      },
    ],
    seed: [],
  },
  {
    slug: "pagos",
    title: "Pagos",
    description: "Detalle de pagos aplicados a ventas.",
    fields: [
      { key: "idVenta", label: "ID venta", type: "number", required: true },
      { key: "idMetodo", label: "ID metodo", type: "number", required: true },
      { key: "monto", label: "Monto", type: "number", required: true },
      { key: "fechaPago", label: "Fecha pago", type: "datetime-local" },
    ],
    seed: [],
  },
  {
    slug: "detalle-pasaje",
    title: "Detalle de pasaje",
    description: "Relacion venta, viaje, pasajero y asiento.",
    fields: [
      { key: "idVenta", label: "ID venta", type: "number", required: true },
      { key: "idViaje", label: "ID viaje", type: "number", required: true },
      { key: "idPasajero", label: "ID pasajero", type: "number", required: true },
      { key: "idAsiento", label: "ID asiento", type: "number", required: true },
      { key: "precio", label: "Precio", type: "number", required: true },
      { key: "descuento", label: "Descuento", type: "number" },
    ],
    seed: [],
  },
  {
    slug: "encomiendas",
    title: "Encomiendas",
    description: "Registro y seguimiento de encomiendas.",
    fields: [
      { key: "idVenta", label: "ID venta", type: "number", required: true },
      { key: "idViaje", label: "ID viaje", type: "number", required: true },
      { key: "descripcion", label: "Descripcion", type: "textarea" },
      { key: "pesoKg", label: "Peso (kg)", type: "number" },
      { key: "costo", label: "Costo", type: "number", required: true },
      { key: "remitenteNombre", label: "Remitente nombre", type: "text", required: true },
      { key: "remitenteDoc", label: "Remitente doc", type: "text" },
      {
        key: "destinatarioNombre",
        label: "Destinatario nombre",
        type: "text",
        required: true,
      },
      { key: "destinatarioDoc", label: "Destinatario doc", type: "text" },
      { key: "destinatarioTel", label: "Destinatario telefono", type: "text" },
      {
        key: "estado",
        label: "Estado",
        type: "select",
        options: ["PENDIENTE", "EN_TRANSITO", "ENTREGADO", "DEVUELTO"],
        required: true,
      },
    ],
    seed: [],
  },
]

export const CRUD_MODULES_BY_SLUG = Object.fromEntries(
  CRUD_MODULES.map((module) => [module.slug, module])
) as Record<string, CrudModule>
