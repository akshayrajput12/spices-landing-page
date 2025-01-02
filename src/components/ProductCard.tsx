import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Award } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  rating?: number;
  preparationTime?: string;
  certifications?: string[];
  onClick: () => void;
}

export default function ProductCard({ 
  name, 
  description, 
  image, 
  price, 
  rating = 4.5,
  preparationTime = "5-10 mins",
  certifications = ["Premium Quality", "100% Natural"],
  onClick 
}: ProductCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        z: 50
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={onClick}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
          initial={false}
        >
          <motion.button
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3 
          className="text-2xl font-serif font-bold mb-2"
          layoutId={`title-${name}`}
        >
          {name}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          layoutId={`description-${name}`}
        >
          {description}
        </motion.p>

        <div className="space-y-3 mb-4">
          <motion.div className="flex items-center space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Star className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-600">{rating} Rating</span>
          </motion.div>
          
          <motion.div className="flex items-center space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-600">{preparationTime}</span>
          </motion.div>
          
          <motion.div className="flex items-center space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-600">{certifications.join(" • ")}</span>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-between items-center"
          layoutId={`price-${name}`}
        >
          <span className="text-xl font-bold text-amber-600">{price}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}