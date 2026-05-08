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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f633,transparent_70%)]" />
      
      {/* Animated Blobs */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute top-[-15%] right-[5%] w-[600px] h-[600px] bg-blue-500/25 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
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
        className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Modern Grid Pattern - More visible */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #3b82f622 1px, transparent 1px), linear-gradient(to bottom, #3b82f622 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} 
      />
      
      {/* Floating Sparkles - More of them and brighter */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-blue-300 rounded-full shadow-[0_0_8px_#3b82f6]"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.6
          }}
          animate={{
            y: [null, Math.random() * -100 + "px"],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  )
}
