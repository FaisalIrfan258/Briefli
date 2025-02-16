import { Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-40 px-4 bg-gray-50">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 241, 242, 0.8) 0%, rgba(250, 244, 255, 0.7) 50%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Top text */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-12">
        <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
        Join over 10,000+ people saving 10+ hours/week
      </div>

      {/* Main heading */}
      <h1 className="text-center font-bold tracking-tight max-w-3xl mx-auto">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mb-2">Read research papers</span>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">super fast</span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto text-lg">
        Summarize, analyze, and organize your research. Quickly find info in documents, and simplify complex topics,
        with the power of AI.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <Button variant="outline" className="rounded-full" size="lg">
          <Play className="w-4 h-4 mr-2" />
          See how it works
        </Button>
        <Button size="lg" className="rounded-full">
          Get Started
        </Button>
      </div>

      {/* App Screenshot */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={`/hero.avif`}
            alt="Briefli application interface"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  )
}

