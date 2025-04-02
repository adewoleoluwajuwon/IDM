"use client";
import { motion } from "framer-motion";
import { AddonServicesData } from "../../../../Constants/AddonServicesData"; // ✅ Import data
import * as Icons from "react-icons/fa"; // ✅ Import all FontAwesome icons

export default function AddonServices() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Section Title & Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Additional Add-ons Services We Offer</h2>
          <p className="text-lg mt-2 text-gray-600">
            SAP Business One add-ons ensure your SAP environment runs smoothly to maximize productivity and streamline operations.
          </p>
        </div>

        {/* ✅ Grid Layout for Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AddonServicesData.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon]; // ✅ Get the correct icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                {/* ✅ Red Icon Box */}
                <div className="bg-red-600 text-white p-4 rounded-lg flex items-center justify-center">
                  {IconComponent && <IconComponent className="text-2xl" />}
                </div>

                {/* ✅ Service Info */}
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
