import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border: '2px solid rgba(6, 182, 212, 0.4)', // Accent cyan with opacity
      height: 32,
      width: 32,
      transition: {
        type: 'spring',
        damping: 30,
        mass: 0.1,
        stiffness: 400
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: 'rgba(6, 182, 212, 0.15)',
      border: '2px solid rgba(6, 182, 212, 0.8)',
      height: 48,
      width: 48,
      transition: {
        type: 'spring',
        damping: 30,
        mass: 0.1,
        stiffness: 400
      }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
    }
  };

  // Only show on desktop devices (where window.innerWidth is reasonably large and we actually have a mouse)
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-invert-0 mix-blend-screen"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-accent-blue pointer-events-none z-[10000] hidden md:block w-1.5 h-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        variants={dotVariants}
        animate="default"
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
