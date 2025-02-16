import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Learn faster, smarter, better with Briefli Ai
              </h2>
              <p className="text-gray-600 text-lg">
                Briefli works alongside writers, students, teams, and
                researchers everywhere.
              </p>
              <Button className="group" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Globe Image */}
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
              <div className="animate-spin-slow">
                <Image
                  src="/globe.png"
                  alt="Global reach visualization"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
