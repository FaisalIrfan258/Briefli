import Hero from "@/components/Hero";
import UniversityMarquee from "@/components/UniversityMarquee"
import Features from "@/components/Features";
import ExtraFeature from "@/components/ExtraFeature";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <UniversityMarquee />
      <Features />
      <ExtraFeature />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}

