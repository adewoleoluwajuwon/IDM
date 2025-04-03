"use client";

const ConferencePromotions = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Promotions of events, exhibitions and conferences
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            IDM has rich experience in promoting exhibitions like Propak West Africa, ConMin, Cashless Africa, Indo-Africa, and many more., through our well-equipped automated call center & verified database of the different Industry segments. We offer the following services to companies in the areas of exhibitions / conferences:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-gray-300">
            <li>Data base creation / search with in industry segments.</li>
            <li>Identification & contact data gathering of the key decision makers / influencers within the organization.</li>
            <li>Introducing / Promoting the exhibition / conference to the target audience via Phone call / email / SMS /</li>
            <li>Registration / Reminder services for the event.</li>
          </ul>

          <button className="mt-8 bg-red-600 hover:bg-red-700 transition duration-300 text-white font-medium px-6 py-3 rounded-lg">
            Learn more
          </button>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col gap-6">
            <img
                src="/images/customer-care-agent-3.webp"
                alt="Agent 1"
                className="w-3/4 h-auto object-cover rounded-lg shadow-md"
            />
            <img
                src="/images/customer-care-agent-1.webp"
                alt="Agent 2"
                className="w-3/4 h-auto object-cover rounded-lg shadow-md"
            />
            <img
                src="/images/customer-care-agent-2.webp"
                alt="Agent 3"
                className="w-3/4 h-auto object-cover rounded-lg shadow-md"
            />
            </div>
        </div>
    </section>
  );
};

export default ConferencePromotions;
