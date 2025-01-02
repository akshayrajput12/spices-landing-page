import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        ...directions[direction],
        opacity: 0 
      }}
      whileInView={{ 
        x: 0,
        y: 0,
        opacity: 1 
      }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1,
        delay,
        bounce: 0.3
      }}
    >
      {children}
    </motion.div>
  );
}