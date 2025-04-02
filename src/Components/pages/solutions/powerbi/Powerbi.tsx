"use client";

import ServiceHero from "../../../common/ServiceHero";
import PowerbiBenefits from "./PowerbiBenefits";
import PowerbiWhatWeDo from "./PowerbiWhatWeDo";


const Powerbi = () => {
  return (
    <main>
      <ServiceHero 
        title="Gain valuable insights with the assistance of our Power BI experts"
        subtitle="Integrate high impact analytics and business intelligence products with minimal upfront costs."
        buttonText="Learn More"
        heroImage="/src/assets/images/powerbi-hero.png"
      />
      <PowerbiBenefits />
      <PowerbiWhatWeDo />
    </main>
  );
}

export default Powerbi;
