"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Clock, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [activeFilter, setActiveFilter] = useState("Barchasi")

  const filters = ["Barchasi", "Xizmatlar", "Yangiliklar", "Community"]

  // Mock search results
  const searchResults = [
    {
      id: 1,
      type: "service",
      title: "E-9 Visa haqida to'liq ma'lumot",
      description: "Koreyada ishlash uchun E-9 viza olish jarayoni, kerakli hujjatlar va shartlar",
      url: "/services/vizalar",
      category: "Xizmatlar",
      date: "2024-01-15",
    },
    {
      id: 2,
      type: "news",
      title: "Koreyada yangi VIZA turi paydo bo'ldi",
      description: "E-7-Y vizasi haqida eng so'nggi yangiliklar va ma'lumotlar",
      url: "/news/2",
      category: "Yangiliklar",
      date: "2024-01-14",
    },
    {
      id: 3,
      type: "service",
      title: "Halol ovqat do'konlari",
      description: "Koreyada halol ovqat topish yo'llari va mashhur do'konlar ro'yxati",
      url: "/services/oshxona",
      category: "Xizmatlar",
      date: "2024-01-13",
    },
    {
      id: 4,
      type: "community",
      title: "Visa haqida savollar",
      description: "Community forumida visa haqida eng ko'p so'raladigan savollar",
      url: "/community",
      category: "Community",
      date: "2024-01-12",
    },
  ]

  const filteredResults = searchResults.filter((result) => {
    const matchesQuery =
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "Barchasi" || result.category === activeFilter
    return matchesQuery && matchesFilter
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL with new search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`)
  }

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
              <Link href="/services">
                <Button variant="ghost">Xizmatlar</Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost">Yangiliklar</Button>
              </Link>
              <Link href="/community">
                <Button variant="ghost">Community</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Header */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Qidiruv..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-6 pr-14 text-lg rounded-full border-2 border-blue-200 focus:border-blue-400"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-2 top-2 h-10 px-4 bg-blue-500 hover:bg-blue-600 rounded-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {/* Filters */}
          <div className="flex items-center space-x-4 mt-6">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "bg-blue-500 hover:bg-blue-600" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Qidiruv natijalari {searchQuery && `"${searchQuery}" uchun`}
            </h2>
            <p className="text-gray-500">{filteredResults.length} natija topildi</p>
          </div>

          <div className="space-y-4">
            {filteredResults.map((result) => (
              <Link key={result.id} href={result.url}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline">{result.category}</Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            {result.type === "service" && <FileText className="h-4 w-4" />}
                            {result.type === "news" && <Clock className="h-4 w-4" />}
                            {result.type === "community" && <Users className="h-4 w-4" />}
                            <span>{result.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-gray-600">{result.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hech narsa topilmadi</h3>
              <p className="text-gray-600 mb-6">
                "{searchQuery}" uchun hech qanday natija topilmadi. Boshqa kalit so'z bilan qidiring.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Maslahatlar:</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Kalit so'zlarni tekshiring</li>
                  <li>• Qisqaroq so'zlar ishlatib ko'ring</li>
                  <li>• Boshqa sinonimlar ishlatib ko'ring</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
