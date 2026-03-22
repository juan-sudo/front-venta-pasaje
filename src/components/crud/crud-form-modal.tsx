"use client"

import { FileText, Plus, Save, Sparkles, X } from "lucide-react"

import type { CrudField, CrudModule } from "@/lib/crud-modules"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type CrudRecord = Record<string, string | number | boolean>

export type CrudFormModalProps = {
  module: CrudModule
  form: CrudRecord
  editingId: number | null
  onClose: () => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onFieldChange: (field: CrudField, value: string | boolean) => void
}

export function CrudFormModal({
  module,
  form,
  editingId,
  onClose,
  onSubmit,
  onFieldChange,
}: CrudFormModalProps) {
  const isCreate = editingId === null
  const title = isCreate
    ? module.slug === "viajes"
      ? "Programar viaje"
      : "Nuevo registro"
    : `Editar registro #${editingId}`

  const description = module.slug === "viajes"
    ? "Completa el formulario para registrar la salida, unidad y estado del viaje."
    : "Completa la informacion principal del modulo y guarda los cambios."

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center overflow-x-hidden bg-slate-950/55 p-0 backdrop-blur-md sm:items-center sm:p-6">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <Card className="relative z-10 grid h-[100svh] w-screen max-w-none grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-none border-0 bg-white py-0 shadow-none sm:h-auto sm:max-h-[92dvh] sm:w-full sm:max-w-4xl sm:rounded-[28px] sm:border sm:border-slate-200 sm:shadow-[0_28px_90px_rgba(15,23,42,0.30)]">
        <CardHeader className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-4 sm:px-7 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700 hover:bg-sky-50">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  {isCreate ? "Nuevo" : "Edicion"}
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-slate-600">
                  {module.title}
                </Badge>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm sm:h-11 sm:w-11">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    {title}
                  </CardTitle>
                  <CardDescription className="mt-1 max-w-xl text-sm leading-6 text-slate-500 sm:max-w-2xl">
                    {description}
                  </CardDescription>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onClose}
              title="Cerrar"
              className="mt-1 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="min-h-0 px-0">
          <form onSubmit={onSubmit} className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto]">
            <div className="min-h-0 overflow-y-auto overflow-x-hidden px-4 py-4 pb-3 sm:px-7 sm:py-5">
              <div className="grid gap-4 md:grid-cols-2">
                {module.fields.map((field) => {
                  const isWide = field.type === "textarea" || field.type === "boolean"

                  return (
                    <div
                      key={field.key}
                      className={`space-y-2 ${isWide ? "md:col-span-2" : ""}`}
                    >
                      <Label
                        htmlFor={`modal-${field.key}`}
                        className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                      >
                        {field.label}
                        {field.required ? " *" : ""}
                      </Label>

                      {field.type === "textarea" ? (
                        <textarea
                          id={`modal-${field.key}`}
                          value={String(form[field.key] ?? "")}
                          required={field.required}
                          onChange={(event) => onFieldChange(field, event.target.value)}
                          placeholder={field.placeholder ?? `Escribe ${field.label.toLowerCase()}`}
                          className="min-h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                        />
                      ) : field.type === "boolean" ? (
                        <label className="flex min-h-16 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white">
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{field.label}</p>
                            <p className="text-xs text-slate-500">
                              Activa o desactiva este estado segun corresponda.
                            </p>
                          </div>
                          <input
                            id={`modal-${field.key}`}
                            type="checkbox"
                            checked={Boolean(form[field.key])}
                            onChange={(event) => onFieldChange(field, event.target.checked)}
                            className="h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-300"
                          />
                        </label>
                      ) : field.type === "select" ? (
                        <select
                          id={`modal-${field.key}`}
                          value={String(form[field.key] ?? "")}
                          required={field.required}
                          onChange={(event) => onFieldChange(field, event.target.value)}
                          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                        >
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          id={`modal-${field.key}`}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder ?? field.label}
                          value={String(form[field.key] ?? "")}
                          onChange={(event) => onFieldChange(field, event.target.value)}
                          className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 text-slate-700 placeholder:text-slate-400 focus-visible:border-sky-400 focus-visible:bg-white focus-visible:ring-sky-100"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="sticky bottom-0 z-10 border-t border-slate-200 bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-7 sm:py-4 sm:pb-4">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="h-11 w-full rounded-full bg-white sm:h-8 sm:w-auto"
                >
                  <X className="mr-1.5 h-4 w-4" />
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="h-11 w-full rounded-full bg-slate-900 px-4 text-white hover:bg-slate-800 sm:h-8 sm:w-auto sm:px-5"
                >
                  {isCreate ? (
                    <>
                      <Plus className="mr-1.5 h-4 w-4" />
                      {module.slug === "viajes" ? "Crear viaje" : "Crear registro"}
                    </>
                  ) : (
                    <>
                      <Save className="mr-1.5 h-4 w-4" />
                      Guardar cambios
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
