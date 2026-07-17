"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import PlatformLinks from "@/components/PlatformLinks";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <Navbar />
      <Hero />
      <About />
      <Work />
      <PlatformLinks />
      <Skills /> 
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
