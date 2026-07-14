"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(229,9,20,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black tracking-tight">
              HARSH <span className="text-red-600">KOHLI</span>
            </h2>

            <p className="text-zinc-500 mt-3 max-w-md leading-7">
              Graphic Designer focused on building premium branding,
              social media creatives and modern visual experiences.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-[2px]">
            <a
              href="#"
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              Skills
            </a>

            <a
              href="#work"
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              Work
            </a>

            <a
              href="#contact"
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="text-center lg:text-right">
            <p className="text-zinc-400">
              Available for Freelance
            </p>

            <div className="flex items-center justify-center lg:justify-end gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm text-zinc-500">
                Open for Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Harsh Kohli. All Rights Reserved.
          </p>

          <p className="text-zinc-600 text-sm">
            Designed & Developed by{" "}
            <span className="text-red-500 font-medium">
              Harsh Kohli
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
