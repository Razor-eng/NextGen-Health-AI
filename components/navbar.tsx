"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Brain, Youtube, Instagram, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold glow-text">NEXTGEN HEALTH AI</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Solutions
              </Link>
              <Link href="#technology" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Technology
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://youtube.com/@BeingSigma" target="_blank">
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
            <Link href="https://instagram.com/being.sigma" target="_blank">
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
            <Link href="tel:9951646326">
              <Phone className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="#solutions" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Solutions
          </Link>
          <Link href="#technology" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Technology
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}