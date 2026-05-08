"use client"

import { useEffect, useRef } from "react"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mouse = { x: 0, y: 0, active: false, lerpX: 0, lerpY: 0 }

    const particleCount = 100
    const connectionDistance = 160
    const mouseRadius = 250 // Increased interaction radius

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        // Uniform speed (No 3D look)
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = 1.2 // Uniform size
        this.opacity = 0.35 // Increased visibility
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0

        // Subtle follow/push effect where mouse goes
        if (mouse.active) {
          const dx = mouse.lerpX - this.x
          const dy = mouse.lerpY - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            // Move slightly towards/with the mouse interaction area
            this.x += dx * 0.005
            this.y += dy * 0.005
          }
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      mouse.lerpX += (mouse.x - mouse.lerpX) * 0.1
      mouse.lerpY += (mouse.y - mouse.lerpY) * 0.1

      particles.forEach((p, index) => {
        p.update()
        p.draw()

        // Connections between particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25 // More visible lines
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Stronger mouse interaction (follow motion)
        if (mouse.active) {
          const mdx = p.x - mouse.lerpX
          const mdy = p.y - mouse.lerpY
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < mouseRadius) {
            const mAlpha = (1 - mdist / mouseRadius) * 0.5 // Bright connection to mouse
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${mAlpha})`
            ctx.lineWidth = 1.2
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.lerpX, mouse.lerpY)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!mouse.active) {
        mouse.lerpX = e.clientX
        mouse.lerpY = e.clientY
      }
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 bg-[#080B10]">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B10] via-transparent to-[#080B10] opacity-30" />
    </div>
  )
}
