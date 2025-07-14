import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const forumTopics = [
    {
      title: "E-9 visa haqida savollar",
      replies: 45,
      lastActivity: "2 soat oldin",
      category: "Visa",
    },
    {
      title: "Seulda arzon uy-joy topish",
      replies: 23,
      lastActivity: "5 soat oldin",
      category: "Uy-joy",
    },
    {
      title: "Halol ovqat do'konlari",
      replies: 67,
      lastActivity: "1 kun oldin",
      category: "Oshxona",
    },
    {
      title: "Pul o'tkazishda muammolar",
      replies: 12,
      lastActivity: "2 kun oldin",
      category: "Pul o'tkazma",
    },
  ]

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
            <Link href="/">
              <Button variant="outline">Bosh sahifa</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Community</h1>
          <p className="text-xl text-gray-600 mb-8">O'zbeklar jamiyati bilan bog'laning va tajriba almashing</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">2,450</div>
                <div className="text-sm text-gray-600">A'zolar</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto text-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">1,234</div>
                <div className="text-sm text-gray-600">Muhokamalar</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto text-purple-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">45</div>
                <div className="text-sm text-gray-600">Tadbirlar</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-gray-800">89%</div>
                <div className="text-sm text-gray-600">Faollik</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Topics */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Eng mashhur mavzular</h2>
          <div className="space-y-4">
            {forumTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{topic.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{topic.category}</span>
                        <span>{topic.replies} javob</span>
                        <span>{topic.lastActivity}</span>
                      </div>
                    </div>
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Barcha mavzularni ko'rish</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
