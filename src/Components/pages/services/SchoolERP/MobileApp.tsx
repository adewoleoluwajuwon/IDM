"use client";

import { motion } from "framer-motion";


const MobileApp = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-12">
        {/* ✅ Left Section - Title, Description, and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Our Mobile App
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A Revolutionary Mobile Application for Schools
          </p>

          {/* ✅ Download Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-black rounded-lg shadow-lg"
            >
              <img src="/images/google-play.webp" alt="Google Play" width={180} height={60} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-black rounded-lg shadow-lg"
            >
              <img src="/images/app-store.webp" alt="App Store" width={180} height={60} />
            </motion.a>
          </div>
        </motion.div>

        {/* ✅ Right Section - Mobile App Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/images/school-mobile-app.webp"
            alt="Mobile App"
            width={500}
            height={400}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MobileApp;
