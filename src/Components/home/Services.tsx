'use client';

import { motion } from 'framer-motion';
import { services } from '../../Constants/services'; // ✅ Import the services array

const Services: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 overflow-x-hidden">
      {/* Section Wrapper */}
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }} 
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-black leading-tight">
            We provide <span className="text-red-600">complete consulting services</span> to <br />
            <span className="text-red-600">transform & perfect business processes.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We are committed to meticulously planning, executing, and delivering exceptional services and results.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: index * 0.2 }} 
              className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-start border border-gray-200 
              hover:shadow-2xl transition-all duration-300 cursor-pointer h-full w-full max-w-full overflow-hidden group"
            >
              {/* Hover Zoom Effect */}
              <motion.div
                whileHover={{ scale: 1.05 }} // ✅ Zoom-in on hover
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center text-center md:text-left md:flex-row md:items-start"
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-16 h-16 object-contain mb-4 md:mb-0 md:mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mt-2 group-hover:text-black transition-colors duration-300">{service.description}</p>
                </div>
              </motion.div>

              {/* Subtle Bottom Border on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
