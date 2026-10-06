"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import About from "./components/About";
import Experience from "./components/Experience";
import PersonalGallery from "./components/PersonalGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeIntro from "./components/WelcomeIntro";

export default function Home() {
  return (
    <>
      <WelcomeIntro />
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
        <Experience />
        <PersonalGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
