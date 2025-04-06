import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import turmericpowder from '../assets/turmeric powder.jpg';
import corionderpowder from '../assets/corionder powder.jpg';
import redchillipowder from '../assets/red chilli masala.jpg';
interface ProductModalProps {
  product: {
    name: string;
    description: string;
    image: string;
    details?: {
      origin: string;
      weight: string;
      usage: string[];
      benefits: string[];
    };
  } | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              className="absolute right-4 top-4 z-10"
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative h-96 overflow-hidden rounded-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-serif font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Origin</h4>
                    <p className="text-gray-600">{product.details?.origin || 'Premium quality source'}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Net Weight</h4>
                    <p className="text-gray-600">{product.details?.weight || '100g'}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Usage</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {(product.details?.usage || [
                        'Perfect for traditional recipes',
                        'Can be used in modern fusion dishes',
                        'Ideal for marinades and rubs'
                      ]).map((use, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {use}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {(product.details?.benefits || [
                        'Rich in antioxidants',
                        'Natural flavor enhancement',
                        'Traditional medicinal properties'
                      ]).map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}