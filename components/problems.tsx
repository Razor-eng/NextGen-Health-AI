"use client"

import { motion } from 'framer-motion'
import { AlertTriangle, Activity, Brain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const problems = [
  {
    title: "Delayed and Inaccurate Diagnoses",
    description: "Misdiagnosis and late detection of diseases lead to severe outcomes.",
    solution: "AI Diagnostic Tool: Analyzes patient data faster and more accurately than traditional methods.",
    icon: AlertTriangle
  },
  {
    title: "Lack of Continuous Patient Monitoring",
    description: "Inability to track critical health changes outside clinical visits.",
    solution: "Remote Patient Monitoring with IoT Devices: AI-powered wearables track vital signs 24/7.",
    icon: Activity
  },
  {
    title: "Mental Health Crisis",
    description: "Many suffer silently without access to support.",
    solution: "AI Chatbots for Mental Health Support: Offer round-the-clock assistance with personalized responses.",
    icon: Brain
  }
]

export default function Problems() {
  return (
    <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 glow-text"
        >
          Problems We Solve
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <problem.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{problem.description}</p>
                  <p className="text-primary">{problem.solution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}