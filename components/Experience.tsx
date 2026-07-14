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
      className="
      relative
      bg-black
      text-white
      py-32
      px-6
      overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08),transparent_60%)]
        "
      />


      <div
        className="
        relative
        z-10
        max-w-6xl
        mx-auto
        "
      >


        {/* HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-20"
        >

          <p
            className="
            text-red-600
            uppercase
            tracking-[6px]
            text-sm
            mb-4
            "
          >
            My Journey
          </p>


          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            "
          >
            Creative
            <span className="text-red-600">
              {" "}Journey
            </span>
          </h2>


          <p
            className="
            mt-6
            text-zinc-400
            max-w-2xl
            text-lg
            leading-8
            "
          >
            A timeline of my creative experiences, leadership roles,
            and projects where design meets strategy and technology.
          </p>

        </motion.div>





        {/* TIMELINE */}

        <div className="border-t border-white/10">


          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="
              grid
              md:grid-cols-[220px_1fr]
              gap-8
              py-12
              border-b
              border-white/10
              "
            >


              {/* YEAR */}

              <div>

                <p
                  className="
                  text-red-600
                  font-bold
                  tracking-widest
                  text-sm
                  "
                >
                  {item.year}
                </p>

              </div>





              {/* CONTENT */}

              <div>


                <h3
                  className="
                  text-2xl
                  md:text-4xl
                  font-black
                  uppercase
                  "
                >
                  {item.role}
                </h3>


                <p
                  className="
                  mt-2
                  text-zinc-400
                  font-medium
                  "
                >
                  {item.company}
                </p>



                <p
                  className="
                  mt-5
                  text-zinc-500
                  max-w-3xl
                  leading-8
                  "
                >
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
