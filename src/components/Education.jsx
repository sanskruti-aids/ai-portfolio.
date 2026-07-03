import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = {
    college: "Shree Ramchandra College of Engineering",
    degree: "Bachelor of Engineering (B.E.)",
    specialization: "Artificial Intelligence & Data Science",
    university: "Savitribai Phule Pune University (SPPU)",
    years: [
      { year: "1st Year (2022-2023)", sgpa: "SGPA: 8.64", status: "Completed" },
      { year: "2nd Year (2023-2024)", sgpa: "SGPA: 9.86", status: "Completed" },
      { year: "3rd Year (2024-2025)", sgpa: "SGPA: 9.29", status: "Completed" },
      { year: "4th Year (2025-2026)", sgpa: "Ongoing", status: "In Progress" }
    ]
  };

  return (
    <section id="education" className="py-24 bg-[#0F172A] border-t border-slate-800/40 relative">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Block: Degree Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl"></div>
              
              <div>
                <div className="p-3 bg-accent-blue/15 text-accent-cyan w-fit rounded-2xl mb-6">
                  <FaGraduationCap size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{educationData.degree}</h3>
                <h4 className="text-lg font-semibold text-accent-cyan mb-6">{educationData.specialization}</h4>
                
                <div className="space-y-4 text-slate-350 text-sm">
                  <div className="flex items-start space-x-3">
                    <FaUniversity className="text-slate-450 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Institution</p>
                      <p className="font-semibold text-white">{educationData.college}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaUniversity className="text-slate-450 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Affiliated University</p>
                      <p className="font-semibold text-slate-300">{educationData.university}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaCalendarAlt className="text-slate-450 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Duration</p>
                      <p className="font-semibold text-slate-300">2022 - 2026</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGPA Summary Badge - Clean and visible for screening */}
              <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-accent-cyan/25 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-accent-cyan/15 text-accent-cyan shrink-0">
                  <FaAward size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Cumulative GPA</p>
                  <p className="text-lg font-black text-white">CGPA: 9.26 <span className="text-xs font-semibold text-slate-400">/ 10</span></p>
                  <p className="text-[10px] text-slate-400 font-medium">Calculated up to 3rd Year</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Block: Annual Performance Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaStar className="text-accent-cyan" /> Semester-by-Semester Metrics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {educationData.years.map((yearItem, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-2xl border border-white/5 hover:border-accent-cyan/25 transition-all duration-300 group"
                >
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    {yearItem.year}
                  </span>
                  
                  <div className="flex items-baseline justify-between mt-4">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Academic Grade</p>
                      <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan mt-1">
                        {yearItem.sgpa}
                      </p>
                    </div>

                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md uppercase tracking-wider ${
                      yearItem.status === 'Completed' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/25'
                    }`}>
                      {yearItem.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;
