export interface AddonService {
    title: string;
    description: string;
    icon: string; // ✅ Store icon as a string
  }
  
  // ✅ Complete Add-on Services Data
  export const AddonServicesData: AddonService[] = [
    { title: "QC", description: "Inward, In-process, Pre-dispatch, Re-work", icon: "FaTruckLoading" },
    { title: "EXIM", description: "Import, Export, Advance License Management, Forward Contract", icon: "FaPlane" },
    { title: "CBOM", description: "Bill of Material, Production Order Approval", icon: "FaFileInvoiceDollar" },
    { title: "AUTO Batch", description: "Inward batch auto generation", icon: "FaCogs" },
    { title: "Email, SMS, Whatsapp", description: "Email/SMS by time base/trigger base", icon: "FaEnvelope" },
    { title: "Add-on Connectivity", description: "Status of the connected add-on", icon: "FaPlug" },
    { title: "Job Work", description: "Issue to job work and receipt from job work process", icon: "FaBriefcase" },
    { title: "Gate pass including gate inward and outward", description: "Visitor pass and material inward and outward", icon: "FaDoorOpen" },
    { title: "HRMS", description: "Attendance management system", icon: "FaUsersCog" },
    { title: "Pick List", description: "Based on city pick list generation from sales order", icon: "FaTags" },
    { title: "Transport Management", description: "Shipment management", icon: "FaTruckMoving" },
    { title: "Goods In Transit", description: "Tracking based on the supplier send materials to company", icon: "FaShippingFast" },
    { title: "QCR (Quotation Comparison Report)", description: "Quotation comparison history report", icon: "FaCalculator" },
    { title: "Auto Entry Add-on", description: "Auto JE and Auto landed cost", icon: "FaUserCog" },
    { title: "E-Way Bill/E-Invoice For India", description: "Synchronization of the customer to portal", icon: "FaFileInvoice" },
    { title: "E-Invoice For Kenya", description: "E-Invoice for Kenya", icon: "FaFileContract" },
    { title: "Auto Goods Issue", description: "Same as name suggested", icon: "FaShieldAlt" },
    { title: "Customized Approved Process", description: "Same as name suggested", icon: "FaClipboardCheck" },
    { title: "Calculation of Quantity Based on BOM Tree", description: "For using calculation quantity to required production or purchase", icon: "FaProjectDiagram" },
    { title: "Digital Signature", description: "Digital signature", icon: "FaSignature" },
  ];
  