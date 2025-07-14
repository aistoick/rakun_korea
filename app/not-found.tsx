import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Sahifa topilmadi</h2>
        <p className="text-gray-500 mb-8">Kechirasiz, siz qidirayotgan sahifa mavjud emas.</p>
        <Link href="/">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Bosh sahifaga qaytish</Button>
        </Link>
      </div>
    </div>
  )
}
