"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-5 sm:px-6">


      {/* RED GLOW BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(220,0,0,.25),transparent_45%)]" />


      {/* GRAIN TEXTURE */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.08]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[length:4px_4px]
        "
      />



      {/* GRAFFITI CORNERS */}

      <div className="absolute left-0 top-0 text-red-600/40 text-[120px] font-black rotate-[-20deg]">
        ✦
      </div>


      <div className="absolute right-0 top-0 text-white/20 text-[150px] font-black rotate-12">
        〰
      </div>


      <div className="absolute left-0 bottom-0 text-white/20 text-[160px] font-black">
        //
      </div>


      <div className="absolute right-0 bottom-0 text-red-600/30 text-[130px] font-black">
        ✕
      </div>




      {/* TOP INFORMATION */}

      <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 w-full px-4 text-center text-[10px] sm:text-xs tracking-[3px] sm:tracking-[5px] text-white/60">
        INSPIRED BY STREET ART
        <br />
        VISUAL DESIGN EXPERIENCE
      </div>




      {/* SIDE TAGS */}

      <div className="absolute left-8 top-1/2 hidden lg:block rotate-[-90deg] text-xs tracking-[8px] text-white/40">
        POSTER • BRANDING • ART
      </div>


      <div className="absolute right-8 top-1/2 hidden lg:block rotate-90 text-xs tracking-[8px] text-white/40">
        CREATIVE STUDIO
      </div>





      {/* MAIN CONTENT */}

      <div className="relative z-10 text-center">


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 sm:mb-8 text-xs sm:text-sm tracking-[6px] sm:tracking-[12px] text-red-500"
        >
          GRAPHIC DESIGNER
        </motion.p>




        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-black uppercase leading-[0.75] tracking-[-6px] sm:tracking-[-12px]"
        >

          <span
            className="
            block
            text-[65px]
sm:text-[130px]
md:text-[190px]
            text-white
            "
          >
            HARSH
          </span>


          <span
            className="
            block
            text-[90px]
            sm:text-[130px]
            md:text-[190px]
            text-red-600
            "
          >
            KOHLI
          </span>


        </motion.h1>





        <div className="mt-8 inline-block border border-white/30 px-8 py-3 text-sm tracking-[6px]">
          BRAND • POSTER • VISUAL
        </div>




        <p className="mt-8 max-w-xl mx-auto text-zinc-400">
          Turning raw ideas into bold visuals, expressive identities, and designs that leave a lasting mark.
        </p>


      </div>





      {/* RANDOM STICKERS */}

      <div className="absolute left-5 sm:left-10 bottom-16 sm:bottom-24 rotate-[-8deg] bg-red-600 px-5 py-2 text-black font-black">
        DESIGN
      </div>


      <div className="absolute right-5 sm:right-12 top-32 sm:top-36 rotate-[10deg] border border-white px-5 py-2 font-bold">
        FREELANCER
      </div>





      {/* PAINT DRIPS */}

      <div className="absolute top-0 left-[20%] h-40 w-2 bg-red-600/50" />

      <div className="absolute top-0 right-[25%] h-28 w-2 bg-white/30" />


    </section>
  );
}