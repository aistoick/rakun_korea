"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Globe,
  Gavel,
  CreditCard,
  UtensilsCrossed,
  DollarSign,
  Home,
  Smartphone,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const services = [
    {
      name: "Vizalar",
      description: "Koreyada ishlash uchun E-9 viza haqida",
      icon: CreditCard,
      color: "text-blue-600",
    },
    {
      name: "Qonunlar",
      description: "Migrantlar uchun muhim huquqiy ma'lumotlar",
      icon: Gavel,
      color: "text-amber-600",
    },
    {
      name: "Oshxona",
      description: "Halol ovqat, milliy yoki koreys taomlari ",
      icon: UtensilsCrossed,
      color: "text-green-600",
    },
    {
      name: "Pul o'tkazma",
      description: "Koreyadan O'zbekistonga pul yuborish",
      icon: DollarSign,
      color: "text-emerald-600",
    },
    {
      name: "Uy-joy",
      description: "Uy ijarasi va yashash sharoitlari",
      icon: Home,
      color: "text-orange-600",
    },
    {
      name: "SIM karta",
      description: "Mobil aloqa qurilmalari va sim-kartalar",
      icon: Smartphone,
      color: "text-purple-600",
    },
  ]

  const newsArticles = [
    {
      id: 1,
      title: "Koreyada har bir fuqaro uchun tekinga 150 ming won pul beriladi",
      date: "2025-01-15",
      image: "/image/public.jpg",
    },
    {
      id: 2,
      title: "Koreyada yangi VIZA turi paydo bo'ldi... E-7-Y Vizasi Tarixi Boshlanmoqda!",
      date: "2025-01-14",
      image: "/image/visa.jpeg",
    },
    {
      id: 3,
      title:
        "Iqtisodiy inqiroz tufayli Koreyaga E-9 vizasi bilan kelayotgan xorijlik ishchilar soni bu yil 21 foizga kamaydi",
      date: "2025-01-13",
      image: "/image/visa-e9.jpg",
    },
    {
      id: 4,
      title: "Koreyada har bir fuqaro uchun tekinga 150 ming won pul beriladi",
      date: "2025-01-12",
      image: "/image/public2.jpg",
    },
  ]

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
<div className="flex items-center space-x-2">
  <div className="w-8 h-8 relative">
    <Image
      src="/image/logo.png"
      alt="Koreada logo"
      fill
      className="object-contain rounded-full"
    />
  </div>
  <span className="text-2xl font-bold text-pink-600">Koreada</span>
</div>

            {/* Center Navigation - REMOVE THIS SECTION */}

            {/* Right Side - keep this but remove the extra Community button since we have one in the main buttons */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">O'zbek</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>O'zbek</DropdownMenuItem>
                  <DropdownMenuItem>한국어</DropdownMenuItem>
                  <DropdownMenuItem>English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>Xizmatlar</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services/vizalar">Vizalar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/qonunlar">Qonunlar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/uy-joy">Uy-joy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/pul-otkazma">Pul o'tkazma</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/community">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white">Community</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Nimani bilishni xohlaysiz?</h1>
          <div className="max-w-2xl mx-auto space-y-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Qidiruv..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 px-6 text-lg rounded-full border-2 border-blue-200 focus:border-blue-400"
              />
              <Button type="submit" className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                <Search className="h-4 w-4 mr-2" />
                Qidirish
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-500">Eng ko'p</span> <span className="text-gray-700">qidirilgan xizmatlar</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <service.icon
                        className={`h-12 w-12 mx-auto ${service.color} group-hover:scale-110 transition-transform`}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-500">Korea</span> <span className="text-gray-700">yangiliklari</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-3">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🇰🇷</span>
                </div>
                <span className="text-2xl font-bold text-pink-400">Koreada</span>
              </div>
              <p className="text-gray-300">
                Koreyada yashayotgan o'zbeklar uchun eng muhim ma'lumotlar va xizmatlar platformasi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Xizmatlar</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Qonunlar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Uy-joy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pul o'tkazma
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Jamiyat</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Yangiliklar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tadbirlar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Yordam
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aloqa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@koreada.com</li>
                <li>Telegram: @koreada_uz</li>
                <li>Instagram: @koreada_official</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Koreada. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
