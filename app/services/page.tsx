"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Shield,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Search,
  Server,
  GitBranch,
  Monitor,
  Layers,
  Palette,
  Cpu,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import HeroBackground from "@/components/hero-background"

const fullStackServices = [
  {
    id: "saas-mvp-development",
    title: "SaaS & MVP Development",
    icon: Rocket,
    description: "Launch scalable SaaS products and validate ideas faster with modern technologies and rapid development workflows",
    longDescription:
      "We build secure, high performance MVPs and SaaS platforms focused on user growth, automation, and long term scalability. From multi-tenant architectures to seamless payment integrations.",
    features: [
      "Multi-Tenant SaaS Architecture",
      "MVP Development & Rapid Prototyping",
      "Subscription & Payment Integration",
      "User Authentication & Role Management",
      "Admin Dashboards & Analytics",
      "API Development & Third Party Integrations",
      "Scalable Cloud Deployment & DevOps",
      "AI Features & Workflow Automation",
    ],
    technologies: [
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🗄️" },
      { name: "Stripe", icon: "💳" },
    ],
    number: "01",
  },
  {
    id: "ai-development-services",
    title: "AI Development Services",
    icon: Cpu,
    description: "Build intelligent AI powered applications and automation systems that improve productivity",
    longDescription:
      "We develop scalable AI solutions tailored for SaaS platforms, startups, and enterprise workflows. From custom LLM integrations to AI-powered workflow automation.",
    features: [
      "Custom AI Web Applications",
      "AI Chatbots & Virtual Assistants",
      "OpenAI & LLM Integrations",
      "AI Powered Workflow Automation",
      "Document Processing & AI Search",
      "Recommendation & Personalization Systems",
      "AI APIs & Backend Infrastructure",
      "Real Time AI Features & Analytics",
    ],
    technologies: [
      { name: "OpenAI", icon: "🤖" },
      { name: "Python", icon: "🐍" },
      { name: "LangChain", icon: "🧠" },
      { name: "AWS", icon: "☁️" },
    ],
    number: "02",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    icon: Monitor,
    description: "Modern, responsive user interfaces built with cutting-edge frontend technologies",
    longDescription:
      "Create stunning, interactive user experiences with modern frontend frameworks. We build responsive, accessible, and performant web applications that engage users and drive conversions across all devices and browsers.",
    features: [
      "React.js & Next.js Applications",
      "Vue.js & Nuxt.js Development",
      "Angular & TypeScript Solutions",
      "Progressive Web Apps (PWAs)",
      "Responsive Design & Mobile-First approach",
      "Component Libraries & Design Systems",
      "Performance Optimization & SEO",
    ],
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
    number: "03",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    icon: Server,
    description: "Robust server-side solutions with scalable architecture, secure APIs, and continuous monitoring",
    longDescription:
      "Build powerful backend systems that handle complex business logic, data processing, and integrations. Our backend solutions ensure your applications are secure, scalable, and maintainable with clean architecture patterns.",
    features: [
      "RESTful & GraphQL API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Real-time Data Processing",
      "Security Implementation & Monitoring",
    ],
    technologies: [
      { name: "Laravel", icon: "🔶" },
      { name: "Node.js", icon: "🟢" },
      { name: "Supabase", icon: "⚡" },
      { name: "Python", icon: "🐍" },
    ],
    number: "04",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    icon: Layers,
    description: "End-to-end web application development with modern tech stacks and best practices",
    longDescription:
      "Complete web application development from frontend to backend, database to deployment. We create cohesive, scalable applications using the latest full stack technologies and best practices.",
    features: [
      "MERN Stack Development",
      "JAMstack Solutions",
      "Server-Side Rendering (SSR)",
      "API-First Development",
      "Real-time Applications",
      "E-commerce Platform Development",
    ],
    technologies: [
      { name: "MERN Stack", icon: "🚀" },
      { name: "Laravel + Vue", icon: "🎨" },
      { name: "Next.js + Supabase", icon: "⚡" },
    ],
    number: "05",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform and native mobile applications with continuous support",
    longDescription:
      "Develop engaging mobile applications that provide seamless user experiences across iOS and Android platforms. From native development to cross-platform solutions.",
    features: [
      "React Native Development",
      "Flutter Cross-Platform Apps",
      "iOS Native Development (Swift)",
      "Android Native Development (Kotlin)",
      "Progressive Web Apps (PWAs)",
    ],
    technologies: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
    ],
    number: "06",
  },
  {
    id: "ui-ux-design-solutions",
    title: "UI/UX Design Solutions",
    icon: Palette,
    description: "Craft intuitive, engaging, and visually appealing user experiences.",
    longDescription:
      "Craft intuitive, engaging, and visually appealing user experiences that drive customer satisfaction and loyalty. Our design process focuses on understanding user needs.",
    features: [
      "User Research & Wireframing",
      "Information Architecture",
      "Responsive Web & Mobile Design",
      "Interaction Design & Animation",
      "Design Systems & Style Guides",
    ],
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe XD", icon: "🖌" },
      { name: "Sketch", icon: "📐" },
    ],
    number: "07",
  },
  {
    id: "devops-deployment",
    title: "DevOps & Deployment",
    icon: GitBranch,
    description: "Automated deployment pipelines and infrastructure management",
    longDescription:
      "Streamline your development workflow with modern DevOps practices. We implement CI/CD pipelines, containerization, and cloud infrastructure.",
    features: [
      "CI/CD Pipeline Setup",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "Cloud Infrastructure (AWS, Azure)",
      "Monitoring & Logging Solutions",
    ],
    technologies: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "GitHub Actions", icon: "🔄" },
    ],
    number: "08",
  },
]

const sectionEntrance = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
}

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden flex flex-col items-center text-center">
        <HeroBackground />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">WHAT WE DO</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 md:mb-8 text-gradient">
              Web, Mobile & AI Development Services
            </h1>
            <p className="max-w-3xl mx-auto text-slate-400 text-base md:text-xl leading-relaxed px-2">
              Comprehensive development services focused on building innovative, user friendly, and scalable applications for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-24">

        <div className="space-y-12">
          {fullStackServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              id={service.id}
              className="glass-card overflow-hidden group relative"
            >
              <div className="absolute top-4 right-12 text-white/[0.03] text-[120px] font-black leading-none pointer-events-none group-hover:text-blue-500/[0.03] transition-colors">
                {service.number}
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-4xl">
                      {service.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                      <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                          <div className="w-1 h-4 bg-blue-500 rounded-full" />
                          Key Features
                        </h3>
                        <ul className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-slate-400 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 0.05}s` }}>
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                          <div className="w-1 h-4 bg-blue-500 rounded-full" />
                          Technologies
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {service.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
                              <span className="text-xl">{tech.icon}</span>
                              <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 group/btn text-sm">
                      Get Started
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.section {...sectionEntrance} className="py-24 md:py-32 relative">
        <div className="section-divider absolute top-0" />
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">Expert Tech Stack</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We use modern, industry-standard tools to build high-performance products.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Laravel", icon: "🔶" },
              { name: "Node.js", icon: "🟢" },
              { name: "TypeScript", icon: "📘" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "Next.js", icon: "▲" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Figma", icon: "🎨" },
              { name: "Python", icon: "🐍" },
              { name: "Redis", icon: "🔴" },
              { name: "GraphQL", icon: "📜" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-blue-500/40 transition-all group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{tech.icon}</span>
                <span className="text-sm font-bold text-slate-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
