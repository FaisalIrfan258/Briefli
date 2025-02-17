import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-40 px-4">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 1) 100%,
              rgba(249, 250, 251, 1) 100%
            ),
            radial-gradient(
              circle at 50% 0%,
              rgba(238, 210, 255, 1) 100%,
              rgba(255, 255, 255, 1) 85%
            )
          `
        }}
      />

      {/* Content wrapper */}
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        {/* Top text */}
        <div className="flex items-center gap-2 text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-12">
          <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
          <Button variant="outline" className="rounded-full bg-white" size="lg">
            <Play className="w-4 h-4 mr-2" />
            See how it works
          </Button>
          <Button size="lg" className="rounded-full">
            Get Started
          </Button>
        </div>

        {/* App Video */}
        <div className="mt-16 w-full max-w-5xl mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/briefli.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

