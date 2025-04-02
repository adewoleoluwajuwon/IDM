'use client';
import { motion } from 'framer-motion';

interface BestPracticesProps {
  heading: string;
  description: string;
}

const BestPractices: React.FC<BestPracticesProps> = ({ heading, description }) => {
  return (
    <section id='section' className="w-full bg-white text-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
  <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-12">
    
    {/* ✅ Fully Visible Heading on Mobile & Desktop */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="text-xl sm:text-2xl md:text-4xl font-bold 
                 bg-gradient-to-r from-black to-red-600 text-transparent bg-clip-text 
                 w-full md:max-w-[50%]  
                 leading-snug"
    >
      {heading}
    </motion.h2>

    {/* ✅ Description with Better Mobile Spacing */}
    <motion.p 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base sm:text-lg text-gray-500 md:text-gray-400 leading-relaxed max-w-xl md:max-w-[50%]"
    >
      {description}
    </motion.p>
  </div>
</section>



  
  );
};

export default BestPractices;
