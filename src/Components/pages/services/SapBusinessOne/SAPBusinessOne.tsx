'use client';

import Overview from './Overview';
import BestPractices from '../../../common/BestPractices';
import Features from './Features';


const SAPBusinessOne = () => {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      
      <Overview />      
      <BestPractices 
        heading="SAP Business one, best practice core platform."
        description="The SAP Business One is an integrated application that integrates 
        all transactional, reporting & controlling process in the entire company. 
        Applications such as CRM, SCM & ERP directly derive their data from standard 
        transactional data – Sales, Purchase, Production, Logistics, Accounting, Finance, CRM, Services etc. 
        This state of art application developed by SAP is based on the latest client server Technology duly adapted 
        for today’s businesses."
      />
      <Features />
    </main>
  );
};

export default SAPBusinessOne;
