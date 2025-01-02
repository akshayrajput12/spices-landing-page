import React, { useState } from 'react';
import { motion } from 'framer-motion';

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: "0 0 8px rgba(217, 119, 6, 0.3)",
    transition: { type: "spring", stiffness: 300 }
  },
  hover: {
    y: -2,
    transition: { type: "spring", stiffness: 300 }
  }
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <motion.form 
      className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
    >
      <motion.div variants={formVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <motion.input
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 transition-colors"
          placeholder="Enter your full name"
          required
        />
      </motion.div>

      <motion.div variants={formVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <motion.input
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 transition-colors"
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div variants={formVariants}>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <motion.input
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 transition-colors"
          placeholder="+91 XXXXXXXXXX"
          required
        />
      </motion.div>

      <motion.div variants={formVariants}>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <motion.input
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 transition-colors"
          placeholder="What would you like to discuss?"
          required
        />
      </motion.div>

      <motion.div variants={formVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <motion.textarea
          variants={inputVariants}
          whileHover="hover"
          whileFocus="focus"
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-amber-500 focus:ring-amber-500 transition-colors resize-none"
          placeholder="Type your message here..."
          required
        />
      </motion.div>

      <motion.button
        variants={formVariants}
        type="submit"
        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 4px 15px rgba(217, 119, 6, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}