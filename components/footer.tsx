"use client"

import Link from "next/link"
import { Linkedin, Mail, Twitter, Github, ArrowRight } from "lucide-react"

const navigation = {
  services: [
    { name: "Frontend Development", href: "/services#frontend-development" },
    { name: "Backend Development", href: "/services#backend-development" },
    { name: "Full Stack Development", href: "/services#full-stack-development" },
    { name: "Mobile Development", href: "/services#mobile-development" },
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "DevOps Solutions", href: "/services#devops" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Email", href: "mailto:info@infinitysolutions.agency", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#060810] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  Infinity Solutions
                </span>
                <span className="text-xs text-slate-500 font-bold tracking-[0.2em] uppercase">
                  Premium Agency
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              Transforming ideas into infinite possibilities through innovative technology solutions. Your trusted partner in digital excellence.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6 uppercase text-xs tracking-widest">Our Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6 uppercase text-xs tracking-widest">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-6 uppercase text-xs tracking-widest">Newsletter</h3>
            <p className="text-slate-500 text-sm mb-6">Stay updated with our latest news and tech insights.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-300 focus:border-blue-500/50 outline-none transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Infinity Solutions Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-600">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
