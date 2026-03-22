"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="hidden md:flex flex-1 max-w-sm">
            <Input type="search" placeholder="Buscar..." />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Settings</Button>
        </div>
      </div>
    </header>
  )
}