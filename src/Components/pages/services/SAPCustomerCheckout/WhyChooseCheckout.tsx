'use client';

import { motion } from 'framer-motion';
import { sapCheckoutFeatures } from '../../../../Constants/sapCheckoutFeatures';

const WhyChooseCheckout = () => {
  return (
    <section id='section' className="w-full bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl text-center">
        {/* ✅ Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Why you should choose SAP Customer Checkout
        </motion.h2>

        {/* ✅ Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 mt-4"
        >
          With real-time insights, streamlined processes, and robust security, our solution empowers your business to stay ahead in a competitive market.
        </motion.p>
      </div>

      {/* ✅ Features Grid */}
      <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {sapCheckoutFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* ✅ Icon (Fix: Call as a Component) */}
            <div className="flex justify-center">
              <div className="bg-red-600 p-4 rounded-lg text-white text-2xl">
                <feature.icon />  {/* ✅ Call it as a component */}
              </div>
            </div>

            {/* ✅ Title */}
            <h3 className="text-xl font-bold text-center mt-4">{feature.title}</h3>

            {/* ✅ Description List */}
            <ul className="text-gray-300 text-sm mt-4 space-y-2">
              {feature.description.map((point, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-red-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseCheckout;
