import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Finalist",
      organization: "Ministry of Education, Govt. of India",
      description: "Developed an automated machine learning prototype to predict crop health and yield metrics utilizing multi-spectral satellite images and weather data parameters.",
      icon: FaTrophy,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: 2,
      title: "Odoo Hackathon Participant",
      organization: "Odoo Hackathon",
      description: "Designed and built BookEase, a full-stack appointment booking platform using FastAPI, SQLite, Stripe payments, and Jinja2 templates during the hackathon.",
      icon: FaTrophy,
      color: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="achievements" className="py-24 bg-[#0F172A] border-t border-slate-800/40 relative">
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
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Achievements</span>
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
            Milestones and technical highlights that showcase algorithmic capability and engineering curiosity.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="glass p-8 rounded-2xl flex gap-6 hover:border-slate-700/60 transition-all duration-300 shadow-xl border border-white/5"
              >
                {/* Achievement Icon */}
                <div className={`p-4 rounded-xl border shrink-0 h-fit ${item.color}`}>
                  <IconComponent size={24} />
                </div>

                {/* Text Content */}
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">
                    {item.organization}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-450 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
