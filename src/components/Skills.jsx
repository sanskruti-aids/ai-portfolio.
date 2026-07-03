import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChevronRight } from 'react-icons/fa';
import { skillCategories, currentlyLearning } from '../data/skills';

const Skills = () => {
  // Animation container variants
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

  const progressVariants = (level) => ({
    hidden: { width: 0 },
    visible: { 
      width: `${level}%`, 
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  });

  return (
    <section id="skills" className="py-24 bg-dark-bg border-t border-slate-800/40 relative">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Skills</span>
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
            A breakdown of my technical abilities, engineering tools, and data science frameworks.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              variants={cardVariants}
              className="glass p-8 rounded-2xl flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300 shadow-xl"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          
                          {/* Skill Icon & Name */}
                          <div className="flex items-center space-x-3">
                            <span className={`p-2 rounded-lg bg-slate-800 group-hover:bg-slate-750 transition-colors duration-200 ${skill.color}`}>
                              <IconComponent size={18} />
                            </span>
                            <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-200 text-sm">
                              {skill.name}
                            </span>
                          </div>

                          {/* Skill Level % */}
                          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider group-hover:text-accent-cyan transition-colors duration-200">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                          <motion.div 
                            variants={progressVariants(skill.level)}
                            className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Growth Trajectory Section (Currently Learning) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-accent-blue/15 text-accent-cyan rounded-xl shrink-0">
              <FaBookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Growth Trajectory</h3>
              <p className="text-xs sm:text-sm text-slate-400">I am actively expanding my skill set in next-generation machine learning and deployment practices.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 max-w-xl">
            {currentlyLearning.map((item, idx) => (
              <span 
                key={idx}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-350 hover:text-white hover:border-accent-cyan/20 transition-all duration-200 text-xs font-semibold"
              >
                <FaChevronRight className="text-accent-cyan" size={10} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
