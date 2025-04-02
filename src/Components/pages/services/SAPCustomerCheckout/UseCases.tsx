'use client';

import { useCasesData } from '../../../../Constants/useCasesData';
import { motion } from 'framer-motion';

const UseCases = () => {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-24 px-6 md:px-12 lg:px-16">
      {/* ✅ Section Title */}
      <div className="container mx-auto text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Use Cases
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          Discover How Our SAP Solutions Drive Success Across Diverse Industries and Business Challenges
        </motion.p>
      </div>

      {/* ✅ Use Cases Grid */}
      <div className="container mx-auto mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {useCasesData.map((useCase, index) => (
          <motion.div 
            key={useCase.id}
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // ✅ Smooth Hover Effect
            whileTap={{ scale: 0.98 }} // ✅ Click Feedback Effect
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 ease-in-out"
          >
            {/* ✅ Image (Ensures Full Display & Responsiveness) */}
            <div className="w-full h-auto overflow-hidden">
              <motion.img 
                src={useCase.image} 
                alt={useCase.title} 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 ease-in-out hover:scale-105" // ✅ Image Hover Zoom
              />
            </div>

            {/* ✅ Content */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900">{useCase.title}</h3>
              <p className="text-gray-600 mt-2">{useCase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
