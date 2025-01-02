import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-serif font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-serif font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-amber-600" />
                <span>123 Spice Market, Flavor Street</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-amber-600" />
                <div className="flex flex-col">
                  <span>+91 9415850615</span>
                  <span>+91 9721737990</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-amber-600" />
                <span>babalimasala@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}