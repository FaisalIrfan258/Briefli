import { MarqueeContent } from "./MarqueeContent"

const universities = [
  {
    name: "MIT",
    logo: "/logos/mit.avif",
  },
  {
    name: "Harvard",
    logo: "/logos/harvard.avif",
  },
  {
    name: "Princeton",
    logo: "/logos/princeton.avif",
  },
  {
    name: "Berkeley",
    logo: "/logos/berkeley.avif",
  },
  {
    name: "Cambridge",
    logo: "/logos/cambridge.avif",
  },
  {
    name: "Stanford",
    logo: "/logos/standford.avif",
  },
]

export default function UniversityMarquee() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-gray-600 mb-8">
          Trusted by top universities in the world
        </h2>
        <MarqueeContent universities={universities} />
      </div>
    </section>
  )
}
