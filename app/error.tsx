"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Xatolik yuz berdi</h1>
        <p className="text-gray-600 mb-8">Kechirasiz, nimadir noto'g'ri ketdi.</p>
        <div className="space-x-4">
          <Button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-600 text-white">
            Qayta urinish
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Bosh sahifa
          </Button>
        </div>
      </div>
    </div>
  )
}
