import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ourstory from './pages/aboutus/Ourstory';
import Leadership from './pages/aboutus/Leadership';
import BusinessOne from './pages/services/Businessone';
import Consulting from './pages/services/Consulting';
import ERPsolutions from './pages/services/ERPsolutions';
import Implementation from './pages/services/Implementation';
import SAPanalytics from './pages/services/SAPanalytics'
import Blog from './pages/resources/Blog';
import Casestudies from'./pages/resources/Casestudies';
import Carrers from './pages/Carrers';
import Contactus from './pages/Contactus';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;