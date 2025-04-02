'use client';

import { motion } from 'framer-motion';

// ✅ Import images
import accountingImg1 from '../../../../assets/images/school-erp-feature1.jpg';
import accountingImg2 from '../../../../assets/images/school-erp-feature2.png';
import salesImg1 from '../../../../assets/images/school-erp-feature3.png';
import salesImg2 from '../../../../assets/images/school-erp-feature4.png';
import purchasingImg from '../../../../assets/images/school-erp-feature5.png';
import integrationImg from '../../../../assets/images/school-erp-feature6.png';
import inventoryImg from '../../../../assets/images/school-erp-feature7.jpg';
import codeBaseImg1 from '../../../../assets/images/school-erp-feature8.png';
import codeBaseImg2 from '../../../../assets/images/school-erp-feature9.png';
import analyticsImg1 from '../../../../assets/images/school-erp-feature10.png';
import analyticsImg2 from '../../../../assets/images/school-erp-feature11.png';


const SchoolERPFeatures = () => {
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
          Key Modules incorporated in The School Manager (TSM)
        </motion.h2>

        {/* ✅ Section Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-400 text-center max-w-3xl mx-auto mt-4"
        >
         The modules cover complete Student Life Cycle, Management and Academics respectively with 
         an in-built provision of sending important alerts and notifications to the parents, 
         teachers and the students.
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
                <h3 className="text-lg font-semibold mt-4">Admissions Management System</h3>
                <p className="text-gray-600 mt-2">
                  Our Admissions Management solution simplifies the entire admissions process, 
                  from managing registrations to tracking follow-ups. It streamlines 
                  workflows for counselors while providing principals and management 
                  with real-time insights through daily MIS reports on inquiries, 
                  registrations, admissions, and withdrawals. The system allows 
                  data comparison with previous years, ensuring efficient student tracking at all stages..
                </p>
                <div className="relative pt-10">
                  <img src={accountingImg1} alt="Accounting Image 1" className="absolute  w-[250px] sm:w-[350px]" />
                  <img src={accountingImg2} alt="Accounting Image 2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
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
                <h3 className="text-lg font-semibold mt-4">Student Management System</h3>
                <p className="text-gray-600 mt-2">
                  Our Student Information System allows schools to monitor each student’s 
                  growth through detailed profiles with historical tracking. It streamlines 
                  key processes like promotion, suspension, and withdrawals, integrates with fees 
                  and attendance, and supports paperless document management. 
                  Standard features include data filtering, searching, 
                  and generating over 15 statutory reports.
                </p>
                <div className="relative pt-10">
                  <img src={salesImg1} alt="Sales Image 1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src={salesImg2} alt="Sales Image 2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
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
            <h3 className="text-lg font-semibold">Attendance Management</h3>
            <p className="text-gray-600 mt-2">
              Our Student Attendance Module offers real-time attendance tracking for schools and parents, 
              with a dashboard displaying absent students and daily attendance filtered by section or student. 
              Teachers can record attendance via a mobile app, while leave applications 
              are managed online. Principals and management can analyze attendance statistics through graphical reports.
            </p>
            <img src={purchasingImg} alt="Purchasing" className="mt-4 rounded-lg" />
          </motion.div>

          {/* Feature 4: Inventory and Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
            className="bg-[#f9fafb] text-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">Examination and Grading System</h3>
            <p className="text-gray-600 mt-2">
              Our Examination Module allows schools to assess student performance through detailed mark, 
              grade, and remark entries. Customized report cards can be generated, printed, 
              and published online or via the mobile app. Schools can also extract teacher performance reports, 
              while conducting graphical and range analyses to track overall progress effectively.
            </p>
            <img src={inventoryImg} alt="Inventory" className="mt-4 rounded-lg" />
          </motion.div>

          {/* Feature 4: Inventory and Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }} 
            className="bg-[#f9fafb] text-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">Lesson Planning</h3>
            <p className="text-gray-600 mt-2">
              Our Lesson Planning Module simplifies the complex task of planning the academic year's curriculum, 
              helping schools organize and assign sessions efficiently. 
              It features a Teacher’s Calendar with lesson plans, schedules, and statuses, viewable by authorities. 
              The module is fully customizable, allowing teachers to modify fields and 
              create personalized lesson plans to meet specific needs.
            </p>
            <img src={integrationImg} alt="analyticsImg1" className="mt-4 rounded-lg" />
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
                <h3 className="text-lg font-semibold mt-4">Library Management</h3>
                <p className="text-gray-600 mt-2">
                  Our Library Management Module provides a comprehensive dashboard for managing multiple libraries, 
                  with an ISBN auto-fill feature for book details and barcode creation. 
                  It efficiently manages books and periodicals, allowing schools to generate reports on issued, 
                  returned, and pending books. 
                  The system streamlines library operations and enhances organization.
                </p>
                <div className="relative pt-10">
                  <img src={codeBaseImg1} alt="codeBaseImg1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src={codeBaseImg2} alt="codeBaseImg2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
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
                <h3 className="text-lg font-semibold mt-4">Employee Management System</h3>
                <p className="text-gray-600 mt-2">
                  Our Staff Management Module helps schools maintain detailed employee profiles, 
                  with customizable fields to suit specific needs. It manages records of qualifications, 
                  employment history, promotions, and class allocations, while tracking document expiration and renewal deadlines. 
                  This system ensures organized, up-to-date records for teachers, administrative staff, and other personnel.
                </p>
                <div className="relative pt-10">
                  <img src={analyticsImg1} alt="analyticsImg1" className="absolute w-[250px] sm:w-[350px]" />
                  <img src={analyticsImg2} alt="analyticsImg2" className="absolute right-0 translate-y-1/2 w-[250px] sm:w-[350px]" />
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolERPFeatures;
