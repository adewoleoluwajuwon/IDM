import { Routes, Route } from "react-router-dom";
import Nav from "./Components/common/Nav";
import Contact from "./Components/pages/contacts/Contact";
import AboutUs from "./Components/pages/about/aboutUs";
import ContactExpert from "./Components/common/ContactExpert";
import Footer from "./Components/common/Footer";

// Home Page Sections
import Hero from "./Components/home/Hero";
import Services from "./Components/home/Services";
import WhyChooseUs from "./Components/home/WhyChooseUs";
import Industries from "./Components/home/Industries";
import Solutions from "./Components/home/Solutions";
import Partners from "./Components/common/Partners";
// End of Home Page Sections
// Services
import SAPBusinessOne from "./Components/pages/services/SapBusinessOne/SAPBusinessOne";
import SAPCustomerCheckout from "./Components/pages/services/SAPCustomerCheckout/SAPCustomerCheckout";
import SAPHANA from "../src/Components/pages/services/SAPHANA/SAPHANA";
import SAPFiori from "./Components/pages/services/SAPFiori/SAPFiori";
import SchoolERP from "./Components/pages/services/SchoolERP/SchoolERP";
// End Of Services
// Industries
import Manufacturing from "./Components/pages/industries/manufacturing/Manufacturing";
// End of Industries
// Solution
import SAPBusinessOneAddon from "./Components/pages/solutions/sapbusinessoneaddon/SAPBusinessOneAddon";
import Powerbi from "./Components/pages/solutions/powerbi/Powerbi";
import CloudServices from "./Components/pages/solutions/cloudservice/CloudServices";
import IdmSchool from "./Components/pages/solutions/idm@school/IdmSchool";
import CustomerServices from "./Components/pages/solutions/customerservice/CustomerServices";

//End of Solutions

function App() {
  return (
      <div className="min-h-screen w-full overflow-hidden"> {/* ✅ No horizontal scrolling */}
        <Nav />
        <main className=""> {/* ✅ Removed `p-6` to fix full-width issue */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Industries />
                <Solutions /> 
                <Partners />
              </>
            }
            />
            {/* End Home Page */}

            {/* Services */}
            <Route path="/Services/sap-business-one" element={ <SAPBusinessOne /> }/>
            <Route path="/Services/sap-customer-checkout" element={ <SAPCustomerCheckout /> }/>
            <Route path="/Services/sap-hana" element={ <SAPHANA /> }/>
            <Route path="/Services/sap-fiori" element={ <SAPFiori /> }/>
            <Route path="/Services/school-erp" element={ <SchoolERP /> }/>
             {/* End Of Services */}

             {/* Industries Page */}
             <Route path="/industries/manufacturing" element={ <Manufacturing /> }/>
             {/* EndIndustries Page */}
             
             {/* Solutions */}
             <Route path="/solutions/sap-business-one-add-ons" element={ <SAPBusinessOneAddon /> }/>
             <Route path="/solutions/power-bi" element={ <Powerbi /> }/>             
             <Route path="/solutions/cloud-services" element={ <CloudServices /> }/>             
             <Route path="/solutions/idm-school" element={ <IdmSchool /> }/>             
             <Route path="/solutions/cust-care-services" element={ <CustomerServices /> }/>             
             {/* End of Solutions */}


            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            {/* End of Contact */}
            {/* AboutUs */}
            <Route path="/about" element={<AboutUs />} />
            {/* End of AboutUs */}
            
          </Routes>
        </main>
        <ContactExpert/>
        <Footer />
      </div>
  );
}

export default App;
