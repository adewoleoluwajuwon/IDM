'use client';

import ServiceHero from "../../../common/ServiceHero";
import SchoolERPFeatures from "./SchoolERPFeatures";
import MobileApp from "./MobileApp";
import Benefits from "./Benefits";



const SchoolERP = () => {
  return (
    <main className="">
      <ServiceHero 
        title="The School Manager (TSM)"
        subtitle="The School Manager, TSM is a cloud-based ERP solution designed exclusively 
        for educational establishments especially schools keeping in view their set of requirements. 
        It acts as a potent tool enabling and ensuring the proper functioning of the operations of the school."
        buttonText="Learn More"
        heroImage="/images/school-erp-hero.webp"
      />
      <SchoolERPFeatures />
      <MobileApp />
      <Benefits />     
    </main>
  );
};

export default SchoolERP;
