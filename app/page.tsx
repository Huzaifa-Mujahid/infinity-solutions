"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Code, Users, Zap, Globe, Cpu, Rocket, Star, CheckCircle2, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroBackground from "@/components/hero-background"

const featuredProjects = [
  {
    id: 1,
    name: "Emergi Mentors",
    description: "Scalable mentorship web platform with real-time booking, profiles, and payment processing",
    tags: ["Laravel", "Node.js", "Next.js", "Socket.io", "Stripe"],
    image: "/images/projects/emergi-featured-600.png",
    category: "Mentorship Platform",
    country: "🇦🇺 Australia",
    liveLink: "https://emergimentors.com.au/",
  },
  {
    id: 2,
    name: "Alhanna Clinic",
    description: "UAE clinic web & mobile booking platform with multilingual support and appointment management",
    tags: ["Next.js", "Laravel", "React.js", "Flutter"],
    image: "/images/projects/alhanna-featured-600.png",
    category: "Healthcare",
    country: "🇦🇪 UAE",
    liveLink: "https://alhannaclinic.ae/",
  },
  {
    id: 3,
    name: "Hot Seats",
    description: "AI-powered geo-based offers & event discovery app with real-time city-wide activations",
    tags: ["React Native", "Next.js", "Node.js", "AI"],
    image: "/images/projects/hotseats-featured-600.png",
    category: "Event Discovery",
    country: "🇺🇸 USA",
    liveLink: "https://hotseats.io/",
  },
]

const services = [
  {
    title: "Custom Web Applications",
    description: "Full stack web development using React, Laravel, Node.js, and Next.js",
    icon: Code,
    technologies: ["React", "Laravel", "Node.js", "Next.js"],
    number: "01"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform and native mobile apps for iOS and Android",
    icon: Globe,
    technologies: ["Flutter", "React Native", "iOS", "Android"],
    number: "02"
  },
  {
    title: "SaaS Product Development",
    description: "From MVP to scalable SaaS platforms with enterprise features",
    icon: Rocket,
    technologies: ["Full Stack", "Cloud", "Scalable Architecture"],
    number: "03"
  },
  {
    title: "UI/UX Design Solutions",
    description: "User-centric design focused on conversion and seamless experience",
    icon: Cpu,
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    number: "04"
  },
  {
    title: "Backend & API Systems",
    description: "Robust and secure backend architectures with high performance",
    icon: Zap,
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
    number: "05"
  }
]

const testimonials = [
  {
    quote: "Infinity Solutions Team are true professionals in development. They handled our project from the ground up, delivering a clean, scalable, and fully functional product.",
    name: "Niko Memmos",
    title: "Safe Heaven Foundation",
    location: "Chicago, USA 🇺🇸",
    image: "/images/clients/niko.jpg",
    rating: 5,
    company: "Safe Heaven"
  },
  {
    quote: "Absolutely excellent service in all parts of the work. They worked on multiple projects for me and were brilliant with both web and mobile domains.",
    name: "Richard Maddrell",
    title: "Vitalis UK",
    location: "England, UK 🇬🇧",
    image: "/images/clients/richard.jpg",
    rating: 5,
    company: "Vitalis"
  },
  {
    quote: "They demonstrated exceptional dedication in bringing Emergi Mentors to life. Their technical proficiency ensured a high-quality product.",
    name: "Fassahat Ullah Qureshi",
    title: "Emergi Mentors Platform",
    location: "NSW, Australia 🇦🇺",
    image: "/images/clients/fassahat.jpg",
    rating: 5,
    company: "Emergi Mentors"
  },
  {
    quote: "Exceptional UI/UX design that significantly improved our user engagement. Highly recommended for premium designs.",
    name: "Sarah Johnson",
    title: "TechFlow Systems",
    location: "Ontario, Canada 🇨🇦",
    image: "/placeholder.svg",
    rating: 5,
    company: "TechFlow"
  },
  {
    quote: "Their backend architecture is top-notch. Secure, scalable, and lightning fast. A true partner for any tech startup.",
    name: "Mark Verdon",
    title: "Aero Logistics",
    location: "Berlin, Germany 🇩🇪",
    image: "/placeholder.svg",
    rating: 5,
    company: "AeroLog"
  },
]

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals to create a technical roadmap optimized for global scalability.",
    details: ["Requirement Analysis", "Market Research", "Tech Stack Selection"]
  },
  {
    title: "Design & UX Architecture",
    description: "Crafting intuitive user journeys and pixel-perfect interfaces that resonate with international audiences.",
    details: ["User Flow Mapping", "Interactive Prototyping", "Design System Build"]
  },
  {
    title: "Agile Engineering",
    description: "Building your product with iterative sprints, ensuring every line of code is clean, performant, and secure.",
    details: ["Sprint-based Dev", "CI/CD Integration", "API-First Approach"]
  },
  {
    title: "Launch & Optimization",
    description: "Seamless deployment across global servers followed by rigorous performance tuning and monitoring.",
    details: ["Global Deployment", "Stress Testing", "Post-launch Support"]
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}

