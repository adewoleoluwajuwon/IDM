import { IconType } from "react-icons";  // Import IconType for proper typing
import { FaMobileAlt, FaShoppingCart, FaGift, FaChartLine, FaLightbulb, FaSyncAlt } from "react-icons/fa";

export interface Feature {
  icon: IconType;  // Store the icon component instead of JSX
  title: string;
  description: string[];
}

// ✅ SAP Customer Checkout Features Data
export const sapCheckoutFeatures: Feature[] = [
  {
    icon: FaShoppingCart,  // Pass the component reference, not JSX
    title: "POINT-OF-SALE (POS)",
    description: [
      "Rich POS functionalities for different business scenarios - retail, merchandise, catering, or sports and entertainment.",
      "From sales, returns, payments, to discounts.",
      "Manage all POS systems in different shops centrally using SAP Customer Checkout manager.",
    ],
  },
  {
    icon: FaSyncAlt,
    title: "INTEGRATION",
    description: [
      "Benefit from the integration flexibility.",
      "Use SAP Customer Checkout as standalone without SAP ERP systems, or",
      "Integrated with SAP S/4HANA, SAP Business One, or SAP Business ByDesign to transmit transactions to your warehouse management and accounting applications.",
    ],
  },
  {
    icon: FaLightbulb,
    title: "LOYALTY",
    description: [
      "Gain insights on customer purchase history.",
      "Offer personalized loyalty programs to your customers.",
      "Define your own point calculation, and let your customers collect and redeem loyalty points.",
      "Integrate a mobile app to view, collect, and redeem loyalty points.",
    ],
  },
  {
    icon: FaGift,
    title: "COUPONS & GIFT CARDS",
    description: [
      "Reward your customers with personalized coupons directly in your POS.",
      "Sell gift cards to loyal customers and redeem them completely or partially.",
      "Central gift card reports and insights.",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "MOBILE ORDER",
    description: [
      "Let your customers order food and beverages via their smartphone.",
      "Offer to customers your different assortments.",
      "Let your customers pay in advance - cashless, and via smartphone.",
      "Order and pick up.",
      "Reduce waiting time for your customers to order menu.",
    ],
  },
  {
    icon: FaChartLine,
    title: "REPORTING & ANALYTICS",
    description: [
      "Access real-time reports and track revenue per shop, cashier, or sales item.",
      "Keep your financial results under control.",
      "Analyze sales data in SAP Customer Checkout manager.",
      "Explore detailed insights when integrated with SAP S/4HANA, SAP Business One, SAP Business ByDesign, and SAP Analytics Cloud.",
    ],
  },
];
