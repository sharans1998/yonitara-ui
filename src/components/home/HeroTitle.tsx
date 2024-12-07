'use client';
// components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = ({ title }: { title: string }) => {
  // Split the title into an array of letters
  const letters = title.split('');

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 className="text-6xl font-poppins font-bold text-primary flex">
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces */}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default HeroTitle;
