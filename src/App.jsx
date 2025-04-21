import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 

import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import OurServices from "./components/OurServices";
import Card from "./components/Card";

import BusinessOne from './pages/services/Businessone';
import Consulting from './pages/services/Consulting';
import ERPsolutions from './pages/services/ERPsolutions';
import SapModules from "./pages/services/SapModules";
import SAPanalytics from './pages/services/SAPanalytics';
import Resources from "./pages/Resources";
import Carrers from './pages/Carrers';
import Contactus from './pages/Contactus';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofServices from "./pages/Termsofservices";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Aboutus />
                  <OurServices />
                  <Card />
                </>
              }
            />
            <Route path="/AboutUs" element={<AboutUs />} />  
            <Route path="/services/BusinessOne" element={<BusinessOne />} />
            <Route path="/services/Consulting" element={<Consulting />} />
            <Route path="/services/ERPsolutions" element={<ERPsolutions />} />
            <Route path="/services/SapModules" element={< SapModules />} />
            <Route path="/services/SAPanalytics" element={<SAPanalytics />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/carrers" element={<Carrers />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Termsofservices" element={<TermsofServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
