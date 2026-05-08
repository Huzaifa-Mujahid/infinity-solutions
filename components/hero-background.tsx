"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth) * 2 - 1
      const y = (clientY / innerHeight) * 2 - 1
      
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const springConfig = { damping: 30, stiffness: 100 }
  const mouseX = useSpring(mousePosition.x, springConfig)
  const mouseY = useSpring(mousePosition.y, springConfig)

  const x1 = useTransform(mouseX, [-1, 1], [-30, 30])
  const y1 = useTransform(mouseY, [-1, 1], [-30, 30])
  
  const x2 = useTransform(mouseX, [-1, 1], [-60, 60])
  const y2 = useTransform(mouseY, [-1, 1], [-60, 60])

  const x3 = useTransform(mouseX, [-1, 1], [40, -40])
  const y3 = useTransform(mouseY, [-1, 1], [40, -40])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#080B10]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a33,transparent_60%)]" />
      
      {/* Animated Blobs */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute top-[-15%] right-[5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        style={{ x: x3, y: y3 }}
        className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #1e293b22 1px, transparent 1px), linear-gradient(to bottom, #1e293b22 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }} 
      />
      
      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.4
          }}
          animate={{
            y: [null, Math.random() * -50 + "px"],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  )
}
