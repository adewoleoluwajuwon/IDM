
"use client";

import { industries } from "../../../../Constants/ManuIndustries";
import { motion } from "framer-motion";

const Industries: React.FC = () => {
  return (
    <section id="section" className="w-full bg-white py-16 px-6 md:px-12">
      {/* ✅ Section Heading */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries we serve
          </h2>
          <p className="mt-2 text-gray-600 text-lg md:max-w-xl">
            We strive to consistently and efficiently plan, execute and deliver
            high-quality services and results across several industries.
          </p>
        </div>
        {/* <a 
  href="#" 
  className="text-red-600 cursor-pointer font-greatVibes text-lg md:text-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 mt-4 md:mt-0"
>
  View All →
</a>
 */}


      </div>

      {/* ✅ Industry Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // ✅ Subtle zoom-in effect
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* ✅ Industry Image (Now with spacing & curved edges) */}
            <div className="w-full p-4">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* ✅ Industry Text */}
            <div className="px-6 pb-6">
              <industry.icon className="text-red-500 text-2xl" /> {/* ✅ Icon */}
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-300">{industry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
