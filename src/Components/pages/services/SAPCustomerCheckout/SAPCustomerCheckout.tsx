'use client';

import ServiceHero from "../../../common/ServiceHero";
import WhyChooseCheckout from "./WhyChooseCheckout";
import UseCases from "./UseCases";

const SAPCustomerCheckout = () => {
  return (
    <main className="">
      <ServiceHero 
        title="SAP Customer Checkout"
        subtitle="Discover our integrated point-of-sale (POS) software designed for retail, 
        sports and entertainment, and catering businesses. Supporting all common POS requirements 
        SAP Customer Checkout can be used as a standalone solution or integrated with SAP S/4HANA and 
        all other SAP ERP systems."
        buttonText="Learn More"
        heroImage="/src/assets/images/hero.png"
      />
      <WhyChooseCheckout />
      <UseCases />
    </main>
  );
};

export default SAPCustomerCheckout;
