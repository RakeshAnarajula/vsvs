import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 

import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import OurServices from "./components/OurServices";
import Testinomials from "./components/Testinomials";

import Ourstory from './pages/aboutus/Ourstory';
import Leadership from './pages/aboutus/Leadership';
import BusinessOne from './pages/services/Businessone';
import Consulting from './pages/services/Consulting';
import ERPsolutions from './pages/services/ERPsolutions';
import Implementation from './pages/services/Implementation';
import SAPanalytics from './pages/services/SAPanalytics';
import Blog from './pages/resources/Blog';
import Casestudies from './pages/resources/Casestudies';
import Carrers from './pages/Carrers';
import Contactus from './pages/Contactus';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofServices from "./pages/Termsofservices";

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
                  <Testinomials />
                </>
              }
            />
            <Route path="/aboutus/ourstory" element={<Ourstory />} />
            <Route path="/aboutus/leadership" element={<Leadership />} />
            <Route path="/services/BusinessOne" element={<BusinessOne />} />
            <Route path="/services/Consulting" element={<Consulting />} />
            <Route path="/services/ERPsolutions" element={<ERPsolutions />} />
            <Route path="/services/Implementation" element={<Implementation />} />
            <Route path="/services/SAPanalytics" element={<SAPanalytics />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/Casestudies" element={<Casestudies />} />
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
