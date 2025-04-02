"use client";

import { useNavigate } from 'react-router-dom';

const CustomerServiceOutsourcing = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 bg-white shadow-xl rounded-2xl p-8 md:p-12">
        {/* Image Section */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="/src/assets/images/customer-service-outsource.png"
            alt="Customer service outsourcing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customer service outsourcing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a leading customer service outsourcing company, IDM specializes
            in enhancing call center processes to ensure exceptional customer
            support. With professional agents handling inbound and outbound
            interactions across phone, email, social media, and mobile, we help
            maintain positive customer relationships.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            IDM prioritizes consistency, professionalism, and efficiency,
            working closely with your team to create seamless, tailored
            solutions that make outsourcing customer service simple and
            effective.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceOutsourcing;
