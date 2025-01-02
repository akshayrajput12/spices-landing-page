import React from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Whole Spices', 'Ground Spices', 'Blends', 'Gift Sets'];

export default function ShopFilters() {
  return (
    <motion.div 
      className="flex flex-wrap gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className="px-4 py-2 rounded-full border border-amber-200 hover:bg-amber-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}