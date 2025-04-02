'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full  text-gray-900">
      
      {/* ✅ Hero Section */}
      <div className="bg-[#fe0000] text-white py-12 px-6 md:px-12 lg:px-16 rounded-lg mt-40 mb-20 max-w-[90%] md:max-w-[70%] lg:max-w-[80%] mx-auto">

        <h4 className="text-lg">Contact Us</h4>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Connect with Our SAP Experts Today</h1>
        <p className="mt-2 text-lg">
          Get in touch to discuss how we can help your business unlock new opportunities with SAP solutions.
        </p>
      </div>

      {/* ✅ Contact Info & Form Section */}
      <div className="bg-gray-100 container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* 🔹 Left: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p className="text-gray-600 mt-2">
              Connect with our team to see how SAP can improve your company’s digital transformation.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-lg text-white"><FaEnvelope /></div>
                <span>enquiry@idmng.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-lg text-white"><FaMapMarkerAlt /></div>
                <span>28, Henry Carr Industrial Estate, Off Akanni Doherty Way, Guiness Bus/Stop, Ikeja, Lagos.</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-lg text-white"><FaPhone /></div>
                <span>+234 656 656 5655</span>
              </div>
            </div>
          </motion.div>

          {/* 🔹 Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">We're Here To Help!</h3>
            
            <form>
              {/* First Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 font-medium">First Name</label>
                  <input type="text" placeholder="Enter First Name" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
                <div>
                  <label className="block text-gray-400 font-medium">Phone Number</label>
                  <input type="text" placeholder="(123) 456 789" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Email</label>
                <input type="email" placeholder="eg email@email.com" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
              </div>

              {/* Company Type & Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-400 font-medium">Company Type</label>
                  <input type="text" placeholder="Enter Your Company" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
                <div>
                  <label className="block text-gray-400 font-medium">Designation</label>
                  <input type="text" placeholder="Enter Your Designation" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
              </div>

              {/* Enquiry Type */}
              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Enquiry Type</label>
                <select className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600">
                  <option>Demo</option>
                  <optgroup label="SAP">
                    <option>Training</option>
                  </optgroup>
                  <optgroup label="School">
                    <option>Training</option>
                    <option>IDM@School</option>
                  </optgroup>
                </select>
              </div>

              {/* Additional Info */}
              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Additional Information</label>
                <textarea rows={4} placeholder="Additional Information" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 mt-6">
                Submit
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
