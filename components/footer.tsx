"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Youtube, Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-primary/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">About NextGen Health AI</h3>
            <p className="text-gray-400">
              Revolutionizing healthcare through artificial intelligence and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-gray-400 hover:text-primary">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-gray-400 hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://youtube.com/@BeingSigma"
                target="_blank"
                className="text-gray-400 hover:text-primary"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com/being.sigma"
                target="_blank"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="tel:9951646326"
                className="text-gray-400 hover:text-primary"
              >
                <Phone className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} NextGen Health AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}