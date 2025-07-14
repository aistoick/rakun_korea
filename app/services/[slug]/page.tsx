"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Star, BookOpen, ExternalLink, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData = {
  vizalar: {
    title: "Vizalar",
    description: "Koreyada ishlash uchun E-9 viza haqida to'liq ma'lumot",
    category: "Hujjatlar",
    lastUpdated: "2024-01-15",
    readTime: "8 daqiqa",
    articles: [
      {
        title: "E-9 viza uchun kerakli hujjatlar",
        content:
          "E-9 viza olish uchun quyidagi hujjatlar talab qilinadi: pasport, tibbiy ko'rik natijalari, ta'lim haqidagi hujjatlar, mehnat shartnomasi va boshqalar.",
        tags: ["E-9", "Hujjatlar", "Talab"],
      },
      {
        title: "Viza olish jarayoni",
        content:
          "Viza olish jarayoni bir necha bosqichdan iborat: ariza berish, intervyu, tibbiy ko'rik, hujjatlarni tekshirish va yakuniy qaror.",
        tags: ["Jarayon", "Bosqichlar"],
      },
      {
        title: "Viza muddati va uzaytirish",
        content:
          "E-9 viza odatda 3 yilga beriladi va keyin uzaytirish mumkin. Uzaytirish uchun maxsus talablar mavjud.",
        tags: ["Muddat", "Uzaytirish"],
      },
    ],
    contacts: [
      { name: "Koreya Konsulxonasi", phone: "+998-71-123-4567", address: "Toshkent, Amir Temur ko'chasi" },
      { name: "Mehnat Agentligi", phone: "+998-71-987-6543", address: "Toshkent, Mustaqillik maydoni" },
    ],
    tips: [
      "Barcha hujjatlarni oldindan tayyorlang",
      "Tibbiy ko'rikdan o'ting",
      "Koreys tilini o'rganing",
      "Mehnat shartnomasi shartlarini diqqat bilan o'qing",
    ],
  },
  qonunlar: {
    title: "Qonunlar",
    description: "Migrantlar uchun muhim huquqiy ma'lumotlar va qoidalar",
    category: "Huquq",
    lastUpdated: "2024-01-14",
    readTime: "12 daqiqa",
    articles: [
      {
        title: "Mehnat huquqlari",
        content:
          "Koreyada ishlayotgan xorijiy ishchilarning huquqlari: ish haqi, dam olish vaqti, xavfsizlik choralari va boshqalar.",
        tags: ["Mehnat", "Huquqlar", "Xavfsizlik"],
      },
      {
        title: "Yashash qoidalari",
        content: "Koreyada yashash uchun qoidalar: ro'yxatdan o'tish, soliq to'lash, tibbiy xizmatlar va boshqalar.",
        tags: ["Yashash", "Qoidalar", "Soliq"],
      },
      {
        title: "Huquqiy yordam",
        content: "Huquqiy muammolar yuzaga kelganda qayerga murojaat qilish kerak va qanday yordam olish mumkin.",
        tags: ["Yordam", "Maslahat", "Murojaat"],
      },
    ],
    contacts: [
      { name: "Huquqiy Yordam Markazi", phone: "+82-2-123-4567", address: "Seoul, Gangnam-gu" },
      { name: "Migrantlar Uyushmasi", phone: "+82-2-987-6543", address: "Seoul, Jung-gu" },
    ],
    tips: [
      "O'z huquqlaringizni bilib oling",
      "Shartnomalarni diqqat bilan o'qing",
      "Huquqiy yordam markazlariga murojaat qiling",
      "Hujjatlarning nusxalarini saqlang",
    ],
  },
  oshxona: {
    title: "Oshxona",
    description: "Halol ovqat do'konlari va koreys taomlari haqida",
    category: "Ovqat",
    lastUpdated: "2024-01-13",
    readTime: "6 daqiqa",
    articles: [
      {
        title: "Halol ovqat do'konlari",
        content: "Koreyaning turli shaharlarida joylashgan halol ovqat do'konlari va ularning manzillari.",
        tags: ["Halol", "Do'konlar", "Manzil"],
      },
      {
        title: "Koreys taomlari",
        content: "Mashhur koreys taomlari va ularni qanday tayyorlash haqida ma'lumot.",
        tags: ["Taomlar", "Retsept", "Madaniyat"],
      },
      {
        title: "Ovqat narxlari",
        content: "Koreyada ovqat narxlari va tejamkor ovqatlanish yo'llari.",
        tags: ["Narx", "Tejamkorlik", "Byudjet"],
      },
    ],
    contacts: [
      { name: "Halol Market", phone: "+82-2-555-0123", address: "Seoul, Itaewon" },
      { name: "Muslim Restaurant", phone: "+82-2-555-0456", address: "Seoul, Myeongdong" },
    ],
    tips: [
      "Halol sertifikatini tekshiring",
      "Mahalliy bozorlarni o'rganing",
      "Koreys tilida ovqat nomlarini o'rganing",
      "Guruh bo'lib xarid qiling",
    ],
  },
  "pul-otkazma": {
    title: "Pul o'tkazma",
    description: "Koreyadan O'zbekistonga pul yuborish yo'llari",
    category: "Moliya",
    lastUpdated: "2024-01-12",
    readTime: "10 daqiqa",
    articles: [
      {
        title: "Pul o'tkazma usullari",
        content: "Turli pul o'tkazma usullari: bank o'tkazmalari, onlayn xizmatlar, pul o'tkazma kompaniyalari.",
        tags: ["Usullar", "Bank", "Onlayn"],
      },
      {
        title: "Komissiya va kurs",
        content: "Turli xizmatlarning komissiya to'lovlari va valyuta kurslari taqqoslash.",
        tags: ["Komissiya", "Kurs", "Taqqoslash"],
      },
      {
        title: "Xavfsizlik choralari",
        content: "Pul o'tkazishda xavfsizlik choralari va firibgarlikdan qanday saqlanish.",
        tags: ["Xavfsizlik", "Firibgarlik", "Himoya"],
      },
    ],
    contacts: [
      { name: "Western Union", phone: "+82-2-777-8888", address: "Seoul, barcha filiallar" },
      { name: "MoneyGram", phone: "+82-2-888-9999", address: "Seoul, asosiy filiallar" },
    ],
    tips: [
      "Komissiyalarni taqqoslang",
      "Kursni kuzatib turing",
      "Ishonchli xizmatlardan foydalaning",
      "Kvitansiyalarni saqlang",
    ],
  },
  "uy-joy": {
    title: "Uy-joy",
    description: "Uy ijarasi, yashash sharoitlari va ko'chib o'tish",
    category: "Turar joy",
    lastUpdated: "2024-01-11",
    readTime: "15 daqiqa",
    articles: [
      {
        title: "Uy qidirish",
        content: "Koreyada uy qidirish usullari: onlayn platformalar, rieltor xizmatlari, do'stlar orqali.",
        tags: ["Qidirish", "Platformalar", "Rieltor"],
      },
      {
        title: "Ijara shartnomasi",
        content: "Ijara shartnomasi tuzish, shartlar, omonat va oylik to'lovlar haqida ma'lumot.",
        tags: ["Shartnoma", "Shartlar", "Omonat"],
      },
      {
        title: "Yashash xarajatlari",
        content: "Uy-joy bilan bog'liq barcha xarajatlar: ijara, kommunal, internet va boshqalar.",
        tags: ["Xarajatlar", "Kommunal", "Byudjet"],
      },
    ],
    contacts: [
      { name: "Real Estate Agency", phone: "+82-2-333-4444", address: "Seoul, Gangnam" },
      { name: "Housing Support Center", phone: "+82-2-444-5555", address: "Seoul, Jung-gu" },
    ],
    tips: [
      "Uy ko'rishdan oldin ro'yxat tuzing",
      "Shartnomani diqqat bilan o'qing",
      "Transport qulayligini hisobga oling",
      "Qo'shnilar bilan tanishing",
    ],
  },
  "sim-karta": {
    title: "SIM karta",
    description: "Mobil aloqa, internet tariflar va operatorlar",
    category: "Aloqa",
    lastUpdated: "2024-01-10",
    readTime: "7 daqiqa",
    articles: [
      {
        title: "Mobil operatorlar",
        content: "Koreyaning asosiy mobil operatorlari: SK Telecom, KT, LG U+ va ularning xizmatlari.",
        tags: ["Operatorlar", "Xizmatlar", "Taqqoslash"],
      },
      {
        title: "Tariflar va narxlar",
        content: "Turli tariflar, internet paketlari va qo'ng'iroq narxlari haqida ma'lumot.",
        tags: ["Tariflar", "Internet", "Narxlar"],
      },
      {
        title: "SIM karta olish",
        content: "SIM karta olish jarayoni, kerakli hujjatlar va ro'yxatdan o'tish.",
        tags: ["Olish", "Hujjatlar", "Ro'yxat"],
      },
    ],
    contacts: [
      { name: "SK Telecom", phone: "+82-2-100-0114", address: "Seoul, barcha do'konlar" },
      { name: "KT", phone: "+82-2-100-0100", address: "Seoul, asosiy filiallar" },
    ],
    tips: [
      "Tariflarni taqqoslang",
      "Pasportni olib boring",
      "Internet tezligini tekshiring",
      "Xalqaro qo'ng'iroq imkoniyatlarini so'rang",
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData]

  if (!service) {
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
              <Link href="/services">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Xizmatlar</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="secondary">{service.category}</Badge>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{service.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Yangilangan: {service.lastUpdated}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {service.articles.map((article, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Foydali maslahatlar
                </h3>
                <ul className="space-y-2">
                  {service.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-2" />
                  Foydali kontaktlar
                </h3>
                <div className="space-y-4">
                  {service.contacts.map((contact, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-800">{contact.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Phone className="h-4 w-4 mr-1" />
                        {contact.phone}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {contact.address}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
                  Boshqa xizmatlar
                </h3>
                <div className="space-y-2">
                  {Object.entries(serviceData)
                    .filter(([key]) => key !== params.slug)
                    .slice(0, 3)
                    .map(([key, data]) => (
                      <Link key={key} href={`/services/${key}`}>
                        <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-700">{data.title}</span>
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
