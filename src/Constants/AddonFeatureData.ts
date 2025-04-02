export interface Feature {
    title: string;
    desc: string;
  }
  
  export interface Section {
    title: string;
    icon: string; // ✅ Store icon name as string
    description: string;
    features: Feature[];
  }
  
  // ✅ Complete Data for All Sections
  export const AddonFeatureData: Section[] = [
    {
      title: "Quality Control",
      icon: "FaClipboardCheck", 
      description:
        "A Quality Control Module with functionalities like Inward, Predispatch, Inprocess, and ReQC...",
      features: [
        { title: "Inward Quality Control (IQC)", 
            desc: "Key activities include inspection, testing, and verification against predefined quality standards or specifications." },
        { title: "In-process Quality Control (IPQC)", 
            desc: "This functionality involves real-time inspection, testing, and analysis of products at various stages of manufacturing to identify and address any deviations from quality standards promptly" },
        { title: "Predispatch Quality Control", 
            desc: "This functionality involves inspecting finished products or components before they are dispatched to customers or distribution centers." },
        { title: "ReQC & Rejection Handling", 
            desc: "ReQC functionality deals with products or materials that fail to meet quality standards during any stage of the production or inspection process." },
        { title: "Take your business to a new level", 
            desc: "By leveraging these integrations, businesses can ensure timely and effective distribution of critical information to stakeholders, leading to increased engagement, productivity, and overall business performance." },
      ],
    },
    {
      title: "Export & Import Management (EIXM)",
      icon: "FaShippingFast",
      description:
        "Manage Letters of Credit, licenses, shipment tracking, and cost management for international trade.",
      features: [
        { title: "Letters of Credit Management", 
            desc: "Facilitates the management of LCs issued by importers' banks to exporters, ensuring compliance with terms and conditions specified in the LC." },
        { title: "License Management", 
            desc: "Handles various types of import and export licenses required for compliance with regulatory requirements." },
        { title: "Shipment Tracking", 
            desc: "Tracks the movement of goods from the point of origin to the final destination. Integrates with logistics providers' systems to capture shipment status updates, including departure, transit, customs clearance, and delivery." },
        { title: "Shipment Cost Management", 
            desc: "Manages various costs associated with import and export shipments, including freight charges, customs duties, insurance premiums, and handling fees." },
        { title: "Take your business to a new level", 
            desc: "By leveraging these integrations, businesses can ensure timely and effective distribution of critical information to stakeholders, leading to increased engagement, productivity, and overall business performance." },
      ],
    },
    {
      title: "WhatsApp Integration",
      icon: "FaComments",
      description:
        "Enhance communication with automated WhatsApp messaging for customer support and engagement.",
      features: [
        { title: "Order Confirmation & Updates", 
            desc: "Send real-time notifications and updates to customers regarding order confirmations, shipment statuses, and service appointments. Preferred Communication Channel." },
        { title: "Customer Support", 
            desc: "Provide instant support by enabling customers to send queries and receive responses through WhatsApp." },
        { title: "Appointment Reminders", 
            desc: "Send automated reminders for service appointments, reducing no-shows and improving service efficiency." },
        { title: "Feedback & Surveys", 
            desc: "Conduct customer satisfaction surveys and gather feedback directly through WhatsApp, facilitating better customer insights." },
        { title: "Promotional Campaigns", 
            desc: "Send targeted promotional messages and offers, increasing customer engagement and driving sales." },
        { title: "Take your business to a new level", 
            desc: "Businesses can achieve higher customer satisfaction, increased sales, and streamlined operations." },
      ],
    },
    {
      title: "Report Scheduler with Email & WhatsApp",
      icon: "FaFileInvoice",
      description:
        "Automate the distribution of reports to stakeholders through their preferred communication channels.",
      features: [
        { title: "Financial Reports", 
            desc: "Schedule the distribution of monthly financial statements, balance sheets, and income statements to management via email." },
        { title: "Sales Performance", 
            desc: "Send daily or weekly sales performance summaries to sales teams and executives through WhatsApp for quick insights." },
        { title: "Inventory Management", 
            desc: "Send automated reminders for service appointments, reducing no-shows and improving service efficiency." },
        { title: "Customer Support Reports", 
            desc: "Distribute regular customer support activity reports to service managers to monitor performance and identify areas for improvement." },
        { title: "Project Updates", 
            desc: "Send project status reports to stakeholders at regular intervals, ensuring everyone is informed of progress and milestones." },
        { title: "Take your business to a new level", 
            desc: "Businesses can achieve higher customer satisfaction, increased sales, and streamlined operations." },
      ],
    },
  ];
  