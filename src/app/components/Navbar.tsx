"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 border-b border-transparent bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center h-24">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center space-x-12 flex-1">
              <Link href="/" className="text-3xl font-semibold">
                Briefli
              </Link>
              <div className="hidden md:flex items-center space-x-12">
                {[
                  { href: "/features", label: "Features" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/testimonials", label: "Testimonials" },
                  { href: "/faq", label: "FAQ" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="lg" className="text-lg">
                Sign in
              </Button>
              <Button size="lg" className="text-lg">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex flex-col justify-center items-center p-3 space-y-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-8 bg-gray-600 transform transition duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-8 bg-gray-600 transform transition duration-300 ${
                    isOpen ? "-rotate-45" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-lg">
            <div className="px-6 pt-3 pb-4 space-y-2">
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/faq", label: "FAQ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-xl font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-5 pb-3 border-t border-gray-200">
                <Button variant="ghost" size="lg" className="w-full justify-center mb-3 text-lg">
                  Sign in
                </Button>
                <Button size="lg" className="w-full justify-center text-lg">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </div>
  )
}

