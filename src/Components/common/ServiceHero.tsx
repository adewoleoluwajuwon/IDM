'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  heroImage: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, subtitle, buttonText, heroImage }) => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        {/* ✅ Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          {title}
        </motion.h1>

        {/* ✅ Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          {subtitle}
        </motion.p>

        {/* ✅ Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-6 flex items-center justify-center space-x-2 rounded-lg bg-red-600 px-6 py-2 text-white shadow-md transition-all duration-300 hover:bg-red-700"
          onClick={() => document.getElementById('section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-lg font-medium">{buttonText}</span>
          <FaArrowDown className="text-xl" />
        </motion.button>
      </div>

      {/* ✅ Dynamic Image Section */}
      {heroImage && (
        <div className="container mx-auto mt-10">
          <motion.img 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            src={heroImage}
            alt="Hero Section"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>  
  );
};

export default ServiceHero;
