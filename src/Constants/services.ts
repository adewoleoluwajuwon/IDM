// Import images directly from the correct path
import sapBusinessOne from "../assets/images/sap-business-one.png";
import sapCloud from "../assets/images/sap-cloud.png";
import idmSchool from "../assets/images/idm-school.png";
import schoolErp from "../assets/images/school-erp.png";

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
    image: sapBusinessOne, // ✅ Use imported image
  },
  {
    title: "SAP Cloud",
    description: "B1Cloud is a Premium Cloud Hosting for SAP Business One, SQL & HANA at the fraction of the cost. It's an ideal cloud-based solution for MSMEs to run and reap all the benefits of SAP Business One without having to invest in infrastructure & complete peace of mind.",
    image: sapCloud,
  },
  {
    title: "IDM @ School",
    description: "Realizing the importance of starting ICT education early, IDM has a fully developed program to offer IT education to school children from elementary levels.",
    image: idmSchool,
  },
  {
    title: "School ERP",
    description: "School ERP systems help schools maintain accurate records, ensure smooth operations, and improve transparency and accountability.",
    image: schoolErp,
  },
];
