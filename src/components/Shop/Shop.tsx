import React from 'react';
import { motion } from 'framer-motion';
import ShopFilters from './ShopFilters';
import ProductGrid from './ProductGrid';

export default function Shop() {
  return (
    <section className="py-20 bg-white" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Shop Our Collection
        </motion.h2>
        <ShopFilters />
        <ProductGrid />
      </div>
    </section>
  );
}