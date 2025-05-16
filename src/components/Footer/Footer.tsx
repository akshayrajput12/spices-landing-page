import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Phone } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100092302425878&mibextid=7hhP0tJUkSn2MDoD' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: 'https://www.instagram.com/officialbabalimasala?igsh=MW4zZjl3dnM1OHY5cQ==' },
    { Icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl font-bold">Babali</h3>
            <p className="text-sm">Crafting culinary excellence Since 2015. Premium spices for the discerning chef.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-amber-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Shipping', 'Returns', 'FAQ', 'Track Order'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-amber-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-12 pt-8 border-t border-amber-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Phone size={16} className="text-amber-300" />
              <span>+91 79054381320,+91 9415850615</span>
            </div>
            <motion.div 
              className="flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.02 }}
            >
              <span>Developed by</span>
              <motion.a 
                href="https://adevweb.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                ADev
              </motion.a>
              <span>&</span>
              <motion.a 
                href="https://akshayys.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Akshay
              </motion.a>
            </motion.div>
          </div>
          <div className="text-sm">
            {new Date().getFullYear()} Babali Spices. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
