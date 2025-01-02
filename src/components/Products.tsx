import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import turmericpowder from '../assets/turmeric powder.jpg';
import corionderpowder from '../assets/corionder powder.jpg';
import redchillipowder from '../assets/red chilli masala.jpg';

const products = [
  {
    name: "Turmeric Powder",
    description: "Premium grade pure turmeric powder (हल्दी)",
    image: turmericpowder,
    price: "₹180",
    rating: 4.8,
    details: {
      origin: "Selected Indian Farms",
      weight: "500g",
      usage: [
        "Essential for Indian curries",
        "Perfect for golden milk (हल्दी दूध)",
        "Used in traditional medicine"
      ],
      benefits: [
        "Natural anti-inflammatory",
        "Rich in curcumin",
        "Immunity booster"
      ]
    }
  },
  {
    name: "Coriander Powder",
    description: "Freshly ground coriander powder (धनिया पाउडर)",
    image: corionderpowder,
    price: "₹160",
    rating: 4.7,
    details: {
      origin: "Premium Indian Coriander Seeds",
      weight: "500g",
      usage: [
        "Base spice for curries",
        "Essential in garam masala",
        "Perfect for marinades"
      ],
      benefits: [
        "Aids digestion",
        "Rich in antioxidants",
        "Natural flavor enhancer"
      ]
    }
  },
  {
    name: "Red Chilli Powder",
    description: "Pure ground red chilli powder (लाल मिर्च)",
    image: redchillipowder,
    price: "₹200",
    rating: 4.9,
    details: {
      origin: "Selected Indian Red Chillies",
      weight: "500g",
      usage: [
        "Adds heat to dishes",
        "Perfect for Indian curries",
        "Essential in pickles"
      ],
      benefits: [
        "Rich in capsaicin",
        "Natural metabolism booster",
        "High in vitamins"
      ]
    }
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" id="products" ref={containerRef}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <motion.h2 
          className="text-4xl font-serif font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Signature Collection
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              {...product} 
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </motion.div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}