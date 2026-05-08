"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

interface ScrollToTopProps {
  className?: string
  showAfter?: number
}

export function ScrollToTop({ className = "", showAfter = 300 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-6 left-6 z-40 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
