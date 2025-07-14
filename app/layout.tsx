import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Koreada - O'zbeklar uchun Koreya ma'lumotlari",
  description:
    "Koreyada yashayotgan o'zbeklar uchun eng muhim ma'lumotlar va xizmatlar platformasi. Visa, qonunlar, uy-joy va boshqa xizmatlar haqida ma'lumot oling.",
  keywords: "Koreya, O'zbekiston, visa, qonunlar, uy-joy, pul o'tkazma, SIM karta",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
