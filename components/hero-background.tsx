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
      {/* Background Gradients - Softened */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f61a,transparent_70%)]" />
      
      {/* Animated Blobs - Softened */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute top-[-15%] right-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Techy Layer: Floating Lines/Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          style={{ 
            x: useTransform(mouseX, [-1, 1], [Math.random() * -50, Math.random() * 50]),
            y: useTransform(mouseY, [-1, 1], [Math.random() * -50, Math.random() * 50])
          }}
          className="absolute bg-blue-400/10"
          initial={{
            width: Math.random() * 100 + 50,
            height: 1,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            rotate: Math.random() * 360
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Modern Grid Pattern - More subtle */}
      <div className="absolute inset-0 opacity-[0.07]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #3b82f611 1px, transparent 1px), linear-gradient(to bottom, #3b82f611 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} 
      />
      
      {/* Techy Bits: Small Squares */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bit-${i}`}
          style={{ 
            x: useTransform(mouseX, [-1, 1], [Math.random() * -30, Math.random() * 30]),
            y: useTransform(mouseY, [-1, 1], [Math.random() * -30, Math.random() * 30])
          }}
          className="absolute w-1 h-1 border border-blue-400/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            rotate: 360,
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating Sparkles - Subtle */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-blue-300 rounded-full shadow-[0_0_5px_#3b82f6]"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3
          }}
          animate={{
            y: [null, Math.random() * -80 + "px"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  )
}
