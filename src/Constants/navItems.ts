export interface NavItem {
  path: string;
  label: string;
  description?: string;
  icon?: string; // Add this line
  links: NavItem[];
}

  
const navItems: NavItem[] = [
  {
    path: "/services",
    label: "Services",
    icon: "mdi:cog", // Example icon
    links: [
      {
        path: "/services/sap-business-one",
        label: "SAP Business One",
        description: "SAP Business One: Unparalleled ERP for small and medium-sized enterprises, integrating CRM, sales, inventory, and financials.",
        icon: "mdi:database",
        links: [],
      },
      {
        path: "/services/sap-customer-checkout",
        label: "SAP Customer Check Out",
        description: "It integrates seamlessly with other SAP systems, allowing businesses to manage sales transactions, inventory, and customer data efficiently.",
        icon: "mdi:cart",
        links: [],
      },
      {
        path: "/services/sap-hana",
        label: "SAP HANA",
        description: "SAP HANA: Designed to handle high volumes of transactional and analytical data in real time, enabling businesses to process large amounts of data quickly and efficiently.",
        icon: "mdi:server",
        links: [],
      },
      {
        path: "/services/sap-fiori",
        label: "SAP Fiori",
        description: "SAP Fiori: Designed to make SAP software easier to use by focusing on the needs and tasks of end-users, enhancing productivity and efficiency.",
        icon: "mdi:application",
        links: [],
      },
      {
        path: "/services/school-erp",
        label: "School ERP",
        description: "School ERP systems help schools maintain accurate records, ensure smooth operations, and improve transparency and accountability.",
        icon: "fa6-solid:school-lock", // Your icon here
        links: [],
      },
    ],
  },
  {
    path: "/industries",
    label: "Industries",
    icon: "mdi:factory",
    links: [
      { 
        path: "/industries/manufacturing", 
        label: "Manufacturing", 
        description: "We serve a diverse range of manufacturing industries, including both discrete and process manufacturing. Our expertise extends to tools, machines, and beyond.", 
        icon: "ph:factory-light", 
        links: [] 
      },

      { 
        path: "/industries/retail", 
        label: "Retail", 
        description: "Manage POS, Inventory, Cash and Integrate Back End Procurement and SKU with ease", 
        icon: "fluent:building-retail-20-regular", 
        links: [] 
      },

      { 
        path: "/industries/logistics", 
        label: "Logistics", 
        description: "Functionality for complex warehousing, voluminous stock movements, bin management &amp; distribution centres.", 
        icon: "ph:van",
        links: [] 
      },
      { 
        path: "/industries/pharmaceuticals", 
        label: "Pharmaceuticals", 
        description: "Comprehensive solution including recipe management, quality controls costing, batch management &amp; traceability.", 
        icon: "ph:asclepius", 
        links: [] 
      },
      { 
        path: "/industries/food-beverages", 
        label: "Food & Beverages", 
        description: "End to end solution for procurement, processing &amp; distribution for mfood &amp; beverages anufacturing", 
        icon: "ph:popcorn", 
        links: [] 
      },
      { 
        path: "/industries/oil-gas", 
        label: "Oil & Gas", 
        description: "We offer proven best-practice solutions for companies specializing in the import, export, distribution, and marketing of oil and gas products.", 
        icon: "ph:gas-pump", 
        links: []
      },
      { 
        path: "/industries/elec-component", 
        label: "Electronic component ", 
        description: "Handle multi-level bill of materials &amp; assemblies for manufacturing of machines &amp; electronic components.", 
        icon: "ph:lightning-light", 
        links: []
      },
      { 
        path: "/industries/trade-distribution", 
        label: "Trade & Distribution", 
        description: "Handle Excise Trading, Wholesale &amp; B2B Distribution, Supply Chain, Bill on Materials &amp; much more.", 
        icon: "game-icons:trade", 
        links: []
      },
      { 
        path: "/industries/recycling", 
        label: "Recycling", 
        description: "This solution streamlines operations by providing tools for waste collection, sorting, processing, and recycling, helping companies improve efficiency, compliance, and sustainability efforts.", 
        icon: "ph:recycle-light", 
        links: []
      },
    ],
  },
  {
    path: "/solutions",
    label: "Solutions",
    icon: "mdi:lightbulb-on",
    links: [
      { 
        path: "/solutions/sap-business-one-add-ons", 
        label: "SAP Business One Add-ons", 
        description: "SAP Business One: Unparalleled ERP for small and medium-sized enterprises, integrating CRM, sales, inventory, and financials.", 
        icon: "ph:briefcase-light", 
        links: [] 
      },
      { 
        path: "/solutions/power-bi", 
        label: "Power BI", 
        description: "SAP Business One: Unparalleled ERP for small and medium-sized enterprises, integrating CRM, sales, inventory, and financials.", 
        icon: "logos:microsoft-power-bi", 
        links: [] 
      },
      { 
        path: "/solutions/cloud-services", 
        label: "Cloud-Services", 
        description: "provision of on-demand access to computing resources, such as servers, storage, databases, networking, software, and analytics, over the internet.", 
        icon: "hugeicons:cloud", 
        links: [] 
      },
      { 
        path: "/solutions/idm-school", 
        label: "IDM @ School", 
        description: "Realizing the importance of starting ICT education early, IDM has a fully developed program to offer IT education to school children from elementary levels.", 
        icon: "ph:chalkboard-teacher-light", 
        links: [] 
      },
      { 
        path: "/solutions/cust-care-services", 
        label: "Customer Care Services", 
        description: "Manage customer interactions across various communication channels, such as voice calls, emails, chat, and social media.", 
        icon: "ph:headset", 
        links: [] 
      },
    ],
  },
];

export default navItems;
