"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0b11] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-50%] flex flex-wrap transform rotate-[-12deg] scale-110">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="text-[#1a1b21] text-8xl font-bold whitespace-nowrap select-none"
              style={{ animation: `slide ${30}s linear infinite` }}
            >
              D.JS D.JS D.JS D.JS D.JS D.JS&nbsp;
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <Link
            href="/"
            className="text-[#00ff66] text-4xl font-bold inline-block hover:scale-110 transition-transform duration-200"
          >
            D.JS
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-6xl md:text-7xl font-bold mb-6"
          >
            Cool stuff coming soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-xl mb-8"
          >
            This page is under construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/" className="text-[#00ff66] hover:text-white transition-colors duration-200 text-lg">
              Check out my current site for now →
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 text-center text-[#00ff66]"
        >
          © 2025 D.JS
        </motion.footer>
      </div>
    </div>
  )
}
