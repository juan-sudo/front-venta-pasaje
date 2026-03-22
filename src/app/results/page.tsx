import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Results() {
  // Mock data for trips
  const trips = [
    {
      id: 1,
      departure: "08:00",
      arrival: "14:00",
      duration: "6h",
      price: 50,
      bus: "Bus Express",
      seats: 20
    },
    {
      id: 2,
      departure: "10:00",
      arrival: "16:00",
      duration: "6h",
      price: 45,
      bus: "Comfort Bus",
      seats: 15
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resultados de Búsqueda</h1>
          <p className="mt-2 text-gray-600">Viajes disponibles</p>
        </div>

        <div className="space-y-4">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{trip.bus}</h3>
                    <p className="text-gray-600">
                      {trip.departure} - {trip.arrival} ({trip.duration})
                    </p>
                    <p className="text-sm text-gray-500">{trip.seats} asientos disponibles</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">S/ {trip.price}</p>
                    <Button>Seleccionar Asientos</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}