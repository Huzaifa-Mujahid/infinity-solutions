"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  title: string
  location: string
  image: string
  rating: number
}

interface TestimonialSingleSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSingleSlider({ testimonials }: TestimonialSingleSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, isPaused])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with Infinity Solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {/* Main Testimonial Card */}
            <Card className="p-8 md:p-12 hover:shadow-xl transition-all duration-500 min-h-[400px] flex flex-col justify-between">
              <div>
                {/* Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8 italic">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{currentTestimonial.name}</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">{currentTestimonial.title}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
