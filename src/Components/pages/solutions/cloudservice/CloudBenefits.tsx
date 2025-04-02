
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaCloud, FaChartBar } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

const cloudBenefits = [
  {
    icon: HiTemplate,
    title: "Agile Cloud Hosting: Scale Resources Instantly to Meet Market Demands",
    description:
      "With scalable cloud hosting, businesses can easily add or remove computing resources as required, providing them with the agility to respond quickly to changing market demands.",
  },
  {
    icon: FaCloud,
    title: "Scalable Cloud Hosting: The Power to Grow and Adapt Effortlessly",
    description:
      "Scalable cloud hosting offers the flexibility to increase or decrease resources on-demand to meet the changing needs of your business.",
  },
];

const CloudBenefits = () => {
    const navigate = useNavigate();
  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white">
            Benefit of SAP Business One Cloud service
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
            SAP Business One Cloud Services deliver a powerful and flexible solution for small to medium-sized businesses looking to modernize their operations.
          </p>
        </div>

        {/* Main Highlight */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cost-Effective Scalability with Cloud-Based Infrastructure for IT Flexibility
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The ability to scale up or down the computing resources on a cloud-based infrastructure offers businesses a cost-effective way to meet their IT requirements without having to worry about the physical limitations of traditional hardware.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            onClick={() => navigate('/contact')}
            >
              Contact Our Expert
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {cloudBenefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start space-x-6"
            >
              <div className="p-4 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-lg shadow-md">
                <item.icon className="text-3xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudBenefits;
