"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { sapHanaServices } from "../../../../Constants/sapHanaData";

const SapHanaServices = () => {
  return (
    <section id="section" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        {/* ✅ Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">SAP HANA Services</h2>
          <p className="text-lg text-gray-600 mt-4">
            Transform your business with SAP HANA Services, offering real-time analytics, simplified data management, and accelerated decision-making.
          </p>
        </motion.div>

        {/* ✅ Two-column layout for Database & Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sapHanaServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center md:text-left md:flex-row"
            >
              {/* ✅ Icon */}
              <div className="bg-red-600 text-white p-4 rounded-lg flex-shrink-0">
                <Icon icon={service.icon} className="text-4xl" />
              </div>

              {/* ✅ Text Content */}
              <div className="mt-4 md:mt-0 md:ml-6">
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Big SAP HANA Architecture Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg"
        >
          <img src="/images/sap-hana-architecture.webp" alt="SAP HANA Architecture" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default SapHanaServices;
