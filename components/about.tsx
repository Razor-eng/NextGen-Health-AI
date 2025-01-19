"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission and Vision Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white glow-text">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              To revolutionize global healthcare with AI technologies that
              provide smarter, proactive, and precise medical solutions.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white glow-text">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300">
              Empowering lives through accessible, intelligent, and
              transformative healthcare technologies.
            </p>
          </motion.div>

          {/* 3D Model Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] relative"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 blur-3xl opacity-50"></div>
            </div>

            {/* 3D Canvas */}
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} />
              <spotLight
                position={[-5, 5, 10]}
                angle={0.2}
                penumbra={0.5}
                intensity={0.8}
              />
              <mesh>
                <icosahedronGeometry args={[1]} />
                <meshStandardMaterial
                  color="#8A2BE2"
                  emissive="#00BFFF"
                  emissiveIntensity={0.8}
                  wireframe
                />
              </mesh>
              <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
