"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, Network, Cpu } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const technologies = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms that learn and improve from experience",
    icon: Brain
  },
  {
    title: "Big Data Analytics",
    description: "Processing vast amounts of healthcare data for insights",
    icon: Database
  },
  {
    title: "IoT Integration",
    description: "Connected devices for real-time health monitoring",
    icon: Network
  },
  {
    title: "Neural Networks",
    description: "Deep learning models for complex pattern recognition",
    icon: Cpu
  }
]

function InteractiveGlobe() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <group>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[2, 64, 32]}>
        <meshPhongMaterial
          color="#8A2BE2"
          emissive="#00BFFF"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Outer wireframe */}
      <Sphere args={[2.1, 32, 16]}>
        <meshPhongMaterial
          color="#00BFFF"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Meridians and parallels */}
      {[...Array(8)].map((_, i) => (
        <group key={i} rotation={[0, (Math.PI * i) / 4, 0]}>
          <mesh>
            <torusGeometry args={[2, 0.005, 16, 100]} />
            <meshBasicMaterial color="#00BFFF" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
      {[...Array(5)].map((_, i) => (
        <group key={i} rotation={[(Math.PI * i) / 4, 0, 0]}>
          <mesh>
            <torusGeometry args={[2, 0.005, 16, 100]} />
            <meshBasicMaterial color="#00BFFF" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}

      {/* Data points */}
      {[...Array(50)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const x = 2 * Math.sin(phi) * Math.cos(theta)
        const y = 2 * Math.sin(phi) * Math.sin(theta)
        const z = 2 * Math.cos(phi)

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#00BFFF" />
          </mesh>
        )
      })}
    </group>
  )
}

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          style={{ opacity, scale }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 glow-text"
        >
          Our Technology Stack
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <tech.icon className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                      <p className="text-gray-400">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] relative order-first lg:order-last"
          >
            <div className="absolute inset-0 globe-container">
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <InteractiveGlobe />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Canvas>
              <div className="globe-overlay" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="glow-button bg-primary hover:bg-primary/80"
          >
            Learn More About Our Technology
          </Button>
        </motion.div>
      </div>
    </section>
  )
}