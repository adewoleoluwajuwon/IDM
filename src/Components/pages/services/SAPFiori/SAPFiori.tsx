'use client';

import ServiceHero from "../../../common/ServiceHero";
import BestPractices from "../../../common/BestPractices";
import WhySAPFiori from "./WhySAPFiori";
import SAPFioriArchitecture from "../../../common/LearnHowItWorks";

const SAPFiori = () => {
  return (
    <main className="">
      <ServiceHero 
        title="SAP Fiori"
        subtitle="SAP’s UX strategy is about the design and development of delightful 
        applications according to the SAP Fiori concept. SAP Fiori apps adhere to this 
        concept and can be deployed on-cloud or on-premise."
        buttonText="Learn More"
        heroImage="/images/hanahero.webp"
      />
      <BestPractices 
        heading="Reimagine the SAP user experience with SAP Fiori"
        description="SAP Fiori is the new user experience (UX) for SAP software. 
        It applies modern design principles for a completely reimagined user experience. 
        SAP Fiori UX represents a personalized, role-based user experience (UX) for SAP software 
        with responsive and simple user experience across devices (smart phones, tablets etc.) and deployment options. 
        Using modern design principles, it simplifies the UX across all lines of business, tasks, and devices."
      />
      <WhySAPFiori />
      <SAPFioriArchitecture 
        className="bg-gray-900"
        title="SAP Fiori Architecture"
        description1="The SAP Fiori architecture introduces the high-level architecture of SAP Fiori. 
        The SAP Fiori apps are built with SAPUI5 technology for web applications and iOS native and 
        can be used on smartphones, tablets, and desktop computers. The SAP Fiori launchpad is used 
        to launch and run the apps. The business data that is consumed in the apps is retrieved at 
        runtime from the back-end systems by using OData services."
        description2=""
        imageSrc="/images/Fiori_arch.webp"
      />
    </main>
  );
};

export default SAPFiori;
