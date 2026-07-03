import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../data/certificates';

const Certifications = () => {
  // Container & Card animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="certifications" className="py-24 bg-dark-bg border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Credentials</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                {/* Badge Icon */}
                <div className="p-3 bg-accent-blue/15 text-accent-cyan rounded-xl w-fit mb-5 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                  <FaAward size={22} />
                </div>

                {/* Name */}
                <h3 className="font-bold text-base md:text-lg text-white mb-2 leading-snug group-hover:text-accent-cyan transition-colors duration-250">
                  {cert.name}
                </h3>

                {/* Organization */}
                <p className="text-slate-400 text-xs md:text-sm font-semibold mb-4">
                  {cert.organization}
                </p>
              </div>

              {/* Date & Button */}
              <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {cert.date}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-accent-cyan font-bold hover:text-white transition-colors duration-200"
                >
                  Verify <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
