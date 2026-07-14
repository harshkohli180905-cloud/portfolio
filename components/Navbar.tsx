"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10">

        <nav
          className="
          flex
          h-16
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-black/40
          px-5
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          sm:h-20
          sm:px-6
          "
        >


          {/* Logo */}
          <Link href="/" className="group">

            <div className="flex flex-col">

              <span className="text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-red-500 sm:text-lg">
                Harsh Kohli
              </span>


              <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
                Graphic Designer
              </span>


            </div>

          </Link>





          {/* Contact Button */}
          <Link
            href="#contact"
            className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-600
            px-4
            py-2.5
            text-xs
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-red-500
            hover:shadow-[0_0_35px_rgba(220,38,38,0.45)]
            sm:px-6
            sm:py-3
            sm:text-sm
            "
          >

            Contact


            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>


          </Link>


        </nav>

      </div>

    </motion.header>
  );
}
