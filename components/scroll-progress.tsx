"use client"

import { useEffect, useState } from "react"

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: string
}

export function ScrollProgress({ className = "", color = "bg-cyan-500", height = "h-1" }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress, { passive: true })

    // Update on resize
    window.addEventListener("resize", updateScrollProgress, { passive: true })

    // Initial calculation
    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      window.removeEventListener("resize", updateScrollProgress)
    }
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${className}`}>
      <div className={`${height} bg-gray-200 dark:bg-gray-700`}>
        <div
          className={`${height} ${color} transition-all duration-150 ease-out`}
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)`,
          }}
        />
      </div>
    </div>
  )
}
