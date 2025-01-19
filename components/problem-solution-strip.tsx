"use client"

import { motion } from 'framer-motion'

export default function ProblemSolutionStrip() {
  const problems = [
    "Facing delayed diagnoses? NEXTGEN HEALTH AI delivers rapid, AI-powered insights.",
    "Need round-the-clock patient monitoring? Try our remote AI health tracking system.",
    "Mental health support needed? Our AI chatbot provides 24/7 assistance.",
    "Looking for personalized treatment plans? Our AI analyzes your unique health data."
  ]

  return (
    <div className="bg-primary/10 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex space-x-8"
        >
          {[...problems, ...problems].map((problem, index) => (
            <span
              key={index}
              className="text-primary font-medium px-4"
            >
              {problem}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}