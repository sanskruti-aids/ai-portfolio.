import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaExclamationCircle, FaTools, FaCheckCircle, FaChartBar } from 'react-icons/fa';
import { projects } from '../data/projects';

// Extract the card into its own component to manage individual mouse state for 3D tilt
const ProjectCard = ({ project, cardVariants }) => {
  const ref = useRef(null);
  
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center (-1 to 1)
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Smooth out the motion
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-1, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-1, 1], [-8, 8]), springConfig);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group glass rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-white/5 hover:border-accent-cyan/25 relative"
    >
      <div>
        {/* Project Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/90 text-white hover:text-accent-cyan hover:scale-110 transition-all duration-200"
              title="GitHub Repository"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/90 text-white hover:text-accent-cyan hover:scale-110 transition-all duration-200"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Card Body */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors duration-200">
            {project.name}
          </h3>

          {/* Problem - Approach - Result Structure */}
          <div className="space-y-3.5 mb-6 text-sm">
            <div className="flex items-start gap-2.5">
              <FaExclamationCircle className="text-rose-400 mt-1 shrink-0" size={14} />
              <p className="text-slate-350"><strong className="text-slate-200">Problem:</strong> {project.problem}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <FaTools className="text-amber-400 mt-1 shrink-0" size={14} />
              <p className="text-slate-350"><strong className="text-slate-200">Approach:</strong> {project.approach}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <FaCheckCircle className="text-emerald-400 mt-1 shrink-0" size={14} />
              <p className="text-slate-350"><strong className="text-slate-200">Result:</strong> {project.result}</p>
            </div>
          </div>

          {/* High Signal Impact Metric Badge */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 mb-6">
            <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
              <FaChartBar size={18} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{project.metrics.label}</p>
              <p className="text-base font-extrabold text-white">
                {project.metrics.value} <span className="text-xs font-normal text-slate-400">on {project.metrics.dataset}</span>
              </p>
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800/80 text-accent-cyan border border-slate-700/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Actions */}
      <div className="p-6 md:p-8 pt-0 flex justify-between gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-250 text-sm"
        >
          <FaGithub /> Code Repo
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-250 text-sm"
        >
          <FaExternalLinkAlt size={12} /> Live Link
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-24 bg-dark-bg border-t border-slate-800/40 relative">
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Projects</span>
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
            Proof over biography. A look at core machine learning and data science systems structured by business impact.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} cardVariants={cardVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
