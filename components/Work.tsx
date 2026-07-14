"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const works = [
  {
    title: "FORGOTTEN CHAPTER",
    category: "Poster Design",
    image: "/posters/FORGOTTEN CHAPTER.png",
  },
  {
    title: "GUESS THE GUEST",
    category: "Creative Poster",
    image: "/posters/GUESS THE GUEST.png",
  },
  {
    title: "RESONATE NIGHT",
    category: "Poster Design",
    image: "/posters/RESONATE NIGHT.png",
  },
  {
    title: "ROCKSTAR",
    category: "Music Poster",
    image: "/posters/ROCKSTAR.png",
  },
  {
    title: "SCARFACE",
    category: "Movie Poster",
    image: "/posters/SCARFACE.png",
  },
  {
    title: "SINFALL",
    category: "Creative Visual",
    image: "/posters/SINFALL.png",
  },
  {
    title: "SUFIYANA RANG",
    category: "Art Poster",
    image: "/posters/SUFIYANA RANG.png",
  },
  {
    title: "TECHNO NIGHT",
    category: "Digital Poster",
    image: "/posters/TECHNO NIGHT.png",
  },
  {
    title: "VIRASAT",
    category: "Cultural Poster",
    image: "/posters/VIRASAT.png",
  },
];

export default function Work() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextPoster = () => {
    if (selected !== null) {
      setSelected((selected + 1) % works.length);
    }
  };

  const prevPoster = () => {
    if (selected !== null) {
      setSelected((selected - 1 + works.length) % works.length);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextPoster();
      if (e.key === "ArrowLeft") prevPoster();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);


  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 sm:py-28 lg:px-10 lg:py-32"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />
      </div>


      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-20"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-red-600">
            Portfolio
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            Selected
            <span className="text-red-600"> Work</span>
          </h2>
        </motion.div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

          {works.map((work, index) => (

            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -18,
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
              }}
              onClick={() => setSelected(index)}
              className="group cursor-pointer [perspective:1000px]"
            >

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 transition-all duration-500 group-hover:border-red-600/50 group-hover:shadow-[0_0_70px_rgba(220,38,38,0.25)]">

                <div className="relative aspect-[3/4] overflow-hidden">

                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />


                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-lg opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    ↗
                  </div>

                </div>


                <div className="p-5 sm:p-7">

                  <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                    {work.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {work.title}
                  </h3>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>


      {/* Fullscreen Viewer */}
      <AnimatePresence>

        {selected !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 backdrop-blur-xl"
          >

            <button
              onClick={() => setSelected(null)}
              className="absolute right-8 top-8 text-4xl text-white"
            >
              ×
            </button>


            <button
              onClick={prevPoster}
              className="absolute left-8 text-5xl text-white"
            >
              ‹
            </button>


            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative h-[85vh] w-full max-w-4xl"
            >

              <Image
                src={works[selected].image}
                alt={works[selected].title}
                fill
                className="object-contain"
              />

            </motion.div>


            <button
              onClick={nextPoster}
              className="absolute right-8 text-5xl text-white"
            >
              ›
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