const sectionEntrance = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
}

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTimestamp: number | null = null
    const duration = 2000
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    const animationFrame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [value])
  
  return <span>{count}{suffix}</span>
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden flex flex-col items-center text-center">
        <HeroBackground />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8"
          >
            <span className="text-white block">Infinity Solutions</span>
            <span className="text-blue-gradient">Transforming Ideas Into Infinite Possibilities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12"
          >
            Full stack development company dedicated to creating powerful, scalable, and future-ready digital solutions with 24/7 worldwide support
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href="/projects" className="btn-primary shimmer-btn px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              View Our Work
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4 border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-xl hover:border-slate-500 hover:bg-slate-700/50 hover:text-white transition-all">
              Contact Us
            </Link>
          </motion.div>


        </div>
        
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </section>

      {/* Services Section */}
      <motion.section {...sectionEntrance} className="section-space bg-slate-900/20 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">WHAT WE DO</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">Our Services</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          >
            <motion.div variants={cardVariants} className="md:col-span-3">
              <div className="glass-card glass-card-hover p-10 h-full relative overflow-hidden flex flex-col">
                <div className="text-[80px] font-black text-white/[0.03] absolute top-2 right-4 leading-none pointer-events-none">01</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Web Applications</h3>
                <p className="text-slate-400 mb-8 max-w-sm">Full stack web development using React, Laravel, Node.js, and Next.js.</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {["React", "Laravel", "Node.js", "Next.js"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-[10px] text-blue-400 uppercase tracking-wider font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="md:col-span-3">
              <div className="glass-card glass-card-hover p-10 h-full relative overflow-hidden flex flex-col">
                <div className="text-[80px] font-black text-white/[0.03] absolute top-2 right-4 leading-none pointer-events-none">02</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile App Development</h3>
                <p className="text-slate-400 mb-8 max-w-sm">Cross-platform and native mobile apps for iOS and Android.</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {["Flutter", "React Native", "iOS", "Android"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-[10px] text-blue-400 uppercase tracking-wider font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="md:col-span-2">
              <div className="glass-card glass-card-hover p-8 h-full relative overflow-hidden flex flex-col">
                <div className="text-[60px] font-black text-white/[0.02] absolute top-2 right-4 leading-none pointer-events-none">03</div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-6">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">SaaS Development</h3>
                <p className="text-slate-400 text-sm mb-6">From MVP to scalable SaaS platforms with enterprise features.</p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="md:col-span-2">
              <div className="glass-card glass-card-hover p-8 h-full relative overflow-hidden flex flex-col">
                <div className="text-[60px] font-black text-white/[0.02] absolute top-2 right-4 leading-none pointer-events-none">04</div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-6">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">UI/UX Design</h3>
                <p className="text-slate-400 text-sm mb-6">User-centric design focused on conversion and experience.</p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} className="md:col-span-2">
              <div className="glass-card glass-card-hover p-8 h-full relative overflow-hidden flex flex-col">
                <div className="text-[60px] font-black text-white/[0.02] absolute top-2 right-4 leading-none pointer-events-none">05</div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-6">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Backend & API</h3>
                <p className="text-slate-400 text-sm mb-6">Robust and secure architectures with high performance.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section {...sectionEntrance} className="section-space md:py-20 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">PREMIUM PROCESS</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-8 leading-[1.1]">
                Engineering <br /> Excellence, <br /> Step by Step
              </h2>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-12">
                We follow a rigorous, transparent development cycle designed for speed and reliability, ensuring your vision is executed perfectly.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-slate-800 to-transparent hidden md:block" />
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20 group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 font-bold group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500 hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="glass-card p-8 group-hover:border-blue-500/30 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="md:hidden text-blue-500">{index + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/30 px-3 py-1.5 rounded-lg border border-slate-800/50">
                          <CheckCircle2 className="h-3 w-3 text-blue-500" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section {...sectionEntrance} className="section-space bg-slate-900/10 relative">
        <div className="section-divider absolute top-0" />
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
              <p className="text-slate-400 text-lg leading-relaxed">Discover our impactful digital solutions delivered worldwide.</p>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
              View All Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="premium-project-card group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/45 to-transparent opacity-90" />
                  <div className="absolute left-4 top-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950/95 border border-blue-400/45 text-[10px] text-blue-100 font-semibold uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(15,23,42,0.45)]">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{project.name}</h3>
                  <p className="text-slate-400/90 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 text-[10px] text-slate-300 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                      <Globe className="h-3 w-3" /> {project.country}
                    </span>
                    <Link href={`/projects/${project.id}`} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-300 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Stories Section - REFINED COMPACT MARQUEE */}
      <motion.section {...sectionEntrance} className="section-space relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">CLIENT SUCCESS</span>
            <h2 className="text-3xl md:text-6xl font-bold text-gradient mb-6">Impact Stories</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Hear directly from the founders and leaders we've partnered with.</p>
          </div>
        </div>

        {/* Row 1 - Right to Left (Compact) */}
        <div className="flex overflow-hidden relative mb-10">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass-card p-6 min-w-[300px] md:min-w-[360px] max-w-[360px] mx-4 shrink-0 whitespace-normal relative group">
                <div className="absolute top-4 right-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
                  <Quote size={40} />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-3 w-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-800">
                    <Image src={t.image || "/placeholder.svg"} alt={t.name} width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs">{t.name}</h4>
                    <p className="text-blue-400 text-[9px] font-bold uppercase tracking-wider">{t.title}</p>
                    <p className="text-slate-500 text-[9px] flex items-center gap-1">
                      <Globe size={8} /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Scrolling Brand Bar */}
        <div className="mt-20 py-12 border-t border-slate-800/50 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap opacity-20 gap-20">
            {["EMERGI MENTORS", "Al Hanna Clinic", "HOT SEATS", "VITALIS UK", "SAFE HEAVEN", "TEAMPLAY", "TGFC UK", "DIALOG AI", "Hartman uk", "Kanova", "Fan District", "Site Swift"].map((brand, bIdx) => (
              <span key={bIdx} className="text-2xl font-black tracking-tighter text-slate-400">
                {brand}
              </span>
            ))}
            {["EMERGI MENTORS", "Al Hanna Clinic", "HOT SEATS", "VITALIS UK", "SAFE HEAVEN", "TEAMPLAY", "TGFC UK", "DIALOG AI", "Hartman uk", "Kanova", "Fan District", "Site Swift"].map((brand, bIdx) => (
              <span key={bIdx+10} className="text-2xl font-black tracking-tighter text-slate-400">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...sectionEntrance} className="section-space relative">
        <div className="container max-w-7xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-blue-500/15 blur-[120px] pointer-events-none -z-10" />
          <div className="gradient-border">
            <div className="bg-[#080B10]/95 backdrop-blur-xl p-12 md:p-20 rounded-[16px] text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient">
                Ready to build something great?
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-primary shimmer-btn px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-white shadow-xl shadow-blue-500/20">
                  Start a Project
                </Link>
                <Link href="/projects" className="btn-secondary px-10 py-4 border border-slate-700 bg-slate-800/20 rounded-xl text-slate-300 font-bold hover:bg-slate-700/40 hover:text-white transition-all">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
