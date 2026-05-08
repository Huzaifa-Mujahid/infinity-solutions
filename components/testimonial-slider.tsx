"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  title: string
  image: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  interval?: number // Auto-slide interval in ms
}

export function TestimonialSlider({ testimonials, interval = 5000 }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Calculate how many testimonials to show based on screen size
  const getTestimonialsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 2 // Desktop: 2 testimonials
      return 1 // Mobile/Tablet: 1 testimonial
    }
    return 1
  }

  const [testimonialsPerView, setTestimonialsPerView] = useState(1)

  useEffect(() => {
    const updateTestimonialsPerView = () => {
      setTestimonialsPerView(getTestimonialsPerView())
    }

    updateTestimonialsPerView()
    window.addEventListener("resize", updateTestimonialsPerView)
    return () => window.removeEventListener("resize", updateTestimonialsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView)

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }, [maxIndex])

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }, [maxIndex])

  useEffect(() => {
    const sliderInterval = setInterval(handleNext, interval)
    return () => clearInterval(sliderInterval)
  }, [handleNext, interval])

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + testimonialsPerView)

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className={`grid gap-6 ${testimonialsPerView === 2 ? "lg:grid-cols-2" : "grid-cols-1"}`}>
        {visibleTestimonials.map((testimonial, index) => (
          <Card
            key={activeIndex + index}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 shadow-lg min-h-[300px] flex flex-col justify-center items-center text-center"
          >
            <CardContent className="flex flex-col items-center p-0">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-4 leading-relaxed">
                {'"'}
                {testimonial.quote}
                {'"'}
              </blockquote>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow-md z-20"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow-md z-20"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-cyan-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
