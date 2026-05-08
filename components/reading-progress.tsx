"use client"

import { useEffect, useState } from "react"
import { BookOpen, Hash } from "lucide-react"

interface ReadingProgressProps {
  targetId?: string
  className?: string
}

export function ReadingProgress({ targetId = "main-content", className = "" }: ReadingProgressProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [totalSections, setTotalSections] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Find all sections on the page
    const findSections = () => {
      const sections = document.querySelectorAll(
        'section[id], div[id*="section"], div[id*="hero"], div[id*="about"], div[id*="services"], div[id*="projects"], div[id*="team"], div[id*="contact"], div[id*="timeline"], div[id*="process"], div[id*="tech-stack"], div[id*="why-choose"], div[id*="cta"], div[id*="mission"]',
      )
      return Array.from(sections).filter((section) => section.id && section.offsetHeight > 100) // Filter out very small sections
    }

    const sections = findSections()
    setTotalSections(sections.length)

    const updateProgress = () => {
      if (sections.length === 0) return

      const scrollPosition = window.scrollY + window.innerHeight / 2
      let activeSectionIndex = 0

      // Find which section is currently in view
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          activeSectionIndex = i
          break
        } else if (scrollPosition > sectionBottom) {
          activeSectionIndex = i + 1
        }
      }

      // Ensure we don't exceed the total sections
      activeSectionIndex = Math.min(activeSectionIndex, sections.length - 1)
      setCurrentSection(activeSectionIndex + 1) // +1 for human-readable counting

      // Show progress indicator after first section and before last section
      setIsVisible(window.scrollY > 300 && activeSectionIndex < sections.length - 1)
    }

    // Initial setup
    setTimeout(() => {
      updateProgress()
    }, 500)

    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [targetId])

  if (!isVisible || totalSections === 0) return null

  const sectionsLeft = Math.max(0, totalSections - currentSection)
  const progressPercentage = totalSections > 0 ? (currentSection / totalSections) * 100 : 0

  return (
    <div className={`fixed bottom-20 right-4 sm:right-6 z-40 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 p-2 sm:p-3 md:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 hover:scale-105 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-none">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200 dark:text-gray-600"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Progress circle */}
            <path
              className="text-cyan-500"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${progressPercentage}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-600" />
          </div>
        </div>

        <div className="text-xs sm:text-sm min-w-0 flex-1">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Hash className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap text-xs sm:text-sm">
              {sectionsLeft > 0 ? `${sectionsLeft} Section${sectionsLeft !== 1 ? "s" : ""} Left` : "Complete!"}
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {currentSection} of {totalSections}
          </div>
        </div>
      </div>
    </div>
  )
}
