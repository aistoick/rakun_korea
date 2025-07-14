"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")

  const categories = ["Barchasi", "Visa", "Iqtisod", "Madaniyat", "Siyosat", "Jamiyat"]

  const newsArticles = [
    {
      id: 1,
      title: "Koreyada har bir fuqaro uchun tekinga 150 ming won pul beriladi",
      excerpt:
        "Koreya hukumati iqtisodiy qo'llab-quvvatlash dasturi doirasida har bir fuqaroga 150 ming won miqdorida pul berish e'lon qildi.",
      content:
        "Koreya hukumati COVID-19 pandemiyasining iqtisodiy ta'sirini yumshatish maqsadida har bir fuqaroga 150 ming won miqdorida to'lov berish dasturini e'lon qildi. Bu dastur barcha Koreya fuqarlari va doimiy yashash huquqiga ega bo'lgan xorijliklarga taalluqlidir.",
      category: "Iqtisod",
      date: "2024-01-15",
      readTime: "5 daqiqa",
      views: 1250,
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "Koreyada yangi VIZA turi paydo bo'ldi... E-7-Y Vizasi Tarixi Boshlanmoqda!",
      excerpt:
        "Koreya hukumati yangi E-7-Y viza turini joriy qildi. Bu viza turi yuqori malakali mutaxassislar uchun mo'ljallangan.",
      content:
        "Koreya Adliya vazirligi yangi E-7-Y viza turini rasmiy ravishda e'lon qildi. Bu viza turi asosan IT, muhandislik va boshqa yuqori texnologiya sohalarida ishlayotgan xorijiy mutaxassislar uchun mo'ljallangan.",
      category: "Visa",
      date: "2024-01-14",
      readTime: "7 daqiqa",
      views: 2100,
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 3,
      title:
        "Iqtisodiy inqiroz tufayli Koreyaga E-9 vizasi bilan kelayotgan xorijlik ishchilar soni bu yil 21 foizga kamaydi",
      excerpt:
        "Global iqtisodiy vaziyat tufayli Koreyaga mehnat vizasi bilan kelayotgan xorijiy ishchilar soni sezilarli darajada kamaydi.",
      content:
        "Koreya Mehnat vazirligi ma'lumotlariga ko'ra, 2024-yilda E-9 vizasi bilan Koreyaga kelayotgan xorijiy ishchilar soni o'tgan yilga nisbatan 21 foizga kamaygan. Bu asosan global iqtisodiy inqiroz va mahalliy mehnat bozorining o'zgarishi bilan bog'liq.",
      category: "Iqtisod",
      date: "2024-01-13",
      readTime: "6 daqiqa",
      views: 1800,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 4,
      title: "Koreyada xorijiy talabalar uchun yangi stipendiya dasturi e'lon qilindi",
      excerpt: "Koreya ta'lim vazirligi xorijiy talabalar uchun yangi stipendiya dasturini ishga tushirdi.",
      content:
        "Koreya hukumati xorijiy talabalarni qo'llab-quvvatlash maqsadida yangi stipendiya dasturini e'lon qildi. Dastur doirasida eng iqtidorli talabalar to'liq stipendiya olish imkoniyatiga ega bo'ladilar.",
      category: "Ta'lim",
      date: "2024-01-12",
      readTime: "4 daqiqa",
      views: 950,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 5,
      title: "Seulda yangi metro liniyasi ochildi",
      excerpt: "Seul shahrida yangi metro liniyasi rasmiy ravishda foydalanishga topshirildi.",
      content:
        "Seul metropolitenida yangi 9-liniya rasmiy ravishda ochildi. Bu liniya shaharning janubiy qismini markaziy qismi bilan bog'laydi va kunlik 500 ming yo'lovchiga xizmat ko'rsatishi kutilmoqda.",
      category: "Transport",
      date: "2024-01-11",
      readTime: "3 daqiqa",
      views: 720,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 6,
      title: "Koreyada yangi COVID-19 variantiga qarshi emlash kampaniyasi boshlandi",
      excerpt: "Sog'liqni saqlash vazirligi yangi COVID-19 variantiga qarshi emlash kampaniyasini e'lon qildi.",
      content:
        "Koreya Sog'liqni saqlash vazirligi yangi COVID-19 variantiga qarshi emlash kampaniyasini boshladi. Emlash bepul va barcha fuqarlar uchun majburiy emas.",
      category: "Sog'liq",
      date: "2024-01-10",
      readTime: "5 daqiqa",
      views: 1100,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const filteredNews = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Barchasi" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = newsArticles.filter((article) => article.featured)
  const regularNews = filteredNews.filter((article) => !article.featured)

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Korea Yangiliklari</h1>
          <p className="text-xl text-gray-600 mb-8">Koreyadan eng so'nggi yangiliklar va muhim ma'lumotlar</p>

          {/* Search and Filter */}
          <div className="space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Yangiliklar ichidan qidiring..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-14 pl-6 pr-14 text-lg rounded-full border-2 border-blue-200 focus:border-blue-400"
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-500 hover:bg-blue-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-8 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
              Asosiy yangiliklar
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 hover:bg-red-600">Asosiy</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Eye className="h-4 w-4" />
                          <span>{article.views} ko'rildi</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Barcha yangiliklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Hech qanday yangilik topilmadi. Boshqa kalit so'z bilan qidiring.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
