import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import TextReveal from './animations/TextReveal';

export default function Story() {
  return (
    <section className="py-20 bg-white" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1505714197102-6ae95091ed70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our Story"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-full -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.3}>
            <TextReveal
              text="Our Story"
              className="text-4xl font-serif font-bold mb-6"
            />
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
             Since 1976 from small shop to a fully established company in 2015., Babali Spices began as a small family shop in the heart of the spice markets. 
              Two generations later, we continue our commitment to sourcing the finest spices from around the world, 
              maintaining the perfect balance between tradition and innovation.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Every spice in our collection tells a story of careful selection, traditional processing, 
              and a passion for culinary excellence that has been passed down through generations.
            </motion.p>
            <motion.button 
              className="bg-amber-600 text-white px-8 py-3 rounded-full"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(251, 191, 36, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
