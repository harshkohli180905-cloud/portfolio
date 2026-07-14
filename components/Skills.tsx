"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Graphic Design",
    skills:
      "Adobe Photoshop, Illustrator, Canva, Adobe Express, Typography, Layout Design, Brand Identity, Color Theory",
  },
  {
    title: "Brand & Digital",
    skills:
      "Social Media Creatives, Campaign Design, Content Creation, Digital Branding, Visual Storytelling",
  },
  {
    title: "Creative Tools",
    skills:
      "Video Editing, AI Tools, Presentation Design, Modern Design Systems",
  },
  {
    title: "Data & Analytics",
    skills:
      "Microsoft Excel, Power BI, Data Visualization, Dashboard Design",
  },
  {
    title: "Development",
    skills:
      "Python (Beginner), Creative Technology, Digital Workflows",
  },
  {
    title: "Soft Skills",
    skills:
      "Communication, Leadership, Teamwork, Problem Solving, Time Management, Attention to Detail",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 sm:py-28 lg:px-10 lg:py-32"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.08),transparent_60%)]" />


      <div className="relative z-10 mx-auto max-w-7xl">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-20"
        >

          <p className="mb-4 text-xs uppercase tracking-[4px] text-red-600 sm:tracking-[6px]">
            What I Do
          </p>


          <h2 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Skills &
            <span className="text-red-600"> Expertise</span>
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            A blend of creative design, branding, technology, and digital
            skills to create impactful visual experiences.
          </p>

        </motion.div>



        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {skills.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_40px_rgba(229,9,20,0.18)] sm:p-8"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-xl text-red-500">
                ✦
              </div>


              <h3 className="text-xl font-semibold transition-colors group-hover:text-red-500">
                {item.title}
              </h3>


              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.skills}
              </p>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}
