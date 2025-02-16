"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface MarqueeContentProps {
  universities: Array<{ name: string; logo: string }>
}

export function MarqueeContent({ universities }: MarqueeContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className={`flex space-x-16 ${mounted ? 'animate-marquee' : ''}`}>
        {universities.map((university) => (
          <div
            key={university.name}
            className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={university.logo}
              alt={`${university.name} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
        {mounted && universities.map((university) => (
          <div
            key={`${university.name}-duplicate`}
            className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={university.logo}
              alt={`${university.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
