"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Infinity } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(8, 11, 16, 0)", "rgba(8, 11, 16, 0.85)"]
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  )
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(51, 65, 85, 0.8)"]
  )

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-6" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="flex items-center">
                <Infinity className="h-8 w-8 text-blue-500 mr-3 transition-transform group-hover:scale-110" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold font-heading bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    Infinity Solutions
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
                    Premium Agency
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-slate-100 ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                      />
                    )}
                  </Link>
                )
              })}
              <div className="pl-4">
                <Link href="/contact">
                  <Button className="border border-blue-500/40 bg-transparent text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 rounded-lg px-6 py-2 text-sm transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 text-slate-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card mb-4 p-4"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href ? "bg-blue-500/10 text-blue-400" : "text-slate-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-brand-600 hover:bg-brand-500 text-white py-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
