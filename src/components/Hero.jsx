import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg px-6 pt-24"
    >
      {/* Background Animated Blobs (optimized sizing for Lighthouse performance) */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-accent-blue/5 rounded-full blur-[80px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center justify-between min-h-[80vh]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full flex-1 gap-12 mt-8 lg:mt-0">
          
          {/* Left column: Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Signal Badge - Crucial for Recruiter screening */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 px-4 py-2 rounded-full glass border border-accent-cyan/30 text-accent-cyan text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Open to AI/ML & Data Science Internships — Summer 2026
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple">Sanskruti Mete</span>
            </motion.h1>

            {/* Typing Animation Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Python Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Machine Learning Learner',
                  2000,
                  'Data Science Student',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-cyan font-semibold border-r-2 border-accent-cyan pr-1"
              />
            </motion.div>

            {/* Introduction text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-slate-400 text-base md:text-lg mb-10 leading-relaxed"
            >
              "I build AI, Machine Learning, and Data Analysis projects while continuously improving my software development skills."
            </motion.p>

            {/* Buttons / Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10 w-full lg:w-auto px-4 lg:px-0"
            >
              {/* Functional resume PDF download link */}
              <a
                href="/Sanskruti_Mete_Resume.pdf"
                download="Sanskruti_Mete_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-lg hover:shadow-accent-blue/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold glass text-white hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-6 mb-12 lg:mb-0"
            >
              <a 
                href="https://github.com/sanskruti-aids" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/50 hover:scale-110 transition-all duration-300 border border-white/5"
                aria-label="GitHub Profile"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanskruti-mete-b3058034b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-slate-300 hover:text-accent-blue hover:border-accent-blue/50 hover:scale-110 transition-all duration-300 border border-white/5"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={22} />
              </a>
              <a 
                href="mailto:xa.sanskrutimete54@gmail.com" 
                className="p-3 rounded-full glass text-slate-300 hover:text-accent-purple hover:border-accent-purple/50 hover:scale-110 transition-all duration-300 border border-white/5"
                aria-label="Send Email"
              >
                <FaEnvelope size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center items-center w-full mb-8 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-cyan rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Outer decorative ring */}
              <div className="absolute inset-[-10px] rounded-full border-2 border-accent-cyan/20 border-dashed animate-spin" style={{ animationDuration: '15s' }}></div>
              
              {/* Profile Image */}
              <img 
                src="/profile.jpg.jpeg" 
                alt="Sanskruti Mete" 
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl hover:border-accent-cyan/50 transition-colors duration-300 z-10"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Sanskruti+Mete&background=0D8ABC&color=fff&size=512';
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-500 cursor-pointer hover:text-accent-cyan transition-colors duration-200 mt-8 mb-6"
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <FaChevronDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
