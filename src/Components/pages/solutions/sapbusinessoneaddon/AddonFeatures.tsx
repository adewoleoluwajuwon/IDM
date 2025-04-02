"use client";
import { motion } from "framer-motion";
import { AddonFeatureData } from "../../../../Constants/AddonFeatureData"; // ✅ Import data
import * as Icons from "react-icons/fa"; // ✅ Import all FontAwesome icons

export default function AddonFeatures() {
  return (
    <section id="section" className="py-16 px-6 bg-gradient-to-r from-red-900 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto">

        {/* ✅ Add Section Title & Description Here */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Features of SAP Business One Add-ons</h2>
          <p className="text-lg mt-2">
            SAP Business Add-Ons provide a powerful way to extend the functionality of SAP systems,
            offering tailored solutions for various industries.
          </p>
        </div>

        {/* ✅ Feature Sections */}
        {AddonFeatureData.map((section, index) => {
          const IconComponent = (Icons as any)[section.icon]; // ✅ Get the icon dynamically

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              {/* Section Header */}
              <div className="flex items-center space-x-3">
                {IconComponent && <IconComponent className="text-3xl text-red-600" />} {/* ✅ Render dynamically */}
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              <p className="mt-2 text-lg text-gray-300">{section.description}</p>

              {/* Feature Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.desc}</p>
                    {feature.title === "Take your business to a new level" && (
                      <a
                        href="#"
                        className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                      >
                        Learn More
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
