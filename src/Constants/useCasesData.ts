// src/constants/useCasesData.ts

export interface UseCase {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  export const useCasesData: UseCase[] = [
    {
      id: 1,
      title: "Hospitality",
      description:
        "Optimized user interface to be used in catering and hospitality businesses. From fast food chains, kiosks, food trucks, to takeaway shops. Table management functionality enables you to run SAP Customer Checkout in cafés, restaurants, bars, or serving staff can use traditional point-of-sale devices or handheld devices for taking orders.",
      image: "/images/hospitality.webp",
    },
    {
      id: 2,
      title: "Retail",
      description:
        "From fashion and grocery stores, electronics, professional services, to wholesale distribution. All common requirements that are needed in a store or shop. Provide a unique customer experience and offer value-added sales services.",
      image: "/images/retail.webp",
    },
    {
      id: 3,
      title: "Sports and Entertainment",
      description:
        "For a sports club, merchandise shop, stadium, or other entertainment and culture venue, SAP Customer Checkout helps you to optimize your POS operations. Engage with your fans and customers.",
      image: "/images/sports.webp",
    },
  ];
  
  