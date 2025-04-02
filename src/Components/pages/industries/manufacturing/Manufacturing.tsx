"use client";

import ServiceHero from "../../../common/ServiceHero";
import Industries from "./Industries";

function Manufacturing() {
  return (
    <main>
        <ServiceHero 
            title="Industries"
            subtitle="SAP offers intelligent solutions designed to meet the unique challenges of diverse sectors, 
            empowering organizations to optimize operations, drive innovation, and accelerate growth. 
            SAP provides the tools and insights needed to stay ahead in a fast-evolving marketplace."
            buttonText="Learn More"
            heroImage="/src/assets/images/industry.jpg"
        />
        <Industries />
    </main>
  )
}

export default Manufacturing
