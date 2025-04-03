// ✅ industries.ts - Industry Data
export interface Industry {
    title: string;
    description: string;
    image: string;
  }
  
  export const industries: Industry[] = [
    {
      title: "Manufacturing",
      description:
        "We provide manufacturing solutions that help you optimize your supply chain, improve customer experience, and drive sales.",
      image: "/images/industry-manufacturing.webp",
    },
    {
      title: "Retail",
      description:
        "Manage POS, Inventory, Cash and Integrate Back End Procurement and SKU with ease.",
      image: "/images/industry-retail.webp",
    },
    {
      title: "Logistics",
      description:
        "Functionality for complex warehousing, voluminous stock movements, bin management & distribution centres.",
      image: "/images/industry-logistics.webp",
    },
    {
      title: "Automobile component",
      description:
        "Comprehensive solution including quality management, advance production & subcontracting.",
      image: "/images/industry-automobile.webp",
    },
    {
      title: "Food & Beverages",
      description:
        "End-to-end solution for procurement, processing & distribution for food & beverages manufacturing.",
      image: "/images/industry-food.webp",
    },
    {
      title: "Oil & Gas",
      description:
        "We offer proven best-practice solutions for companies specializing in the import, export, distribution, and marketing of oil and gas products.",
      image: "/images/industry-oil-gas.webp",
    },
  ];
  