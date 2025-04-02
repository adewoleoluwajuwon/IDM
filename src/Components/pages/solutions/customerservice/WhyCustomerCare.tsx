
"use client";
import { FaClock, FaUsers, FaChartBar, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "24/7 Multilingual Support",
    icon: <FaClock size={30} />,
    description: "Our agents are available around the clock in multiple languages to assist your global audience with professionalism and empathy.",
  },
  {
    title: "Scalable Teams",
    icon: <FaUsers size={30} />,
    description: "Whether you're a startup or an enterprise, we can scale our support teams to match your needs without compromising on quality.",
  },
  {
    title: "Integrated CRM & Analytics",
    icon: <FaChartBar size={30} />,
    description: "Track, analyze, and optimize your customer interactions with our fully integrated analytics and CRM tools.",
  },
  {
    title: "Remote & On-Site Agents",
    icon: <FaHeadset size={30} />,
    description: "Choose between in-office or remote agents depending on your business goals and support requirements.",
  },
];

const WhyCustomerCare = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto mb-14">
        <h2 className="text-4xl font-bold mb-4">Why Our Customer Care Stands Out</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We combine technology, training, and talent to deliver exceptional customer experiences at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCustomerCare;
