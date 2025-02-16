import { Card } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    rating: 4.5,
    text: "With Briefli, I'm able to do in 30 minutes what used to take 3 hours. There's nothing else like it.",
    name: "John Watson",
    role: "Undergraduate Student",
    avatar: "/avatars/john-watson.avif",
  },
  {
    rating: 4.5,
    text: "I appreciate being able to read, take notes and then compare what I just learned to what Briefli summarizes.",
    name: "Emily Saunders",
    role: "Researcher",
    avatar: "/avatars/emily-saunders.avif",
  },
  {
    rating: 4.5,
    text: "If you read PDFs at all for work or research, you should really try out Briefli AI. It's excellent. I'm in awe of the product; I think you'll be too.",
    name: "John Watson",
    role: "Law Student",
    avatar: "/avatars/john-watson2.avif",
  },
  {
    rating: 4.5,
    text: "Briefli has legit been a game changer for me this semester. Briefli is supercharging my studying already.",
    name: "Daniel Harris",
    role: "Data Scientist",
    avatar: "/avatars/daniel-harris.avif",
  },
  {
    rating: 4.5,
    text: "This tool is a game-changer! No more brackets or manual linking. It uses Claude to automatically connect notes based on context and meaning.",
    name: "Alex Bennett",
    role: "Content Writer",
    avatar: "/avatars/alex-bennett.avif",
  },
  {
    rating: 4.5,
    text: "The user interface is simple to understand and easy to use. The AI response is also very helpful. I enjoy using this platform to more easily digest research papers.",
    name: "Linda Rodriguez",
    role: "Academic Tutor",
    avatar: "/avatars/linda-rodriguez.avif",
  },
  {
    rating: 4.5,
    text: "Interacting with documents on Briefli is like speaking to the team who wrote the research paper. It's fantastic.",
    name: "Jennifer Parker",
    role: "Research Assistant",
    avatar: "/avatars/jennifer-parker.avif",
  },
  {
    rating: 4.5,
    text: "We use Briefli AI to help read through hundreds of dermatology research papers.",
    name: "David Kim",
    role: "PhD Student",
    avatar: "/avatars/david-kim.avif",
  },
  {
    rating: 4.5,
    text: "It has helped me navigate so many difficult articles and complicated essay topics.",
    name: "Michael Lee",
    role: "Researcher",
    avatar: "/avatars/michael-lee.avif",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-orange-400">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
      {rating % 1 !== 0 && <StarHalf className="w-4 h-4 fill-current" />}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 pt-32 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">People really love using Briefli</h2>
        <p className="text-gray-600 text-lg">Supporting over 10,000+ researchers</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow">
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 mb-6 text-gray-600">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

