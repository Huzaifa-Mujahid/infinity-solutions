import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import Image from "next/image"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: "Infinity Solutions — Premium Software House",
  description:
    "Transforming ideas into infinite possibilities. Full stack development company dedicated to creating powerful, scalable, and future-ready digital solutions.",
  keywords:
    "full stack development, web development, software agency, nextjs, react, laravel",
  authors: [{ name: "Infinity Solutions" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/infinity.svg" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-[#080B10] text-[#F1F5F9] antialiased`}>
        {/* Layered Background System */}
        <div className="fixed inset-0 dot-grid pointer-events-none z-0" />
        <div className="fixed inset-0 top-spotlight pointer-events-none z-0" />
        
        {/* Animated Blobs */}
        <div 
          className="bg-blob bg-blue-500 w-[600px] h-[600px] top-[-100px] left-[-100px] animate-blob-drift"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />
        <div 
          className="bg-blob bg-blue-800 w-[500px] h-[500px] bottom-[-100px] right-[-100px] animate-blob-drift animation-delay-[-10s]"
          style={{ 
            background: 'radial-gradient(circle, rgba(30,64,175,0.10) 0%, transparent 70%)',
            animationDirection: 'reverse'
          }}
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollProgress />
          <Navigation />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />

          {/* WhatsApp Floating Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="https://wa.me/923088075521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-lg shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Chat with us on WhatsApp"
            >
              <Image
                src="/images/whatsapp-icon.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
