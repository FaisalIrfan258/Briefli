"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Save Time",
    description: "Upload your research paper and get simplified, easy-to-understand summaries with key points.",
    image: "/card1.avif",
  },
  {
    title: "Flashcard Summaries",
    description: "Instantly convert dense academic papers into bite-sized flashcards.",
    image: "/card2.avif",
  },
  {
    title: "Multi-Document Support",
    description: "Switch between multiple documents in one chat, whether it's text, PDFs, or academic papers.",
    image: "/card3.avif",
  },
  {
    title: "Personalized Study Prompts",
    description: "Generate flashcards tailored to your research needs, making studying and note-taking a breeze.",
    image: "/card4.avif",
  },
  {
    title: "Seamless Chat Experience",
    description: "Engage in real-time with your research content, and sync your chat across all devices.",
    image: "/card5.avif",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      {/* Main heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI tool built specifically for academic papers
        </h2>
        <p className="text-gray-600 text-lg">
          From undergrad to postgrad and beyond.
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* First row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain p-4"
                    priority={index < 2}
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(2).map((feature, index) => (
            <Card key={index + 2} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
  )
}

