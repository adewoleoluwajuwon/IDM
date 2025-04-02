"use client";
import { motion } from "framer-motion";
import { PowerbiBenefitsData } from "../../../../Constants/PowerbiBenefitsData";
import * as Icons from "react-icons/fa";

const PowerbiBenefits = () => {
  return (
    <section id="section" className="bg-gray-100 dark:bg-gray-900 py-20 px-6 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className=" mb-16">
          <h2 className="text-4xl font-extrabold">Why Choose Power BI?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Empower your business with intelligent insights, real-time analytics, and beautifully designed dashboards powered by modern technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PowerbiBenefitsData.map((benefit, index) => {
            const Icon = (Icons as any)[benefit.icon];

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-black hover:to-red-700"
              >
                <div className="flex items-center justify-center mb-4 text-red-600 group-hover:text-white text-4xl transition duration-300">
                  {Icon && <Icon />}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200 transition duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PowerbiBenefits;
