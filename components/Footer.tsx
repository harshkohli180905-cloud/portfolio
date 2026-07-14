"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(229,9,20,0.08),transparent_65%)]" />


      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-between gap-10 lg:flex-row"
        >

          {/* Brand */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-black tracking-tight">
              HARSH{" "}
              <span className="text-red-600">
                KOHLI
              </span>
            </h2>

            <p className="mt-3 max-w-md leading-7 text-zinc-500">
              Graphic Designer focused on creating premium branding,
              posters, social media creatives and modern visual experiences.
            </p>

          </div>



          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[2px]">

            <a
              href="#"
              className="text-zinc-400 transition hover:text-red-500"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-zinc-400 transition hover:text-red-500"
            >
              About
            </a>

            <a
              href="#work"
              className="text-zinc-400 transition hover:text-red-500"
            >
              Work
            </a>

            <a
              href="#skills"
              className="text-zinc-400 transition hover:text-red-500"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-zinc-400 transition hover:text-red-500"
            >
              Contact
            </a>

          </div>




          {/* Availability */}

          <div className="text-center lg:text-right">

            <p className="text-zinc-400">
              Available for Freelance
            </p>


            <div className="mt-2 flex items-center justify-center gap-2 lg:justify-end">

              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

              <span className="text-sm text-zinc-500">
                Open for Projects
              </span>

            </div>

          </div>


        </motion.div>




        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Harsh Kohli. All Rights Reserved.
          </p>


          <p className="text-sm text-zinc-600">
            Designed & Developed by{" "}
            <span className="font-medium text-red-500">
              Harsh Kohli
            </span>
          </p>

        </div>


      </div>

    </footer>
  );
}
