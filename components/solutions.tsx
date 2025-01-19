"use client"

import { motion } from 'framer-motion'
import { Microscope, WifiIcon, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const solutions = [
  {
    title: "AI Diagnostic Tool",
    description: "Uses deep learning to detect health conditions from medical data and images.",
    features: ["Rapid Analysis", "High Accuracy", "Early Detection"],
    icon: Microscope
  },
  {
    title: "Remote Patient Monitoring",
    description: "Tracks real-time health metrics like heart rate and blood pressure.",
    features: ["24/7 Monitoring", "Instant Alerts", "Trend Analysis"],
    icon: WifiIcon
  },
  {
    title: "Mental Health AI Chatbot",
    description: "Provides mental health advice and support, simulating natural conversations.",
    features: ["Always Available", "Personalized Support", "Crisis Detection"],
    icon: MessageSquare
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 glow-text"
        >
          Our Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}