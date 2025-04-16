import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {MapPin,Phone,Mail,Clock,Facebook,Twitter,Instagram,Linkedin,HomeIcon,Info,Briefcase,PhoneCall } from "lucide-react";
const FooterSection = ({ title, icon: Icon, children }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        {Icon && <Icon size={20} className="mr-2 text-blue-400" />}
        {title}
      </h3>
      <div className="flex flex-col space-y-2">{children}</div>
    </div>
  );
};
const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="group relative text-gray-300 hover:text-white transition-colors duration-300 w-max"
    >
      {children}
      <span className="absolute left-0 -bottom-0.5 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-4">
              <img
                src="/vsvs logo.jpg"
                alt="VSVS Logo"
                className="h-16 w-auto mb-4 brightness-110"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Delivering innovative technology solutions to businesses worldwide.
              Our mission is to empower organizations through digital transformation.
            </p>
            <div className="flex space-x-3 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={Icon.name}
                  className=" rounded-full p-2 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8"
          >
            <FooterSection title="QUICK LINKS" icon={HomeIcon}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/aboutus/ourstory">Our Story</FooterLink>
              <FooterLink to="/aboutus/leadership">Leadership</FooterLink>
              <FooterLink to="/carrers">Careers</FooterLink>
              <FooterLink to="/contactus">Contact Us</FooterLink>
            </FooterSection>
            <FooterSection title="ABOUT US" icon={Info}>
              <FooterLink to="/resources/blog">Blog</FooterLink>
              <FooterLink to="/resources/Casestudies">Casestudies</FooterLink>
              <FooterLink to="/PrivacyPolicy">Privacy Policy</FooterLink>
              <FooterLink to="/Termsofservices">Terms of Service</FooterLink>
            </FooterSection>
            <FooterSection title="SERVICES" icon={Briefcase}>
              <FooterLink to="/services/ERPsolutions">ERP Solutions</FooterLink>
              <FooterLink to="/services/SAPanalytics">SAP Analytics</FooterLink>
              <FooterLink to="/services/Implementation">Implementation</FooterLink>
              <FooterLink to="/services/Businessone">Business One</FooterLink>
              <FooterLink to="/services/Consulting">Consulting</FooterLink>
            </FooterSection>
            <FooterSection title="CONTACT US" icon={PhoneCall}>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin size={18} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    123 Tech Park, Silicon Valley<br />
                    California, 94043, USA
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    info@vsvstech.com
                  </p>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Monday - Friday:<br />9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </FooterSection>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-blue-800/50 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} VSVS TECH WAVES. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-gray-400">Designed and developed by </span>
            <motion.a
              href="https://virtutechsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-gray-300 hover:text-white transition-colors duration-300 group relative w-max"
              whileHover={{ scale: 1.05 }}
            >
              Virtu Tech Solutions
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
