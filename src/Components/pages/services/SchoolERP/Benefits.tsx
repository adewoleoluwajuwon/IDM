"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaUserTie } from "react-icons/fa";

const benefitsData = [
  {
    icon: <FaUserTie size={30} />,
    title: "Management of the School",
    description: [
      "Access to critical information from all the departments in a timely manner.",
      "Access to critical information from all the departments in a timely manner.",
      "Organized pieces of information for a detailed analysis and deductions.",
      "Better Interaction with the staff members, parents, and the students.",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: "Staff Members",
    description: [
      "Convenience in uploading scores, assignments, projects for the classes assigned through the mentor dashboard.",
      "Managing profile, leaves and holidays.",
      "Enable to apply for leaves and other benefits through the exclusive dashboard.",
      "Determining Key Performance Indicators and taking up new responsibility if assigned.",
    ],
  },
  {
    icon: <FaUserGraduate size={30} />,
    title: "Students",
    description: [
      "View Examination Date sheet.",
      "View mark sheet for each term/semester and comparative analysis.",
      "Online submission of homework and assignments.",
      "Submission of write-ups and articles for school magazines and journals.",
      "Access to important notices, circulars, and school calendar.",
      "Search and reserve books online in library.",
    ],
  },
  {
    icon: <FaUsers size={30} />,
    title: "Parents/Guardians",
    description: [
      "Access to every piece of information regarding their ward(s) including fees, library, activity, discipline, health, attendance, examination, etc.",
      "Receive alerts for attendance, fee reminders, exam results, PTMs, etc.",
      "Direct Interaction with teacher(s) on any relevant issue.",
      "Provision to download Certificates.",
    ],
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#0A0A1A] text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl text-center">
        {/* ✅ Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
        >
          Benefits of Our Mobile App
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          TSM benefits everyone involved in schooling, including school management, teachers, and students, by streamlining processes and enhancing overall efficiency.
        </motion.p>
      </div>

      {/* ✅ Benefits Grid */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#12122A] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* Icon with animation */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-red-600 p-4 rounded-full text-white shadow-lg"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>

            <ul className="mt-4 text-gray-300 list-disc list-inside">
              {benefit.description.map((point, i) => (
                <li key={i} className="mt-2">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
