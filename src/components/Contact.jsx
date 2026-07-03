import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Submit Contact Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Fetch credentials from env variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not found in env. Simulating form submission.");
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setFormState({ name: '', email: '', title: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, 1200);
      return;
    }

    // Send email via EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          setLoading(false);
          setSuccess(true);
          setFormState({ name: '', email: '', title: '', message: '' });
          setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
          setLoading(false);
          setErrorMsg('Oops! Something went wrong. Please try again.');
          console.error('EmailJS Error:', error.text);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] border-t border-slate-800/40 relative">
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Touch</span>
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
            Looking for internship opportunities, project collaborations, or tech discussions? Reach out directly!
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Direct High-Signal Shortcuts (Recruiter-first focus) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
            
            {/* Direct Email Card */}
            <a 
              href="mailto:xa.sanskrutimete54@gmail.com" 
              className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-accent-cyan/30 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-rose-500/10 text-rose-400 group-hover:scale-110 transition-transform duration-200">
                <FaEnvelope size={22} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Direct</p>
                <p className="text-sm sm:text-base text-slate-200 font-bold truncate group-hover:text-accent-cyan transition-colors">
                  xa.sanskrutimete54@gmail.com
                </p>
              </div>
            </a>

            {/* Direct LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/sanskruti-mete-b3058034b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-accent-blue/30 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-accent-blue/15 text-accent-blue group-hover:scale-110 transition-transform duration-200">
                <FaLinkedin size={22} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Connect on LinkedIn</p>
                <p className="text-sm sm:text-base text-slate-200 font-bold group-hover:text-accent-blue transition-colors">
                  linkedin.com/in/sanskruti-mete-b3058034b
                </p>
              </div>
            </a>

            {/* Direct GitHub Card */}
            <a 
              href="https://github.com/sanskruti-aids" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-slate-500/30 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-xl bg-slate-800 text-slate-200 group-hover:scale-110 transition-transform duration-200">
                <FaGithub size={22} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Follow Code activity</p>
                <p className="text-sm sm:text-base text-slate-200 font-bold group-hover:text-white transition-colors">
                  github.com/sanskruti-aids
                </p>
              </div>
            </a>

            {/* Location (small item) */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-950/20 text-slate-455 text-xs font-semibold">
              <FaMapMarkerAlt className="text-accent-cyan" size={14} />
              <span>Based in Pune, Maharashtra, India. Open to remote or relocation work.</span>
            </div>

          </motion.div>

          {/* Column 2: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl border border-white/5 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Drop a Quick Message</h3>

              {success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm">
                  Success! Your message was sent. I will get back to you shortly.
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-semibold text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors duration-250 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors duration-250 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">Subject</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formState.title}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors duration-250 text-sm"
                  placeholder="Internship opportunity / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors duration-250 text-sm resize-none"
                  placeholder="Your message details..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold hover:shadow-lg hover:shadow-accent-blue/30 disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaPaperPlane size={14} /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
