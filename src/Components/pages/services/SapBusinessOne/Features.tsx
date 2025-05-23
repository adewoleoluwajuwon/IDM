'use client';

import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="section" className="w-full bg-[#0A0A1A] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pb-10">
        
        {/* ✅ Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center md:text-5xl"
        >
          Features of SAP Business One
        </motion.h2>

        {/* ✅ Section Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-400 text-center max-w-3xl mx-auto mt-4"
        >
          SAP S/4HANA offers a wide range of capabilities that cover critical business processes 
          such as finance, supply chain management, manufacturing, sales, and procurement.
        </motion.p>

        {/* ✅ Features Grid (First Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
          {/* Feature 1: Accounting and Financials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden min-h-[700px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
              className="bg-[#f9fafb] rounded-lg shadow-lg transition-all duration-300 p-4 w-full max-w-[100%] mx-auto"
            >
                <h3 className="text-lg font-semibold mt-4">Accounting and Financials</h3>
                <p className="text-gray-600 mt-2">
                  Manage your general ledger, journals, budgets, and accounts receivable and payable. 
                  Payment runs, real-time financial numbers, drill down, and full multi-currency capabilities.
                </p>
                <div className="relative pt-10">
                  <img src="/images/feature1.webp" alt="Accounting Image 1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src="/images/feature2.webp" alt="Accounting Image 2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
                </div>
            </motion.div>
          </motion.div>

          {/* Feature 2: Sales and Customer Management */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden min-h-[700px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
              className="bg-[#f9fafb] rounded-lg shadow-lg transition-all duration-300 p-4 w-full max-w-[100%] mx-auto"
            >
                <h3 className="text-lg font-semibold mt-4">Sales and Customer Management</h3>
                <p className="text-gray-600 mt-2">
                  Manage the entire sales process from first contact to closing the sale, including customer data management and after-sales support.
                </p>
                <div className="relative pt-10">
                  <img src="/images/feature3.webp" alt="Sales Image 1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src="/images/feature4.webp" alt="Sales Image 2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
                </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ✅ Features Grid (Features Third Row - Spaced Out Correctly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {/* Feature 3: Purchasing and Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
            className="bg-[#f9fafb] text-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">Purchasing and Operations</h3>
            <p className="text-gray-600 mt-2">
                Control the entire procurement process. Materials resource planning, minimum inventory levels and production planning. 
                Schedule your material and production requirements.
            </p>
            <img src="/images/feature5.webp" alt="Purchasing" className="mt-4 rounded-lg" />
          </motion.div>

          {/* Feature 4: Inventory and Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
            className="bg-[#f9fafb] text-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">Inventory and Distribution</h3>
            <p className="text-gray-600 mt-2">
                Manage inventory across multiple warehouses and locations, and track and record stock movements. 
                Moving average, FIFO and standard costing methods. Manage serial and batch items. Multiple units of measure.
            </p>
            <img src="/images/feature7.webp" alt="Inventory" className="mt-4 rounded-lg" />
          </motion.div>

          {/* Feature 4: Inventory and Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
            className="bg-[#f9fafb] text-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">Integration with SAP Crystal Reports</h3>
            <p className="text-gray-600 mt-2">
                Software lets you design and deliver reports via the Web or embedded in enterprise applications.
            </p>
            <img src="/images/feature6.webp" alt="analyticsImg1" className="mt-4 rounded-lg" />
          </motion.div>
        </div>

        {/* ✅ Features Grid (First Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12">
          {/* Feature 1: Accounting and Financials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden min-h-[700px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
              className="bg-[#f9fafb] rounded-lg shadow-lg transition-all duration-300 p-4 w-full max-w-[100%] mx-auto"
            >
                <h3 className="text-lg font-semibold mt-4">Universal code base</h3>
                <p className="text-gray-600 mt-2">
                    40 countries supports different time zones and helps you Comply with legal requirements Integration with on-demand Web services, 
                    cloud-based applications, and mobile devices provides anywhere, anytime access to tools and information.
                </p>
                <div className="relative pt-10">
                  <img src="/images/feature8.webp" alt="codeBaseImg1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src="/images/feature9.webp" alt="codeBaseImg2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
                </div>
            </motion.div>
          </motion.div>

          {/* SAP Business One Analytics Powered by HANA */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden min-h-[700px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
              className="bg-[#f9fafb] rounded-lg shadow-lg transition-all duration-300 p-4 w-full max-w-[100%] mx-auto"
            >
                <h3 className="text-lg font-semibold mt-4">SAP Business One Analytics Powered by HANA</h3>
                <p className="text-gray-600 mt-2">
                    Delivers in-memory technology and analytics innovations without disruption to the customer’s business.
                </p>
                <div className="relative pt-10">
                  <img src="/images/feature10.webp" alt="analyticsImg1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src="/images/feature11.webp" alt="analyticsImg2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
