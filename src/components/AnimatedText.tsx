import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.03 * i 
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.8
      }
    }),
    animate: (index: number) => ({
      scale: [1, 1.4, 1.4, 1],
      color: ["#FFFFFF", "#F59E0B", "#F59E0B", "#FFFFFF"],
      rotateY: [0, 360, 360, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: letters.length * 2 - 2, // Wait for other letters to finish
        delay: index * 2, // Stagger the start of each letter's animation
      }
    })
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`${className} relative group`}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/20 to-amber-500/20 rounded-lg blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 opacity-0" />
      {letters.map((letter, index) => (
        <motion.span
          custom={index}
          variants={letterVariants}
          key={index}
          className="inline-block origin-top relative"
          initial="hidden"
          animate={["visible", "animate"]}
          style={{ 
            marginRight: letter === ' ' ? '0.5em' : '0.02em',
            display: 'inline-block',
            perspective: '1000px'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}