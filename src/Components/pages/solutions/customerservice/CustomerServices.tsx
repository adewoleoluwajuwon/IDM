"use client";

import ServiceHero from "../../../common/ServiceHero";
import WhyCustomerCare from "./WhyCustomerCare";
import CustomerCareSolutions from "./CustomerCareSolutions";
import CustomerServiceOutsourcing from "./CustomerServiceOutsourcing";
import ConferencePromotions from "./ConferencePromotions";


const CustomerServices = () => {
  return (
    <main>
      <ServiceHero 
        title="Customer Care Service."
        subtitle="IDM has established an international 
        quality Voice based customer care center in 
        Abeokuta Nigeria that offers employment to over 1000."
        buttonText="Learn More"
        heroImage="/images/customre-care-hero.webp"
      />
      <WhyCustomerCare />
      <CustomerCareSolutions />
      <CustomerServiceOutsourcing />
      <ConferencePromotions />
    </main>
  )
}

export default CustomerServices
