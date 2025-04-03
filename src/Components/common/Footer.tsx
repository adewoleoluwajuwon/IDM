import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000017] py-12 text-white">
      {/* ✅ Top Section */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
        
        {/* ✅ Brand Section */}
        <div>
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logos/idm_logo.png"
              alt="IDM Logo"
              className="h-8 transition-transform duration-300 hover:scale-105 md:h-9"
            />
          </Link>
          <p className="mt-4 text-gray-400">
            International Data Management Services Limited (IDM), incorporated in Nigeria in 1981, is affiliated with Comcraft Services Limited, United Kingdom.
          </p>
          <p className="mt-4 text-gray-400">
            <span className="font-semibold text-red-600">IDM's</span> mission is to make African enterprises globally competitive by providing <strong>perfect business processes</strong> and <strong>customer care management.</strong>
          </p>
        </div>

        {/* ✅ Services */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">SERVICE</h3>
          <div>
            <span className="font-medium text-gray-300">SAP</span>
            <ul className="mt-2 space-y-2">
              {["SAP Business One", "SAP Customer Check Out", "SAP HANA", "SAP Fiori", "School ERP"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 transition hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ Industries */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">INDUSTRIES</h3>
          <ul className="space-y-2">
            {[
              "Manufacturing", "Retail", "Logistics", "Pharmaceuticals",
              "Food & Beverage", "Oil and Gas", "Professional Services",
              "Automobile Components", "Packaging", "Electronic Component",
              "Trade & Distribution", "Recycling"
            ].map((industry, index) => (
              <li key={index}>
                <Link
                  to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 transition hover:underline"
                >
                  {industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Solutions */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">SOLUTIONS</h3>
          <ul className="space-y-2">
            {[
              "SAP Business One Add-ons",
              "Power BI",
              "Cloud Services",
              "IDM @ Schools",
              "Customer Care Service"
            ].map((solution, index) => (
              <li key={index}>
                <Link
                  to={`/solutions/${solution.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 transition hover:underline"
                >
                  {solution}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ Divider */}
      <hr className="my-8 border-gray-700" />

      {/* ✅ Bottom Section */}
      <div className="container mx-auto flex flex-col items-center justify-between px-6 text-gray-400 md:flex-row lg:px-16">
        
        {/* ✅ Social Media Links */}
        <div className="flex items-center space-x-4">
          <span>Follow us on:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-blue-500"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-blue-400"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-blue-700"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* ✅ Copyright */}
        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} <span className="font-semibold text-red-500">IDM</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
