"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black relative overflow-hidden text-white flex items-center pt-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-20">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-red-600 uppercase tracking-[6px] mb-6"
          >
            Graphic Designer • Brand Identity • Visual Storyteller
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight"
          >
            <span className="block text-white">HARSH</span>
            <span className="block text-red-600">KOHLI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-zinc-400 mt-8 max-w-xl text-lg leading-8"
          >
            I create premium branding, social media creatives and visual
            experiences that people remember.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex gap-4 mt-10"
          >
            <button className="bg-red-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.45)]">
              View Work
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-red-600/20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              scale: { duration: 0.8, delay: 0.6 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-[450px] h-[550px] rounded-[40px] border border-red-600/20 bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_80px_rgba(229,9,20,0.25)]"
          />
        </div>
      </div>
    </motion.section>
  );
}