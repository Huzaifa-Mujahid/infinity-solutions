"use client"

import { motion } from "framer-motion"
import { Calendar, Target, Award, Infinity, Globe, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import HeroBackground from "@/components/hero-background"

const teamMembers = [
  {
    name: "Adnan Hussain",
    title: "Founder & Business Manager",
    image: "/images/adnan-hussain.jpeg",
    bio: "Adnan founded Infinity Solutions with a vision to transform ideas into infinite possibilities through innovative technology. With extensive experience in business development and client relations, he leads the company's strategic direction and growth while ensuring reliable global client support.",
    skills: ["Business Development", "Strategic Planning", "Client Relations", "Project Management"],
  },
  {
    name: "Hassan Amir",
    title: "Co-Founder & CTO",
    image: "/images/hassan-amir.png",
    bio: "Hassan serves as our Chief Technology Officer, overseeing technical architecture and innovation. His expertise in modern web technologies and scalable systems ensures our solutions meet the highest technical standards.",
    skills: ["Technical Leadership", "System Architecture", "Full Stack Development", "Team Management"],
  },
  {
    name: "Haseeb Sohail",
    title: "Lead Full Stack Developer",
    image: "/images/haseeb-sohail.png",
    bio: "Haseeb Sohail leads our development teams with expertise in project coordination and technical guidance. He ensures smooth project execution and maintains high code quality standards across all deliverables.",
    skills: ["Team Leadership", "Project Coordination", "Code Review", "Technical Mentoring"],
  },
  {
    name: "Qasim Sajjad Zaidi",
    title: "Project Management & QA Tester",
    image: "/images/qasim-sajjad-zaidi.jpg",
    bio: "Qasim orchestrates project delivery and ensures quality assurance across all our solutions. His meticulous approach to testing and project management guarantees reliable, bug-free deliverables.",
    skills: ["Project Management", "Quality Assurance", "Testing Strategies", "Process Optimization"],
  },
  {
    name: "Hammad Ijaz",
    title: "Senior Backend Developer",
    image: "/images/hammad-ijaz.jpg",
    bio: "Hammad is our backend specialist who builds robust, scalable server-side solutions. His expertise in database design, API development, and system architecture ensures our applications perform reliably.",
    skills: ["Laravel", "Node.js", "Database Design", "API Development"],
  },
  {
    name: "Anas Mehmood",
    title: "Senior Frontend Developer",
    image: "/images/anas-mehmood.jpg",
    bio: "Anas specializes in creating stunning user interfaces and exceptional user experiences. His expertise in modern frontend technologies ensures our applications are both beautiful and highly functional.",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    name: "M. Zain Ul Abideen",
    title: "Associate Frontend Developer",
    image: "/images/m-zain-ul-abideen.png",
    bio: "M. Zain Ul Abideen contributes to our frontend development with focus on modern JavaScript frameworks and responsive design. He brings fresh perspectives and enthusiasm to creating engaging user interfaces.",
    skills: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
  },
  {
    name: "Hassan Saqib",
    title: "Associate Frontend Developer",
    image: "/images/hassan-saqib.jpg",
    bio: "Hassan Saqib supports our frontend development team with expertise in modern web technologies. He focuses on creating interactive, user-friendly interfaces that enhance the overall user experience.",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5"],
  },
  {
    name: "Muhammad Khuzaima",
    title: "Mobile Developer",
    image: "/images/muhammad-khuzaima.jpg",
    bio: "Khuzaima develops engaging mobile applications for iOS and Android platforms. His expertise in cross-platform development ensures consistent user experiences across all mobile devices.",
    skills: ["Flutter", "React Native", "iOS Development", "Android Development"],
  },
]

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started on Upwork, building MVPs and custom solutions for startups.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Expanded to a full distributed team of developers and designers.",
  },
  {
    year: "2022",
    title: "International Reach",
    description: "Worked with clients across the US, UK, UAE, Canada and Europe.",
  },
  {
    year: "2024",
    title: "Future-Ready",
    description: "Embracing AI and real-time platforms for modern solutions.",
  },
]

const sectionEntrance = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
}

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <HeroBackground />
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase mb-4 block">OUR STORY</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 text-gradient">
            About Infinity Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            Technology has no limits — and neither should your ideas. We are a tight-knit team of experts built for speed, quality, and collaboration.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div {...sectionEntrance} className="glass-card p-10 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/25">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To help startups and businesses launch reliable, high-performing web and mobile products through clean code, fast execution, clear communication, and always-available assistance. We deliver solutions that are simple, scalable, and built to last.
            </p>
          </motion.div>
          <motion.div {...sectionEntrance} transition={{ ...sectionEntrance.transition, delay: 0.1 }} className="glass-card p-10 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/25">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-slate-400 leading-relaxed">
              Speed, technical depth, focus, and continuous improvement drive everything we do. We believe in consistent delivery, clear communication, instant support, and building long-term partnerships with our clients.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.section {...sectionEntrance} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient">Our Global Journey</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 w-full">
                    <div className={`glass-card p-8 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}`}>
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-blue-400 font-bold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section {...sectionEntrance}>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">The Experts</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Meet the talented professionals who bring your digital visions to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-8 flex flex-col group"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-slate-800">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-xs font-bold tracking-wider uppercase">{member.title}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/10 text-[10px] text-blue-300 font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
