import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Nav menu items (ordered by recruiter screening priority)
  const menuItems = [
    { name: 'Home', target: 'home' },
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Education', target: 'education' },
    { name: 'Contact', target: 'contact' },
  ];

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple"
        >
          Sanskruti<span className="text-accent-cyan">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-7">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-accent-cyan font-semibold border-b-2 border-accent-cyan"
                className="cursor-pointer text-slate-300 hover:text-white transition-all duration-200 py-1 text-sm tracking-wide font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-white hover:text-accent-cyan focus:outline-none transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {navOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav w-full border-t border-white/5"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 bg-dark-bg/95">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                    activeClass="text-accent-cyan font-semibold pl-2 border-l-2 border-accent-cyan"
                    className="block text-slate-300 hover:text-white transition-all duration-200 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
