import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />

      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
