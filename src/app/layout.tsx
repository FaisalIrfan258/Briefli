import type React from "react"
import { Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"
import "@/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

