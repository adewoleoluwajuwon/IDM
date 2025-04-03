'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // ✅ Import blur effect

const Overview = () => {
  return (
    <section className="min-h-screen w-full bg-gray-50">
      {/* ✅ Hero Section */}
      <div 
        className="relative mx-auto flex w-full max-w-7xl
        flex-col items-center justify-between px-6 py-16 md:flex-row md:px-12 
        md:py-24"
      >
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            The Power of <span className="text-red-600">SAP Business One</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            IDM is a leading ERP consulting team specializing in SAP Business One, tailored for small, medium, and large businesses. 
            As one of the largest SAP Business One partners in West Africa, we have completed numerous implementations, including SAP Business One for HANA, 
            helping clients maximize ROI and achieve business growth through expert support and turnaround services.
          </p>

          {/* ✅ CTA Button (Learn More with Down Arrow) */}
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="mt-6 flex items-center justify-center space-x-2 rounded-lg bg-red-600 px-6 py-2 text-white shadow-md transition-all duration-300 hover:bg-red-700"
            onClick={() => document.getElementById('section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-lg font-medium">Learn More</span>
            <FaArrowDown className="text-xl" />
          </motion.button>
        </motion.div>

        {/* ✅ Right Image with Lazy Loading */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex w-full justify-end md:w-1/2"
        >
          <LazyLoadImage
            src="/images/sb1.webp" 
            alt="SAP Business One" 
            effect="blur" // ✅ Adds blur effect before image loads
            className="w-full max-w-md rounded-lg object-contain shadow-lg mt-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
