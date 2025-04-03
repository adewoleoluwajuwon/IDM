"use client";

import { motion } from "framer-motion";

interface LearnHowItWorksProps {
  title: string;
  description1: string;
  description2: string;
  imageSrc: string;
  className?: string;
}

const LearnHowItWorks: React.FC<LearnHowItWorksProps> = ({ className = "", title, description1, description2, imageSrc }) => {
  return (
    <section className={`w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {/* ✅ Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center 
          bg-gradient-to-r from-black to-red-600 bg-clip-text 
          text-transparent drop-shadow-lg shadow-red-500"
          style={{ WebkitTextStroke: "0.5px white" }}
        >
          {title}
        </motion.h2>

        {/* ✅ Descriptions */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto"
        >
          {description1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto"
        >
          {description2}
        </motion.p>

        {/* ✅ Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <img
            src={imageSrc}
            alt="How It Works"
            loading="lazy"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LearnHowItWorks;
