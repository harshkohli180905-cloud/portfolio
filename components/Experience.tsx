"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "JAN 2026 - PRESENT",
    role: "Graphic Designer",
    company: "Yash Mor Academy",
    description:
      "Designed 40+ social media creatives, promotional banners, and marketing visuals while maintaining a strong brand identity. Created engaging designs using modern typography, layouts, and visual storytelling to improve audience interaction.",
  },

  {
    year: "JUL 2026 - PRESENT",
    role: "General Advisor",
    company: "ENSO — The Entrepreneurship Society, Dyal Singh College",
    description:
      "Providing strategic guidance on branding, event planning, team coordination, and organizational development. Supporting creative decisions while mentoring members to improve digital and design workflows.",
  },

  {
    year: "SEP 2025 - JUL 2026",
    role: "Tech Head",
    company: "ENSO — The Entrepreneurship Society, Dyal Singh College",
    description:
      "Led the technical team and designed 30+ promotional posters, event creatives, and presentations. Managed 100+ digital assets, improving workflow efficiency and maintaining consistent visual branding.",
  },

  {
    year: "SEP 2024 - SEP 2025",
    role: "Tech Coordinator",
    company: "ENSO — The Entrepreneurship Society, Dyal Singh College",
    description:
      "Created posters, banners, and digital creatives for events and campaigns. Collaborated with teams on content creation and helped strengthen the society's online presence through effective visual communication.",
  },

  {
    year: "SEP 2025 - JUL 2026",
    role: "Social Media Coordinator",
    company: "Economics Association, Dyal Singh College",
    description:
      "Created 20+ social media graphics, event banners, and promotional content. Developed audience-focused visuals that improved engagement and enhanced the association's digital identity.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 sm:py-28 lg:px-10 lg:py-32"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08),transparent_60%)]" />


      <div className="relative z-10 mx-auto max-w-6xl">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >

          <p className="mb-4 text-xs uppercase tracking-[4px] text-red-600 sm:text-sm sm:tracking-[6px]">
            My Journey
          </p>


          <h2 className="text-4xl font-black uppercase sm:text-5xl md:text-7xl">
            Creative
            <span className="text-red-600"> Journey</span>
          </h2>


          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            A timeline of my creative experiences, leadership roles,
            and projects where design meets strategy and technology.
          </p>

        </motion.div>



        {/* Timeline */}
        <div className="border-t border-white/10">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="grid grid-cols-1 gap-5 border-b border-white/10 py-10 md:grid-cols-[220px_1fr] md:gap-8 md:py-12"
            >

              {/* Year */}
              <div>
                <p className="text-sm font-bold tracking-widest text-red-600">
                  {item.year}
                </p>
              </div>


              {/* Content */}
              <div>

                <h3 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                  {item.role}
                </h3>


                <p className="mt-2 text-sm font-medium text-zinc-400 sm:text-base">
                  {item.company}
                </p>


                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
                  {item.description}
                </p>


              </div>

            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}
