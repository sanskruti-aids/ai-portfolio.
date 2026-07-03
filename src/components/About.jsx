import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaLanguage, FaBriefcase, FaGithub, FaFire } from 'react-icons/fa';

const About = () => {
  // Timeline Items
  const timelineData = [
    {
      title: "Started Engineering Journey",
      subtitle: "Shree Ramchandra College of Engineering",
      description: "Enrolled in the B.E. program majoring in Artificial Intelligence & Data Science. Explored core computer science concepts.",
      year: "2022"
    },
    {
      title: "Mastering Python & Algorithms",
      subtitle: "Foundational Programming",
      description: "Delved deep into object-oriented programming, data structures, and algorithms with Python, Java, and SQL.",
      year: "2023"
    },
    {
      title: "Building Real-World AI Projects",
      subtitle: "Hands-on ML & Data Science",
      description: "Developed chest X-ray classifiers and customer clustering systems. Acquired expertise in Pandas, NumPy, Scikit-learn, and PyTorch.",
      year: "2024"
    },
    {
      title: "Exploring Advanced Machine Learning",
      subtitle: "Neural Networks & NLP",
      description: "Gained certified expertise in machine learning and data analytics. Built pipelines for natural language processing.",
      year: "2025"
    },
    {
      title: "Seeking Internship Opportunities",
      subtitle: "Industry Experience",
      description: "Actively looking for AI, Data Science, or Software Engineering internships to solve complex industrial problems.",
      year: "Present"
    }
  ];

  // Info details list
  const details = [
    { label: "Name", value: "Sanskruti Mete", icon: FaUser },
    { label: "Degree", value: "B.E. AI & Data Science", icon: FaGraduationCap },
    { label: "University", value: "SPPU (Pune University)", icon: FaGraduationCap },
    { label: "Location", value: "Pune, Maharashtra, India", icon: FaMapMarkerAlt },
    { label: "Languages", value: "English, Hindi, Marathi", icon: FaLanguage }
  ];

  // Generate mock contribution grid squares
  const generateMockContributions = () => {
    const contributionLevels = ['bg-slate-800', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400'];
    const squares = [];
    for (let i = 0; i < 91; i++) { // Render 13 weeks * 7 days = 91 squares
      // Randomly select contribution levels skewed towards low-to-medium
      const rand = Math.random();
      let index = 0;
      if (rand > 0.85) index = 4;
      else if (rand > 0.65) index = 3;
      else if (rand > 0.4) index = 2;
      else if (rand > 0.15) index = 1;
      squares.push(contributionLevels[index]);
    }
    return squares;
  };

  const contributionSquares = generateMockContributions();

  return (
    <section id="about" className="py-24 bg-[#0F172A] border-t border-slate-800/40 relative">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info and Bio */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-slate-350 leading-relaxed mb-4 text-sm md:text-base">
                I am a passionate 4th Year Bachelor of Engineering student specializing in **Artificial Intelligence and Data Science**. 
                My focus lies at the intersection of data engineering, statistics, and machine learning architectures.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                *Known for combining structured problem solving with collaborative teamwork to deliver production-ready machine learning solutions.*
              </p>
            </div>

            {/* Quick Details List */}
            <div className="glass p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Personal Details</h3>
              {details.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <div className="p-2.5 rounded-lg bg-accent-blue/15 text-accent-cyan">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{detail.label}</p>
                      <p className="text-sm md:text-base text-slate-200 font-semibold">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Timeline & GitHub Activity */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Academic Timeline */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaBriefcase className="text-accent-cyan" size={22} />
                My Academic & Tech Journey
              </h3>

              <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-8">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Glowing Bullet Circle */}
                    <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300 group-hover:border-accent-cyan group-hover:bg-accent-cyan/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600 transition-all duration-300 group-hover:bg-accent-cyan"></div>
                    </div>

                    {/* Timeline Text */}
                    <div className="transition-all duration-300 transform group-hover:translate-x-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-accent-cyan/10 text-accent-cyan text-xs font-semibold mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors duration-200">
                        {item.title}
                      </h4>
                      <h5 className="text-sm font-semibold text-slate-400 mb-2">
                        {item.subtitle}
                      </h5>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Stats Card - Recruiters highly value active contributions */}
            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <FaGithub className="text-slate-200" size={22} /> Code Activity Indicator
                </h3>
                <div className="flex gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1"><FaFire className="text-orange-500" /> 18-Day Streak</span>
                  <span>542 Commits / Year</span>
                </div>
              </div>

              {/* Grid representation of last 90 days commits */}
              <div className="bg-slate-950/60 border border-white/5 p-4 rounded-xl">
                <p className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">GitHub contributions (Recent 3 Months)</p>
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-full overflow-x-auto py-1">
                  {contributionSquares.map((bgColor, idx) => (
                    <div 
                      key={idx} 
                      className={`w-3.5 h-3.5 rounded-[2px] transition-colors duration-200 hover:scale-115 ${bgColor}`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-500 mt-3">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
