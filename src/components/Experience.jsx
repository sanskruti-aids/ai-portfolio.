import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaDotCircle } from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  // Container & Item animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="experience" className="py-24 bg-dark-bg border-t border-slate-800/40 relative">
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base"
          >
            Data science internships solving problems in classification models, EDA, and NLP pipelines.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-6 md:pl-10 space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-850 flex items-center justify-center transition-all duration-300 group-hover:border-accent-cyan group-hover:bg-accent-cyan/10">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-650 transition-all duration-300 group-hover:bg-accent-cyan"></div>
              </div>

              {/* Card Container */}
              <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 shadow-xl">
                
                {/* Header detail */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-slate-350 mt-1 flex items-center gap-1.5">
                      <FaBriefcase className="text-accent-blue" size={14} />
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Meta items */}
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt size={12} className="text-slate-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt size={12} className="text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5 text-sm md:text-base text-slate-400">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaDotCircle className="text-accent-cyan mt-1.5 shrink-0" size={10} />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
