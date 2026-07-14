"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-block rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            About Me
          </span>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Designing brands
            <br />
            that people
            <span className="text-red-600"> remember.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I&apos;m <span className="font-semibold text-white">Harsh Kohli</span>,
            a Graphic Designer who turns ideas into bold visual experiences.
            From striking brand identities to social media creatives and
            experimental designs, I craft visuals that capture attention and
            build strong connections. Every project is a mix of creativity,
            strategy, and a passion for creating work that leaves a mark.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Every project is built with intention, sharp attention to detail,
            and a bold creative approach that turns simple ideas into powerful
            visual experiences.
          </p>
        </motion.div>


        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:gap-5"
        >

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-8">
            <h3 className="text-5xl font-black text-red-600">50+</h3>
            <p className="mt-3 text-zinc-400">
              Successful design projects completed.
            </p>
          </div>


          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-8">
            <h3 className="text-5xl font-black text-red-600">20+</h3>
            <p className="mt-3 text-zinc-400">
              Happy brands and clients served.
            </p>
          </div>


          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-8">
            <h3 className="text-5xl font-black text-red-600">2+</h3>
            <p className="mt-3 text-zinc-400">
              Years of creative experience.
            </p>
          </div>


          <div className="rounded-3xl bg-gradient-to-br from-red-600 to-red-700 p-5 sm:p-8">
            <h3 className="text-3xl font-bold">
              Think Bold
            </h3>

            <p className="mt-3 text-white/80">
              Expressive visuals, fearless branding, and designs that leave a
              lasting impression.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
