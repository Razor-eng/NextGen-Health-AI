"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function DNAHelix() {
  return (
    <mesh>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial
        color="#8A2BE2"
        emissive="#00BFFF"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 50] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <DNAHelix />
          <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-4 glow-text"
        >
          NEXTGEN HEALTH AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8 text-gray-300"
        >
          Revolutionizing Healthcare with Artificial Intelligence
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
        >
          AI-driven solutions for smarter, faster, and personalized healthcare experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="glow-button bg-primary hover:bg-primary/80"
          >
            Explore Solutions
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary/20"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}