"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const contactCards = [
  {
    title: "Email",
    subtitle: "Let's discuss your next project",
    value: "harsh.kohli.180905@gmail.com",
    icon: Mail,
    href: "mailto:harsh.kohli.180905@gmail.com",
  },
  {
    title: "WhatsApp",
    subtitle: "Start a conversation",
    value: "+91 98916 99428",
    icon: MessageCircle,
    href: "https://wa.me/919891699428",
  },
  {
  title: "LinkedIn",
  subtitle: "View my professional profile",
  value: "Harsh Kohli",
  icon: FaLinkedin,
  href: "https://www.linkedin.com/in/harsh-kohli-84223534b",
},
];

 export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setStatus({
        type: "",
        message: "",
      });

      await emailjs.sendForm(
        "service_f0t8rfw",
        "template_3cyn2qh",
        formRef.current,
        "w_iNOoGGj5t8RuGQl"
      );

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-red-500/10 blur-[150px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-700/10 blur-[180px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* Decorative */}
      <div className="absolute left-10 top-28 h-44 w-44 rounded-full border border-red-600/20" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full border border-red-500/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-20 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-red-400">
            <Sparkles className="h-4 w-4" />
            LET'S CREATE SOMETHING EPIC
          </div>

          <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
            GET IN
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have an idea, collaboration, or project in mind? I'm always open
            to discussing creative opportunities and exciting design work.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT */}
          <div className="space-y-6">
            {contactCards.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Email" ? "_self" : "_blank"}
                  rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10" />
                  </div>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,.4)]">
                    <Icon size={28} />
                  </div>

                  <div className="relative flex-1">
                    <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {item.subtitle}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-red-300">
                      Click to Open
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </div>

                  <ArrowUpRight className="text-red-400 transition duration-300 group-hover:rotate-45 group-hover:scale-125" />
                </motion.a>
              );
            })}

            {/* CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
              className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600/15 to-transparent p-8"
            >
              <h3 className="mb-3 text-3xl font-black">
                OPEN FOR PROJECTS
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Brand Identity • Posters • Social Media • UI Design • Creative
                Direction • Visual Storytelling
              </p>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-red-600/10 blur-3xl" />

            <h3 className="mb-8 text-3xl font-black uppercase">
              Send Message
            </h3>

            <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="space-y-6"
>
              <div>
                <label className="mb-2 block text-sm uppercase tracking-widest text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  name="from_name"
value={formData.from_name}
onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-widest text-gray-400">
                  Email
                </label>

                <input
  type="email"
  name="from_email"
  value={formData.from_email}
  onChange={handleChange}
  placeholder="your@email.com"
  autoComplete="email"
  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
/>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-widest text-gray-400">
                  Subject
                </label>

                <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Project Subject"
  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
/>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-widest text-gray-400">
                  Message
                </label>

                <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell me about your project..."
  className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
/>
              </div>

          <motion.button
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.96,
  }}
  type="submit"
  disabled={loading}
  aria-label="Send Message"
  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 px-6 py-4 text-lg font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(239,68,68,.4)] transition"
>
  {loading ? "Sending..." : "Send Message"}

  <Send
    size={20}
    className="transition group-hover:translate-x-1"
  />
</motion.button>
{status.message && (
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`text-center font-medium ${
      status.type === "success"
        ? "text-green-400"
        : "text-red-400"
    }`}
  >
    {status.message}
  </motion.p>
)}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 border-t border-white/10 pt-8 text-center text-gray-500"
        >
          © {new Date().getFullYear()} • Designed & Developed by Harsh Kohli
        </motion.div>
      </div>
    </section>
  );
}
