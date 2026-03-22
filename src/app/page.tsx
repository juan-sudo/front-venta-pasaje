"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Home() {
  const router = useRouter()
  const [origen, setOrigen] = useState("")
  const [destino, setDestino] = useState("")
  const [fecha, setFecha] = useState("")

  // Mock data for terminals
  const terminals = [
    { id: 1, name: "Lima", city: "Lima", department: "Lima" },
    { id: 2, name: "Arequipa", city: "Arequipa", department: "Arequipa" },
    { id: 3, name: "Cusco", city: "Cusco", department: "Cusco" },
    { id: 4, name: "Trujillo", city: "Trujillo", department: "La Libertad" },
  ]

  const handleSearch = () => {
    // For now, just navigate to results
    router.push('/results')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Venta de Pasajes</h1>
          <p className="mt-2 text-gray-600">Busca tu viaje</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Buscar Viaje</CardTitle>
            <CardDescription>
              Selecciona origen, destino y fecha
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Origen
              </label>
              <Select onValueChange={setOrigen}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona origen" />
                </SelectTrigger>
                <SelectContent>
                  {terminals.map((terminal) => (
                    <SelectItem key={terminal.id} value={terminal.id.toString()}>
                      {terminal.name} - {terminal.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destino
              </label>
              <Select onValueChange={setDestino}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona destino" />
                </SelectTrigger>
                <SelectContent>
                  {terminals.map((terminal) => (
                    <SelectItem key={terminal.id} value={terminal.id.toString()}>
                      {terminal.name} - {terminal.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha
              </label>
              <Input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>

            <Button className="w-full" onClick={handleSearch}>
              Buscar Viajes
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => router.push('/dashboard')}>
            Ir al Dashboard Administrativo
          </Button>
        </div>
      </div>
    </div>
  )
}
