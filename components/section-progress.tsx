"use client"

import { useEffect, useState } from "react"

interface Section {
  id: string
  title: string
}

interface SectionProgressProps {
  sections: Section[]
  className?: string
}

export function SectionProgress({ sections, className = "" }: SectionProgressProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    // Show/hide based on scroll position
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      setIsVisible(scrolled > windowHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  if (!isVisible || sections.length === 0) return null

  return (
    <div className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-xs">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Page Sections</h4>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                const element = document.getElementById(section.id)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className={`flex items-center w-full text-left p-2 rounded-md text-sm transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-l-2 border-cyan-500"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                  activeSection === section.id ? "bg-cyan-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
              <span className="truncate">{section.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
