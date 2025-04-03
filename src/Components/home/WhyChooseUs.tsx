'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import whyChooseData from '../../Constants/whyChooseUs'; // ✅ Import benefits data

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#fafafa]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img 
            src="/images/why-choose-us.webp" 
            alt="Why Choose SAP" 
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }} 
          className="w-full md:w-1/2"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Why you should choose our <span className="text-red-600">SAP services</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            SAP services offer a reliable, powerful, and forward-thinking platform to help you achieve your business objectives.
          </p>

          {/* Benefits List */}
          <div className="mt-6 space-y-6">
            {whyChooseData.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="bg-red-100 text-red-600 p-3 rounded-full">
                  <Icon icon={item.icon} className="text-2xl" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.5 }} 
            className="mt-8"
          >
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
