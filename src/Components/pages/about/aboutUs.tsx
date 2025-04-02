"use client";
import { motion } from "framer-motion";
import Partners from "../../common/Partners";
import ContactExpert from "../../common/ContactExpert";
import Footer from "../../common/Footer";

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg font-medium text-gray-600 dark:text-gray-300 "
        >
          About Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-900 to-teal-900 text-transparent bg-clip-text"
        >
          We Are Increasing Business Success With IT Solutions
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg font-medium text-gray-600 dark:text-gray-300"
        >
          International Data Management Services Limited (IDM), incorporated in Nigeria in the year 1981 is affiliated with Comcraft Services Limited, United Kingdom. 
          Partnering with SAP, IDM specializes in implementing SAP based ERP, 
          SCM & CRM system for mid- sized growing enterprises. IDM also specializes 
          in teaching latest IT technology with world class curriculum in schools in affiliation with the Oxford University Press.
        </motion.p>

        <motion.img
          src="/src/assets/images/aboutHero.png"
          alt="Hero Image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl mt-8"
        />
      </section>

      {/* Vision Section */}
      <motion.section 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-red-900 to-purple-800 text-white py-16 px-6 lg:py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Vision</h2>
          <p className="mt-4 text-lg sm:text-xl">
            Increasing the global competitiveness of African enterprises is our main goal.
          </p>
        </div>
        <motion.img
          src="/src/assets/images/vision-image.png" 
          alt="Vision Image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl mx-auto mt-8"
        />
      </motion.section>

      {/* Mission Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-left"
        >
            <h3 className="text-3xl font-bold">
                <span className="text-black font-extrabold">01</span><br/>Fostering a World of Skilled Tech Pioneers
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                At International Data Management Services Limited, 
                we envision a world where every student is empowered with cutting-edge technological skills, 
                fostering a generation of innovators, creators, and problem-solvers.
            </p>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-left"
        >
          <h3 className="text-3xl font-bold">
            <span className="text-black font-extrabold">02</span><br /> Bridging the Learning Gap
          </h3>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            We believe in the transformative power of education and strive to bridge the gap between traditional learning and the demands of the modern world.
          </p>
        </motion.div>
      </motion.div>
      <Partners />
      <ContactExpert />
      <Footer />
    </section>
  );
}
