 import { IconType } from "react-icons";
import { FaIndustry, FaShoppingCart, FaTruck, FaPills, FaUtensils, FaGasPump,FaBriefcase, FaCar, FaBox, FaMicrochip,
  FaStore, FaRecycle } from "react-icons/fa";

export interface Industry {
  title: string;
  description: string;
  image: string;
  icon: IconType; // Add icon field of type IconType
}

// ✅ industries.ts - Industry Data
  
  export const industries: Industry[] = [
    {
      title: "Manufacturing",
      description:
        "We provide manufacturing solutions that help you optimize your supply chain, improve customer experience, and drive sales.",
      image: "/images/industry-manufacturing.webp",
      icon: FaIndustry,
    },
    {
      title: "Retail",
      description:
        "Manage POS, Inventory, Cash and Integrate Back End Procurement and SKU with ease.",
      image: "/images/industry-retail.webp",
      icon: FaShoppingCart,
    },
    {
      title: "Logistics",
      description:
        "Functionality for complex warehousing, voluminous stock movements, bin management & distribution centres.",
      image: "/images/industry-logistics.webp",
      icon: FaTruck,
    },
    {
      title: "Automobile component",
      description:
        "Comprehensive solution including quality management, advance production & subcontracting.",
      image: "/images/industry-automobile.webp",
      icon: FaPills,
    },
    {
      title: "Food & Beverages",
      description:
        "End-to-end solution for procurement, processing & distribution for food & beverages manufacturing.",
      image: "/images/industry-food.webp",
      icon: FaUtensils, 
    },
    {
      title: "Oil & Gas",
      description:
        "We offer proven best-practice solutions for companies specializing in the import, export, distribution, and marketing of oil and gas products.",
      image: "/images/industry-oil-gas.webp",
      icon: FaGasPump,
    },
    {
      title: "Professional Services",
      description:
        "Expedite Project Management, Improve Operations Planning. Listen to Customers with CRM & Ma efficiently.",
      image: "/images/ind-pro.webp",
      icon: FaBriefcase,
    },
    {
      title: "Automobile component",
      description:
        "Comprehensive solution including quality management, advance production & subcontracting.",
      image: "/images/ind-auto.webp",
      icon:FaCar,
    },
    {
      title: "Packaging",
      description:
        "Tailored tools for production planning, inventory management, and quality control. It enhances efficiency, reduces waste, and streamlines the supply chain for packaging companies.",
      image: "/images/ind-pack.webp",
      icon: FaBox,
    },
    {
      title: "Electronic Components",
      description:
        "Handle multi-level bill of materials & assemblies for manufacturing of machines & electronic components.",
      image: "/images/ind-pack.webp",
      icon: FaMicrochip,
    },
    {
      title: "Trade & Distribution",
      description:
        "Handle Excise Trading, Wholesale & B2B Distribution, Supply Chain, Bill on Materials & much more.",
      image: "/images/ind-trade.webp",
      icon: FaStore,
    },
    {
      title: "Recycling",
      description:
        "This solution streamlines operations by providing tools for waste collection, sorting, processing, and recycling, helping companies improve efficiency, compliance, and sustainability efforts.",
      image: "/images/ind-recyc.webp",
      icon:
      FaRecycle,
    },
  ];
  