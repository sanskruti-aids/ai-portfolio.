import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top handler
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad'
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-6 md:px-12 text-slate-400">
      
      {/* Floating Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3.5 bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-accent-cyan hover:to-accent-blue text-white rounded-full shadow-lg shadow-accent-cyan/20 hover:shadow-accent-blue/35 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer z-20"
        aria-label="Back to Top"
      >
        <FaArrowUp size={16} />
      </button>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left copyright */}
        <div className="text-center md:text-left text-sm">
          <p>© {currentYear} <span className="text-white font-bold">Sanskruti Mete</span>. All rights reserved.</p>
          <p className="text-xs text-slate-600 mt-1">Designed & built with React, Tailwind CSS, & Framer Motion.</p>
        </div>

        {/* Right social media channels */}
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/sanskruti-aids"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-slate-800/50 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanskruti-mete-b3058034b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-accent-blue hover:border-accent-blue/40 hover:bg-slate-800/50 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:xa.sanskrutimete54@gmail.com"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-accent-purple hover:border-accent-purple/40 hover:bg-slate-800/50 transition-all duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
