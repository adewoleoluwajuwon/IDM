"use client";
import { FaUsers, FaDesktop, FaFileAlt, FaCompressArrowsAlt } from "react-icons/fa";

const features = [
  {
    title: "Experienced Educators",
    description:
      "Our team of highly qualified and passionate educators are committed to providing personalized and engaging learning experiences.",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "We offer modern, well-equipped computer labs, providing students with hands-on experience using the latest technology.",
    icon: <FaDesktop className="text-white text-2xl" />,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum is designed to be dynamic and adaptable, reflecting the latest industry trends and technological advancements.",
    icon: <FaFileAlt className="text-white text-2xl" />,
  },
  {
    title: "Holistic Development",
    description:
      "We focus on the overall development of our students, fostering not only technical skills but also critical thinking, creativity, and collaboration.",
    icon: <FaCompressArrowsAlt className="text-white text-2xl" />,
  },
];

const WhyIdmSchool = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <h2 className="text-4xl font-bold mb-2">Why IDM@School</h2>
          <p className="text-gray-600 text-lg">
            The curriculum covers from pre-primary to senior secondary school.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-red-600 hover:text-white transition-all duration-300 rounded-xl shadow p-8 group cursor-pointer"
            >
              <div className="bg-red-700 w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIdmSchool;
