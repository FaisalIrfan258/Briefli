import type React from "react"
import { Plus_Jakarta_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import "@/globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-plus-jakarta-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
