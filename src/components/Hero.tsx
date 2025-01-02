import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Spices Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      
      <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
        <AnimatedText 
          text="Babali Spices"
          className="font-serif text-6xl md:text-8xl font-bold mb-6"
        />
        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Crafting Culinary Excellence Since 1950
        </motion.p>
        <motion.button
          onClick={scrollToProducts}
          className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 15px rgba(217, 119, 6, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Collection
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProducts}
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </div>
  );
}