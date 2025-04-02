import { useState } from "react";
import { idmSolutionsData } from "../../../../Constants/idmSolutionsData";
import { FaChevronDown } from "react-icons/fa";

const IdmSolutionAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#000017] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 text-black">
        <h2 className="text-4xl font-bold text-red-600 mb-4 sm:text-3xl">Our Solutions</h2>
        <p className="text-gray-600 mb-10">
          This solution is designed to respond to the demands of the 21st century, offering a comprehensive solution for tech education from primary to senior secondary school.
        </p>

        {idmSolutionsData.map((item, index) => (
          <div key={index} className="border-t border-gray-200 py-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="mt-4 space-y-4 transition-all duration-500 ease-in-out">
                <p className="text-gray-700">{item.description}</p>

                {item.extra && (
                  <div className="bg-[#000017] text-white p-4 rounded-lg">
                    <p className="font-semibold mb-1">IDM ROBO CAMP</p>
                    <p>{item.extra}</p>
                  </div>
                )}

                {item.image && (
                  <div className="overflow-hidden rounded-lg mt-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-[400px] object-cover rounded-lg shadow"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdmSolutionAccordion;
