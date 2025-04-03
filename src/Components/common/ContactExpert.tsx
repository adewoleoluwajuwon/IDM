'use client';

import { useNavigate } from 'react-router-dom';

const ContactExpert = () => {  
  const navigate = useNavigate(); // ✅ React Router navigation

  return (
    <section className="w-full bg-white py-12"> 
      <div className="wrapper mt-5">
        <div className="w-30 relative ml-20 mr-20 overflow-hidden rounded-xl bg-[#FFDADA] px-10 py-24 min-[450px]:py-16 sm:px-16">
          <img 
            src="/images/snaky-pattern.webp"
            alt="Snaky Pattern" 
            loading="lazy"
            className="absolute top-0 -left-4"
          />
          
          <div className="flex items-center justify-center">
            <div className="min-[400px]:w-10/12 sm:w-7/12 z-[12] flex items-center justify-center flex-col">
              <p className="text-[#4E4949]">
                Learn how IDM can help your business scale the final piece in the puzzle of uninterrupted growth of your business.
              </p>

              {/* ✅ Updated Button to Navigate to Contact Page */}
              <div className="pt-9">
                <button 
                  className="bg-red-600 sm:text-base text-sm md:text-lg font-bold text-white bg-primary rounded-[8px] py-3 px-3 sm:px-5"
                  onClick={() => navigate('/contact')} // ✅ Navigates to Contact Page
                >
                  Contact Our Expert
                </button>
              </div>
            </div>

            <img src="/images/pattern-img1.webp" alt="Pattern 1" className="absolute top-0 right-16 w-[140px] min-[968px]:right-28 min-[968px]:w-[208px]" loading="lazy" />
            <img src="/images/pattern-img2.webp" alt="Pattern 2" className="absolute top-0 -right-2 w-[105px] min-[968px]:-right-4 min-[968px]:w-[185px]" loading="lazy" />
            <img src="/images/pattern-img3.webp" alt="Pattern 3" className="absolute right-8 top-10 w-[95px] min-[968px]:top-20 min-[968px]:right-24 z-10 min-[968px]:w-[175px]" loading="lazy" />
            <img src="/images/pattern-img4.webp" alt="Pattern 4" className="absolute bottom-0 -right-4 w-[128px] min-[968px]:-right-3 min-[968px]:w-[220px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactExpert;
