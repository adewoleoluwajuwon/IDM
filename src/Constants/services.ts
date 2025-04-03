
// Define the type for a service
export interface Service {
  title: string;
  description: string;
  image: string;
}

// Export the services array with correct typing
export const services: Service[] = [
  {
    title: "SAP Business One",
    description: "SAP Business One: Unparalleled ERP for small and medium-sized enterprises, integrating CRM, sales, inventory, and financials.",
    image: "/images/sap-business-one.webp",
  },
  {
    title: "SAP Cloud",
    description: "B1Cloud is a Premium Cloud Hosting for SAP Business One, SQL & HANA at the fraction of the cost. It's an ideal cloud-based solution for MSMEs to run and reap all the benefits of SAP Business One without having to invest in infrastructure & complete peace of mind.",
    image: "/images/sap-cloud.webp",
  },
  {
    title: "IDM @ School",
    description: "Realizing the importance of starting ICT education early, IDM has a fully developed program to offer IT education to school children from elementary levels.",
    image: "/images/idm-school.webp",
  },
  {
    title: "School ERP",
    description: "School ERP systems help schools maintain accurate records, ensure smooth operations, and improve transparency and accountability.",
    image: "/images/school-erp.webp",
  },
];
