'use client';
import ServiceHero from "../../../common/ServiceHero";
import AddonFeatures from "./AddonFeatures";
import AddonServices from "./AddonServices";

const SAPBusinessOneAddon = () => {
  return (
    <main>
      <ServiceHero 
              title="SAP Business one Add-ons"
              subtitle="Integrating a report scheduler with email 
              and WhatsApp within SAP Business One offers significant benefits, 
              including automation, enhanced communication, improved efficiency, 
              and better decision-making."
              buttonText="Learn More"
              heroImage="/images/solutions-hero.webp"
        />
        <AddonFeatures />
        <AddonServices />
    </main>
  )
}

export default SAPBusinessOneAddon
