"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Clock, Globe, MessageCircle, Headphones, Send } from "lucide-react"
import { useState } from "react"
import HeroBackground from "@/components/hero-background"

const sectionEntrance = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="relative pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden">
      <HeroBackground />
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 md:mb-8 text-gradient">
            Bring Your Ideas To Life
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-base md:text-xl leading-relaxed px-2">
            We work with startups, businesses, and enterprises worldwide to build modern web, mobile, SaaS, and AI powered applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
              
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
                  Thank you! We'll get back to you within 2 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-300 focus:border-blue-500/50 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-300 focus:border-blue-500/50 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-300 focus:border-blue-500/50 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info Cards */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:info@infinitysolutions.agency" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-slate-300 group-hover:text-blue-400 transition-colors">info@infinitysolutions.agency</p>
                  </div>
                </a>
                <a href="tel:+923088075521" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-slate-300 group-hover:text-blue-400 transition-colors">+92 308 8075521</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card p-8 bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-5 w-5 text-blue-500 animate-pulse" />
                <h3 className="text-lg font-bold text-white text-gradient">24/7 Global Availability</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-400">Response time: <strong>Less than 2 hours</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-400">Real-time collaboration across all time zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-400">Dedicated support for every project</span>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  )
}
