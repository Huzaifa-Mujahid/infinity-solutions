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

    const particleCount = 120 // Increased for better visibility
    const connectionDistance = 170
    const mouseRadius = 250 // Larger interaction area

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      z: number

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.z = Math.random() * 2 
        // Increased velocity for "fast" feel
        this.vx = (Math.random() - 0.5) * (0.8 + this.z * 0.4)
        this.vy = (Math.random() - 0.5) * (0.8 + this.z * 0.4)
        this.size = (Math.random() * 2 + 1) * (this.z + 0.5)
        this.opacity = (Math.random() * 0.5 + 0.3) * (this.z / 2 + 0.5)
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -50) this.x = canvas!.width + 50
        if (this.x > canvas!.width + 50) this.x = -50
        if (this.y < -50) this.y = canvas!.height + 50
        if (this.y > canvas!.height + 50) this.y = -50

        if (mouse.active) {
          const dx = mouse.lerpX - this.x
          const dy = mouse.lerpY - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            const force = (200 - dist) / 200
            this.x -= dx * force * 0.03
            this.y -= dy * force * 0.03
          }
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        if (this.z > 1.2) {
          ctx.shadowBlur = 15
          ctx.shadowColor = "rgba(59, 130, 246, 0.6)"
        } else {
          ctx.shadowBlur = 0
        }
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
      
      mouse.lerpX += (mouse.x - mouse.lerpX) * 0.12
      mouse.lerpY += (mouse.y - mouse.lerpY) * 0.12

      particles.forEach((p, index) => {
        p.update()
        p.draw()

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            // Increased alpha for better visibility
            const alpha = (1 - dist / connectionDistance) * 0.3 * Math.min(p.opacity, p2.opacity)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
            ctx.lineWidth = 1.0
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        if (mouse.active) {
          const mdx = p.x - mouse.lerpX
          const mdy = p.y - mouse.lerpY
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < mouseRadius) {
            const mAlpha = (1 - mdist / mouseRadius) * 0.5
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${mAlpha})`
            ctx.lineWidth = 1.5
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
        className="w-full h-full"
        style={{ filter: "contrast(1.2) brightness(1.2)" }}
      />
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080B10_100%)] opacity-40" />
    </div>
  )
}
