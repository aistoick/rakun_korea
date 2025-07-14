"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Eye, Share2, BookOpen, ThumbsUp, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const newsData = {
  "1": {
    title: "Koreyada har bir fuqaro uchun tekinga 150 ming won pul beriladi",
    excerpt:
      "Koreya hukumati iqtisodiy qo'llab-quvvatlash dasturi doirasida har bir fuqaroga 150 ming won miqdorida pul berish e'lon qildi.",
    content: `
      <p>Koreya hukumati COVID-19 pandemiyasining iqtisodiy ta'sirini yumshatish maqsadida har bir fuqaroga 150 ming won miqdorida to'lov berish dasturini e'lon qildi. Bu dastur barcha Koreya fuqarlari va doimiy yashash huquqiga ega bo'lgan xorijliklarga taalluqlidir.</p>
      
      <h3>Dastur tafsilotlari</h3>
      <p>Ushbu dastur doirasida:</p>
      <ul>
        <li>Har bir fuqaro 150,000 won oladi</li>
        <li>To'lov bank hisobiga o'tkaziladi</li>
        <li>Ariza berish shart emas</li>
        <li>To'lov avtomatik ravishda amalga oshiriladi</li>
      </ul>
      
      <h3>Kim olishi mumkin?</h3>
      <p>Quyidagi shaxslar bu to'lovni olish huquqiga ega:</p>
      <ul>
        <li>Koreya fuqarlari</li>
        <li>Doimiy yashash huquqiga ega xorijliklar</li>
        <li>Uzoq muddatli viza egalariga ega bo'lganlar</li>
      </ul>
      
      <h3>To'lov muddati</h3>
      <p>To'lovlar 2024-yil fevral oyidan boshlab amalga oshiriladi. Barcha huquqli shaxslar mart oyining oxirigacha to'lovni olishlari kutilmoqda.</p>
    `,
    category: "Iqtisod",
    date: "2024-01-15",
    readTime: "5 daqiqa",
    views: 1250,
    likes: 89,
    comments: 23,
    image: "/placeholder.svg?height=400&width=800",
    author: "Koreada News",
    tags: ["Iqtisod", "Pul", "Hukumat", "COVID-19"],
  },
  "2": {
    title: "Koreyada yangi VIZA turi paydo bo'ldi... E-7-Y Vizasi Tarixi Boshlanmoqda!",
    excerpt:
      "Koreya hukumati yangi E-7-Y viza turini joriy qildi. Bu viza turi yuqori malakali mutaxassislar uchun mo'ljallangan.",
    content: `
      <p>Koreya Adliya vazirligi yangi E-7-Y viza turini rasmiy ravishda e'lon qildi. Bu viza turi asosan IT, muhandislik va boshqa yuqori texnologiya sohalarida ishlayotgan xorijiy mutaxassislar uchun mo'ljallangan.</p>
      
      <h3>E-7-Y vizasining xususiyatlari</h3>
      <p>Yangi viza turi quyidagi imkoniyatlarni beradi:</p>
      <ul>
        <li>5 yilgacha muddatli yashash huquqi</li>
        <li>Oila a'zolarini olib kelish imkoniyati</li>
        <li>Ish joyini o'zgartirish erkinligi</li>
        <li>Doimiy yashash huquqiga o'tish imkoniyati</li>
      </ul>
      
      <h3>Kimlar ariza berishi mumkin?</h3>
      <p>E-7-Y vizasiga quyidagi talablar qo'yiladi:</p>
      <ul>
        <li>Yuqori ta'lim (magistr yoki doktor)</li>
        <li>Kamida 3 yillik ish tajribasi</li>
        <li>Koreys tili bilimi (TOPIK 4-daraja)</li>
        <li>Malaka sertifikatlari</li>
      </ul>
      
      <h3>Ariza berish jarayoni</h3>
      <p>Ariza berish 2024-yil mart oyidan boshlanadi. Barcha hujjatlar onlayn tarzda topshirilishi mumkin.</p>
    `,
    category: "Visa",
    date: "2024-01-14",
    readTime: "7 daqiqa",
    views: 2100,
    likes: 156,
    comments: 45,
    image: "/placeholder.svg?height=400&width=800",
    author: "Visa Expert",
    tags: ["Visa", "E-7-Y", "Mutaxassis", "Yangilik"],
  },
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsData[params.id as keyof typeof newsData]

  if (!article) {
    notFound()
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
              <Link href="/news">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Yangiliklar</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Badge>{article.category}</Badge>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{article.views} ko'rildi</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Muallif: {article.author}</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              <span>Ulashish</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Teglar</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement */}
              <div className="mt-8 flex items-center space-x-6">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{article.likes}</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <MessageCircle className="h-4 w-4" />
                  <span>{article.comments} izoh</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  <span>Ulashish</span>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                    O'xshash yangiliklar
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(newsData)
                      .filter(([key]) => key !== params.id)
                      .slice(0, 3)
                      .map(([key, data]) => (
                        <Link key={key} href={`/news/${key}`}>
                          <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="font-medium text-gray-800 text-sm mb-1">{data.title}</h4>
                            <p className="text-xs text-gray-500">{data.date}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Yangiliklar obunasi</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Eng so'nggi yangiliklar va ma'lumotlarni birinchi bo'lib oling
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Obuna bo'lish</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
