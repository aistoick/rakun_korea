"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Gavel,
  CreditCard,
  UtensilsCrossed,
  DollarSign,
  Home,
  Smartphone,
  Clock,
  Users,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const services = [
    {
      id: "vizalar",
      name: "Vizalar",
      description: "Koreyada ishlash uchun E-9 viza haqida to'liq ma'lumot",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Hujjatlar",
      popularity: 95,
      articles: 24,
      lastUpdated: "2024-01-15",
    },
    {
      id: "qonunlar",
      name: "Qonunlar",
      description: "Migrantlar uchun muhim huquqiy ma'lumotlar va qoidalar",
      icon: Gavel,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      category: "Huquq",
      popularity: 88,
      articles: 18,
      lastUpdated: "2024-01-14",
    },
    {
      id: "oshxona",
      name: "Oshxona",
      description: "Halol ovqat do'konlari va koreys taomlari haqida",
      icon: UtensilsCrossed,
      color: "text-green-600",
      bgColor: "bg-green-50",
      category: "Ovqat",
      popularity: 76,
      articles: 32,
      lastUpdated: "2024-01-13",
    },
    {
      id: "pul-otkazma",
      name: "Pul o'tkazma",
      description: "Koreyadan O'zbekistonga pul yuborish yo'llari",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      category: "Moliya",
      popularity: 92,
      articles: 15,
      lastUpdated: "2024-01-12",
    },
    {
      id: "uy-joy",
      name: "Uy-joy",
      description: "Uy ijarasi, yashash sharoitlari va ko'chib o'tish",
      icon: Home,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      category: "Turar joy",
      popularity: 84,
      articles: 28,
      lastUpdated: "2024-01-11",
    },
    {
      id: "sim-karta",
      name: "SIM karta",
      description: "Mobil aloqa, internet tariflar va operatorlar",
      icon: Smartphone,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      category: "Aloqa",
      popularity: 71,
      articles: 12,
      lastUpdated: "2024-01-10",
    },
  ]

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🇰🇷</span>
              </div>
              <span className="text-2xl font-bold text-pink-600">Koreada</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/community">
                <Button variant="ghost">Community</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Bosh sahifa</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Barcha Xizmatlar</h1>
          <p className="text-xl text-gray-600 mb-8">Koreyada yashash uchun kerakli barcha ma'lumotlar bir joyda</p>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Xizmatlarni qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-6 pr-14 text-lg rounded-full border-2 border-blue-200 focus:border-blue-400"
            />
            <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>

                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{service.popularity}%</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{service.articles} maqola</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.lastUpdated}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Hech narsa topilmadi. Boshqa kalit so'z bilan qidiring.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
