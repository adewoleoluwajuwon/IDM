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
      image: "/src/assets/images/industry-manufacturing.png",
      icon: FaIndustry,
    },
    {
      title: "Retail",
      description:
        "Manage POS, Inventory, Cash and Integrate Back End Procurement and SKU with ease.",
      image: "/src/assets/images/industry-retail.png",
      icon: FaShoppingCart,
    },
    {
      title: "Logistics",
      description:
        "Functionality for complex warehousing, voluminous stock movements, bin management & distribution centres.",
      image: "/src/assets/images/industry-logistics.png",
      icon: FaTruck,
    },
    {
      title: "Automobile component",
      description:
        "Comprehensive solution including quality management, advance production & subcontracting.",
      image: "/src/assets/images/industry-automobile.png",
      icon: FaPills,
    },
    {
      title: "Food & Beverages",
      description:
        "End-to-end solution for procurement, processing & distribution for food & beverages manufacturing.",
      image: "/src/assets/images/industry-food.png",
      icon: FaUtensils, 
    },
    {
      title: "Oil & Gas",
      description:
        "We offer proven best-practice solutions for companies specializing in the import, export, distribution, and marketing of oil and gas products.",
      image: "/src/assets/images/industry-oil-gas.png",
      icon: FaGasPump,
    },
    {
      title: "Professional Services",
      description:
        "Expedite Project Management, Improve Operations Planning. Listen to Customers with CRM & Manage assets efficiently.",
      image: "/src/assets/images/ind-pro.png",
      icon: FaBriefcase,
    },
    {
      title: "Automobile component",
      description:
        "Comprehensive solution including quality management, advance production & subcontracting.",
      image: "/src/assets/images/ind-auto.png",
      icon:FaCar,
    },
    {
      title: "Packaging",
      description:
        "Tailored tools for production planning, inventory management, and quality control. It enhances efficiency, reduces waste, and streamlines the supply chain for packaging companies.",
      image: "/src/assets/images/ind-pack.png",
      icon: FaBox,
    },
    {
      title: "Electronic Components",
      description:
        "Handle multi-level bill of materials & assemblies for manufacturing of machines & electronic components.",
      image: "/src/assets/images/ind-pack.png",
      icon: FaMicrochip,
    },
    {
      title: "Trade & Distribution",
      description:
        "Handle Excise Trading, Wholesale & B2B Distribution, Supply Chain, Bill on Materials & much more.",
      image: "/src/assets/images/ind-trade.png",
      icon: FaStore,
    },
    {
      title: "Recycling",
      description:
        "This solution streamlines operations by providing tools for waste collection, sorting, processing, and recycling, helping companies improve efficiency, compliance, and sustainability efforts.",
      image: "/src/assets/images/ind-recyc.png",
      icon:
      FaRecycle,
    },
  ];
  