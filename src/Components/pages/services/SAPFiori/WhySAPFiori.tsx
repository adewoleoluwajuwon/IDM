"use client";

import { motion } from "framer-motion";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";

const WhySAPFiori = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        {/* ✅ Heading & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-black"
        >
          Why SAP Fiori
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4 max-w-3xl"
        >
          Empower your workforce with modern, role-based interfaces that simplify tasks,
          enhance productivity, and ensure a consistent experience across all devices and platforms.
        </motion.p>

        {/* ✅ Two-Column Layout */}
        <div className="grid gap-12 md:grid-cols-2 mt-12">
          {/* ✅ Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Experience the Future of SAP with Fiori 3.0: A Unified, Role-Based, and Mobile-Optimized User Interface
            </h3>
            <p className="text-gray-600 mt-3">
              SAP Fiori 3.0 is the latest evolution of the user experience for SAP S/4HANA.
              It provides a harmonized user experience across both on-premise and cloud solutions.
              With SAP Fiori 3.0, the SAP Fiori Launchpad is your **central and role-based entry point**
              to access all apps. SAP Fiori provides real-time business roles on compatible devices.
            </p>

            {/* ✅ CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold 
                         hover:bg-red-700 transition-all self-start"
            >
              Contact Our Expert
            </motion.button>
          </motion.div>

          {/* ✅ Right Column - Cards */}
          <div className="flex flex-col space-y-6">
            {/* ✅ Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-red-500 p-4 rounded-lg flex items-center justify-center">
                <HiOutlineDeviceTablet className="text-3xl text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Seamless Business Functions Across All Devices
                </h3>
                <p className="text-gray-600 mt-2">
                  SAP Fiori ensures easy-to-use functions with unmatched responsiveness across desktops,
                  smartphones, and tablets. It allows users to start a process on one device and continue on another.
                </p>
              </div>
            </motion.div>

            {/* ✅ Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-red-500 p-4 rounded-lg flex items-center justify-center">
                <FaMobileAlt className="text-3xl text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Explore 300+ Role-Based Apps with SAP Fiori and UI5
                </h3>
                <p className="text-gray-600 mt-2">
                  SAP has developed Fiori Apps based on UI5, providing over 300 role-based applications
                  across industries like HR, finance, and manufacturing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySAPFiori;
