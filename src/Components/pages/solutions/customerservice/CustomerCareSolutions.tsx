"use client";

import { useNavigate } from 'react-router-dom';

const CustomerCareSolutions = () => {
    const navigate = useNavigate();
  return (
    <section id='section' className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Solutions we offer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
          IDM is dedicated to developing a culture of Customer care development in Nigeria.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-[#000017] rounded-3xl text-white flex flex-col lg:flex-row overflow-hidden">
        {/* Left side */}
        <div className="lg:w-1/2 w-full p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact center solution</h3>
            <p className="text-base leading-relaxed mb-6 text-gray-300">
              IDM Call Center Solution provides a versatile platform for domestic (Analog/ ISDN trunk lines) 
              and international call center services (SIP trunks), utilizing advanced VoIP technology for 
              enhanced features at lower costs. Its web-based design enables global operations, while customizable 
              reports meet client needs. It’s the ultimate solution for efficient, flexible, and cost-effective call 
              center management. We provide:
            </p>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white text-black rounded-xl px-5 py-4 shadow hover:scale-[1.02] transition-all">
                <h4 className="font-semibold">Inbound Call Center Solutions</h4>
              </div>
              <div className="bg-white text-black rounded-xl px-5 py-4 shadow hover:scale-[1.02] transition-all">
                <h4 className="font-semibold">Outbound Call Center Solutions</h4>
              </div>
              <div className="bg-white text-black rounded-xl px-5 py-4 shadow hover:scale-[1.02] transition-all">
                <h4 className="font-semibold">Blended Call Center Services</h4>
              </div>
              <div className="bg-white text-black rounded-xl px-5 py-4 shadow hover:scale-[1.02] transition-all">
                <h4 className="font-semibold">Hosted Contact Center Solutions</h4>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition"
                onClick={() => navigate('/contact')}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 w-full h-full">
          <img
            src="/src/assets/images/customer-service-center.png" 
            alt="Customer Care Center"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerCareSolutions;
