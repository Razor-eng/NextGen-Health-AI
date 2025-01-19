"use client";

import { motion } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stethoscope } from "lucide-react"; // Assuming you're using Lucide icons
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function About() {
  const objModel = useLoader(OBJLoader, "/model.obj");

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

            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="text-primary opacity-90"
                whileHover={{
                  scale: 1.1, // Slight scale up on hover
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)", // Glowing effect
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Canvas camera={{ position: [0, 0, 80] }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} />
                  <spotLight
                    position={[-5, 5, 10]}
                    angle={0.2}
                    penumbra={0.5}
                    intensity={0.8}
                  />
                  <primitive object={objModel} scale={1.5} />
                  <OrbitControls autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
