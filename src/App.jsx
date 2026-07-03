import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen font-sans selection:bg-accent-cyan/30 selection:text-white">
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

        {/* Certification and Credentials Section */}
        <Certifications />

        {/* High-Signal Achievements Section */}
        <Achievements />

        {/* Contact and Social Channels Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
