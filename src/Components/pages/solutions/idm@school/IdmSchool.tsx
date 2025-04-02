"use client";

import ServiceHero from "../../../common/ServiceHero";
import IdmSolutionAccordion from "./IdmSolutionAccordion";
import WhyIdmSchool from "./WhyIdmSchool";

const IdmSchool = () => {
  return (
    <main>
      <ServiceHero 
        title="Building Young Minds for Global ICT Future."
        subtitle="Our IDM@School program is meticulously designed to cater 
        to the evolving needs of students at various educational stages. 
        We offer a diverse curriculum that encompasses the latest advancements in technology, 
        ensuring that our students are well-prepared for the future."
        buttonText="Learn More"
        heroImage="/src/assets/images/idmschool-hero.jpg"
      />
      <WhyIdmSchool />
      <IdmSolutionAccordion />
    </main>
  )
}

export default IdmSchool
