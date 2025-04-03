import { solutions } from "../../Constants/solutions";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Solutions: React.FC = () => {
  return (
    <section className="bg-[#000017] text-white py-16 px-6 md:px-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">Explore our solution</h2>
          <p className="text-gray-300 mt-4 max-w-xl">
            We strive to consistently and efficiently plan, execute and deliver
            high-quality services and results across several industries.
          </p>
        </div>

        {/* CTA Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }} // Zoom effect
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mt-6 md:mt-0 hover:bg-red-700 transition-all"
        >
          Reach out <ArrowUpRight />
        </motion.button>
      </div>

      {/* Separator Line */}
      <div className="border-t-4 border-gray-600 mt-12 mb-8 w-full"></div>

      {/* Solutions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }} // Smooth hover effect
            transition={{ duration: 0.3 }}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg relative"
          >
            {/* Card Top Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{solution.title}</h3>
              <p className="mt-2 text-gray-600">{solution.description}</p>

              {/* ✅ FIXED Rounded Button Visibility */}
              <motion.button
                whileHover={{ scale: 1.2 }} // Pop-out effect
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-1 right-1 md:top-4 md:right-4 bg-transparent border-4 border-red-600 p-2 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
              >
                <ArrowUpRight className="text-red-600 w-6 h-6 md:w-8 md:h-8" />
              </motion.button>
            </div>

            {/* Image Section */}
            <img
              src={solution.image}
              alt={solution.title}
              loading="lazy"
              className="w-full object-cover h-64 rounded-b-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
