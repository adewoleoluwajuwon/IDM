"use client";

import ServiceHero from "../../../common/ServiceHero";
import BestPractices from "../../../common/BestPractices";
import CloudBenefits from "./CloudBenefits";

const CloudServices = () => {
  return (
    <main>
      <ServiceHero 
        title="We provides highly scalable and affordable SAP Business one Cloud servers"
        subtitle="Our Cloud services empower 
        companies to streamline their operations, 
        gain real-time business insights, and maintain 
        cost-efficiency without the need for on-premise infrastructure."
        buttonText="Learn More"
        heroImage="/images/cloud-services-hero.webp"
    />

    <BestPractices 
        heading="SAP Business One Cloud service ensures lightning-fast, efficient business management."
        description="We offer optimized and scalable hosting
         for both SAP Business One for SQL and version for HANA.
         Our servers are sized as per the recommendations of SAP 
         and best practices in the industry. We have automated full 
         backups every day and transaction log backups every hour. 
         One copy of daily full backup is stored on offsite cloud for long term storage. 
         Upgrades are maintained as and when required."
    />
    <CloudBenefits />
    </main>
  )
}

export default CloudServices
