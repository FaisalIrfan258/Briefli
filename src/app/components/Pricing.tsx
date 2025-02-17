"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = {
  basic: {
    name: "Basic",
    description: "Learn at the highest level.",
    monthlyPrice: 9,
    yearlyPrice: 5.4, // 40% off
    features: [
      "Limited summarization",
      "500 AI text generations/month",
      "40 PDF a month",
      "Flashcards summaries",
      "Built on Claude 3 Sonnet",
      "Customer Support",
    ],
  },
  pro: {
    name: "Pro",
    description: "Accelerate your learning journey.",
    monthlyPrice: 20,
    yearlyPrice: 12, // 40% off
    features: [
      "Unlimited summarization",
      "Unlimited AI text generations",
      "Unlimited PDFs Upload",
      "Enhanced Flashcards summaries",
      "Premium models built on Claude 3 Opus",
      "Priority customer support",
    ],
  },
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing plans</h2>
        <p className="text-gray-600 text-lg">Enjoy the power of the best AI models on a single platform</p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <button
          onClick={() => setIsAnnual(false)}
          className={`px-4 py-2 rounded-full ${!isAnnual ? "bg-gray-100" : ""}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 ${isAnnual ? "bg-gray-100" : ""}`}
        >
          Annual
          <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">SAVE 40%</Badge>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Basic Plan */}
        <Card className="relative">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{plans.basic.name}</CardTitle>
            <p className="text-gray-600">{plans.basic.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">
                ${isAnnual ? plans.basic.yearlyPrice : plans.basic.monthlyPrice}
              </span>
              <span className="text-gray-600">/m</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {plans.basic.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Get started
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="relative bg-purple-50">
          <Badge className="absolute top-4 right-4 bg-purple-100 text-purple-600 hover:bg-purple-100">
            Most popular
          </Badge>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{plans.pro.name}</CardTitle>
            <p className="text-gray-600">{plans.pro.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">${isAnnual ? plans.pro.yearlyPrice : plans.pro.monthlyPrice}</span>
              <span className="text-gray-600">/m</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {plans.pro.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-black hover:bg-gray-800">Get started</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

