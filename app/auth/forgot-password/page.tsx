"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Password reset for:", email)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Card className="shadow-xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Email yuborildi!</h2>
              <p className="text-gray-600 mb-6">
                Parolni tiklash uchun havola {email} manziliga yuborildi. Email qutingizni tekshiring va havolani bosing.
              </p>
              <div className="space-y-3">
                <Link href="/auth/login">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Kirish sahifasiga qaytish</Button>
                </Link>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full bg-transparent">
                  Boshqa email yuborish
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🇰🇷</span>
            </div>
            <span className="text-3xl font-bold text-pink-600">Koreada</span>
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Parolni unutdingizmi?</CardTitle>
            <p className="text-gray-600">
              Email manzilingizni kiriting, sizga parolni tiklash havolasi yuboramiz
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email manzil</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                Parolni tiklash havolasini yuborish
              </Button>
            </form>

            <div className="text-center">
              <Link href="/auth/login" className="inline-flex items-center text-sm text-blue-600 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Kirish sahifasiga qaytish
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
