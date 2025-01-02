import React from 'react';
import { motion } from 'framer-motion';

const letters = ['B', 'A', 'B','A', 'L', 'I'];

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-amber-50 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="flex items-center space-x-2">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            className="text-6xl font-serif font-bold text-amber-800"
            initial={{ y: 100, opacity: 0, rotateX: 90 }}
            animate={{
              y: [100, 0, 0, -20, 0],
              opacity: 1,
              rotateX: 0,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.2,
              times: [0, 0.4, 0.6, 0.8, 1]
            }}
          >
            {letter}
          </motion.div>
        ))}
        <motion.div
          className="absolute w-20 h-20 border-t-4 border-amber-600 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}