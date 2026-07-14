"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aditi Rao",
    role: "Client",
    review:
      "Harsh has an unusually calm eye. Every deliverable felt considered — not just designed, but decided.",
  },
  {
    name: "Rohan Mehta",
    role: "Client",
    review:
      "He turned around our entire visual identity in a week. It still holds up two years later.",
  },
  {
    name: "Sana Iqbal",
    role: "Client",
    review:
      "Fast, thoughtful, and never overdesigns. He knows exactly when to stop — that's rare.",
  },
  {
    name: "Kabir Sethi",
    role: "Client",
    review:
      "Working with Harsh feels like hiring an art director, not a designer. Genuinely a level above.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-28 lg:py-32"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1),transparent_60%)]" />


      <div className="relative z-10">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 px-5 text-center sm:mb-20 sm:px-6"
        >

          <p className="mb-4 text-xs uppercase tracking-[4px] text-red-600 sm:tracking-[6px]">
            Testimonials
          </p>


          <h2 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Client
            <span className="text-red-600"> Stories</span>
          </h2>

        </motion.div>



        {/* Moving Cards */}
        <div className="relative overflow-hidden">


          <motion.div
            className="flex w-max gap-5 sm:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...testimonials, ...testimonials].map((item, index) => (

              <div
                key={index}
                className="
                w-[280px]
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-red-600/40
                hover:shadow-[0_0_40px_rgba(229,9,20,0.18)]
                sm:w-[380px]
                sm:p-8
                "
              >

                <div className="mb-5 text-yellow-400 sm:mb-6">
                  ⭐⭐⭐⭐⭐
                </div>


                <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  "{item.review}"
                </p>


                <div className="mt-6 sm:mt-8">

                  <h3 className="text-lg font-bold">
                    {item.name}
                  </h3>


                  <p className="text-sm text-zinc-500">
                    {item.role}
                  </p>

                </div>


              </div>

            ))}

          </motion.div>


        </div>


      </div>


    </section>
  );
}
