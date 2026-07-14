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
      className="relative bg-[#050505] text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[6px] text-red-600 mb-4">
            What I Do
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Skills &
            <span className="text-red-600"> Expertise</span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            A blend of creative design, branding, technology, and digital
            skills to create impactful visual experiences.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_0_40px_rgba(229,9,20,0.18)]"
            >

              <div className="w-12 h-12 rounded-xl bg-red-600/15 flex items-center justify-center text-red-500 text-xl mb-6">
                ✦
              </div>

              <h3 className="text-xl font-semibold group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-4 leading-7 text-sm">
                {item.skills}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
