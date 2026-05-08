"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
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
  {
    id: 4,
    name: "Mountain West Anesthesia",
    description: "Healthcare website for Utah's largest anesthesiology group with 180+ certified providers",
    tags: ["Next.js", "Laravel", "Healthcare", "MySQL", "AWS"],
    image: "/images/projects/mountainwest-featured-600.png",
    category: "Healthcare",
    country: "🇺🇸 USA",
    liveLink: "https://mountainwestanesthesia.com/",
  },
  {
    id: 5,
    name: "OnlyOneOutlier",
    description: "Career coaching platform for data science professionals with structured roadmaps and mentorship",
    tags: ["Next.js", "Laravel", "Coaching", "Data Science"],
    image: "/images/projects/onlyoneoutlier-featured-600.png",
    category: "Coaching Platform",
    country: "🇺🇸 USA",
    liveLink: "https://onlyoneoutlier.com/",
  },
  {
    id: 6,
    name: "Dialog AI Intelligens",
    description: "Complete chatbot platform with admin dashboard for managing flows and user conversations",
    tags: ["Next.js", "Node.js", "AI", "Dashboard"],
    image: "/images/projects/dialogai-featured-600.png",
    category: "AI Platform",
    country: "🇩🇰 Denmark",
    liveLink: null,
  },
  {
    id: 7,
    name: "TeamPlay",
    description: "Browser-based team management platform with task tracking, time management, and reporting",
    tags: ["Laravel", "Team Management", "Productivity"],
    image: "/images/projects/teamplay-featured-600.png",
    category: "Team Management",
    country: "🇮🇩 Indonesia",
    liveLink: "https://teamplay.work/",
  },
  {
    id: 8,
    name: "TGFC Hartman Garden Furniture",
    description: "UK-based specialist retailer with extensive product catalog and e-commerce functionality",
    tags: ["React.js", "Laravel", "E-commerce", "UK"],
    image: "/images/projects/tgfc-featured-600.png",
    category: "E-commerce",
    country: "🇬🇧 UK",
    liveLink: "https://tgfc.co.uk/",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
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

export default function ProjectsPage() {
  return (
    <div className="relative pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">OUR WORK</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 text-gradient">
            Portfolio
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            Explore our portfolio of innovative digital solutions delivered across the globe. From startups to enterprises, we build products that scale.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <div className="premium-project-card group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/45 to-transparent opacity-90" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950/95 border border-blue-400/45 text-[10px] text-blue-100 font-semibold uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(15,23,42,0.45)]">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400/90 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-700/70 text-[10px] text-slate-300 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                      <Globe className="h-3 w-3" /> {project.country}
                    </span>
                    <div className="flex gap-2">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-300 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <Link 
                        href={`/projects/${project.id}`}
                        className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-300 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
