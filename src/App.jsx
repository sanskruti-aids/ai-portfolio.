import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark-bg min-h-screen font-sans selection:bg-accent-cyan/30 selection:text-white cursor-auto md:cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Portfolio Projects Section - Prominently featured first for recruiters */}
        <Projects />

        {/* Professional Internship Experience Section - Direct evidence of workflow */}
        <Experience />

        {/* Professional About & Timeline Section */}
        <About />

        {/* Technical & Interpersonal Skills Section */}
        <Skills />

        {/* Academic Qualification Section */}
        <Education />

        {/* Contact and Social Channels Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
