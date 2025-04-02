"use client";
import { motion } from "framer-motion";
import { PowerbiWhatWeDoData } from "../../../../Constants/PowerbiWhatWeDoData";

const PowerbiWhatWeDo = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-red-900 via-black to-red-500 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white dark:text-white">
            What We Can Do With Power BI
          </h2>
          <p className="mt-4 text-gray-100 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We empower your business with tailored solutions, from integration
            to full dashboard customization.
          </p>
        </div>

        {PowerbiWhatWeDoData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${item.bgGradient} rounded-3xl px-8 py-12 text-white flex flex-col ${
              item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center mb-16 gap-12 shadow-xl hover:shadow-2xl transition-all duration-500`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-3/4 rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="mb-6 leading-relaxed text-white/90">
                {item.description}
              </p>
              <button className="bg-white text-black hover:bg-red-600 hover:text-white transition px-6 py-2 rounded-md font-medium">
                Contact Us
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PowerbiWhatWeDo;
