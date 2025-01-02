import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Story from './components/Story';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;