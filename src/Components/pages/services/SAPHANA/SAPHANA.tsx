'use client';

import ServiceHero from "../../../common/ServiceHero";
import BestPractices from "../../../common/BestPractices";
import SapHanaServices from "./SapHanaServices";
import LearnHowItWorks from "../../../common/LearnHowItWorks";

const SAPHANA = () => {
  return (
    <main className="">
      <ServiceHero 
        title="SAP HANA"
        subtitle="SAP HANA is an in-memory database and application development platform for processing 
        high volumes of data in real time. An in-memory database (IMDB, also main memory database 
        system or MMDB or memory resident database) is a database management system that primarily 
        relies on main memory for computer data storage."
        buttonText="Learn More"
        heroImage="/images/hanahero.webp"
      />
      <BestPractices 
        heading="In-memory databases are faster than optimized databases"
        description="Due to its IMDB property, SAP HANA enables data analysts to query large volumes of data in real time. 
        HANA’s in-memory computing database infrastructure frees analysts from having to load or write back data. 
        Also HANA is a columnar-based data storage system and therefore it is ACID compliant(atomicity, 
        consistency, isolation and durability) and supports industry standards, 
        such as structured query language (SQL) and multidimensional expressions (MDX). 
        SAP HANA also includes a programming component that enables a developer 
        to create and run customised application programs on top of HANA."
      />
      <SapHanaServices />
      <LearnHowItWorks 
        title="Learn how it works"
        description1="SAP HANA stores data in memory in a columnar format. 
        Doing so enables the product to deliver real-time or near-real-time transactions and analytics. 
        For SAP, the columnar format offers better access to, and processing of data compared to traditional, 
        row-based memory."
        description2="SAP HANA operates on the SUSE Linux Server, which manages memory reservations for various processes. 
        Linux OS allocates memory dynamically as needed by SAP HANA, which uses a memory pool to manage in-memory data, system 
        tables, and computations. High data compression in HANA reduces overall storage requirements."
        imageSrc="/images/sap-hana-memory.webp"
      />
      <BestPractices 
        heading="Why SAP HANA?"
        description="SAP HANA is a next-generation in-memory business platform. 
        It accelerates analytics and application on a single and in-memory platform. 
        SAP HANA offers real-time data provisioning, high-speed processing with in-memory technology, 
        and access to structured and unstructured data from various sources. It supports cloud deployment, 
        simplifies ETL processes, and reduces IT costs. Users can choose from multiple hardware and software providers, 
        enabling real-time analytics and data aggregation across sources."
      />
    </main>
  );
};

export default SAPHANA;
