import { motion } from 'framer-motion';
import React from 'react';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};
const AboutUs = () => {
  return (
    <div className="bg-white px-6 py-6 md:px-20 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
          About Us
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-full md:w-1/2">
          <img
            src="/our vision.avif"
            alt="Our Vision"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 ">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center relative ">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to provide excellent SAP and ERP solutions to businesses worldwide,
            using our technical expertise and industry knowledge to maximize operational efficiency and
            drive digital transformation for our clients.<br /><br />
            We make enterprise technology an asset rather than a challenge! Our vision is to
            be recognized as a leading SAP implementation partner who transforms complex business
            requirements into streamlined solutions that create measurable value for our clients.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col md:flex-row-reverse items-center gap-8"
      >
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="/our mission3.avif"
            alt="Mission 1"
            className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg shadow-md row-span-2"
          />
          <img
            src="/Cloud-Based Solutions.jpg"
            alt="Mission 2"
            className="w-full h-24 md:h-32 lg:h-36 object-cover rounded-lg shadow-md"
          />
          <img
            src="/Automated Workflows.avif"
            alt="Mission 3"
            className="w-full h-24 md:h-32 lg:h-36 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center relative">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team is dedicated to delivering high-quality SAP implementations and ERP solutions
            that enhance business processes and elevate the customer experience. We are committed to
            creating intuitive, powerful systems that align perfectly with our clients' needs.<br /><br />
            We provide comprehensive SAP consulting services by following industry best practices
            and proven methodologies that ensure complete system integration, reliable data management,
            and seamless workflow automation for enterprises of all sizes.
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="py-16 bg-blue-50 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex justify-center mb-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-800">
          Our Accomplishments & Assets
         </h2>
        </div>
        <div className="border-t-3 border-blue-800 w-40 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Plot No.57, Ganesh Towers, Kakatiyanagar, Ashok Nagar, R C Puram, Telangana - 502032...</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue -100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Infrastructure</h3>
            <p className="text-gray-600 text-sm">Employee friendly infrastructure with all facility and amazingly equipped.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Team</h3>
            <p className="text-gray-600 text-sm">50+ rockers with strong skill set and high experience.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.8 10.7L4.2 5l-0.7 1.9L17.6 12H5c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-5.5c0-0.8-0.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Progress</h3>
            <p className="text-gray-600 text-sm">Every day 80% enhancement by intelligent work.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Earthwise steps</h3>
            <p className="text-gray-600 text-sm">Happy customers in more than 10 Miracle Countries.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Plans & Success</h3>
            <p className="text-gray-600 text-sm">Perfect steps in all world's Cities and make people's digital life easy.</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-blue-800">Our Core Values</h2>
        </div>
        <div className="border-t-3 border-blue-800 w-20 mx-auto mb-12"></div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="flex flex-col items-center text-center border-r border-gray-200 p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="8" y="8" width="48" height="36" rx="4" />
                <circle cx="32" cy="26" r="10" />
                <path d="M26 26L30 30L38 22" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Solutions for Small to Sizable Projects</h3>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center border-r border-gray-200 p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-orange-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="8" y="8" width="48" height="36" rx="4" />
                <path d="M16 16H48" strokeLinecap="round" />
                <path d="M16 24H48" strokeLinecap="round" />
                <path d="M16 32H40" strokeLinecap="round" />
                <path d="M16 40H36" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Understand Client's Requirement</h3>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="32" cy="32" r="24" />
                <path d="M24 32h16" strokeLinecap="round" />
                <path d="M32 40v-16" strokeLinecap="round" />
                <path d="M38 26c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 3 6 3 6 6s-2.7 6-6 6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Competitive Budget for Every Industry</h3>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center border-r border-gray-200 p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-orange-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="14" width="44" height="32" rx="4" />
                <circle cx="32" cy="30" r="12" />
                <path d="M32 22v8l6 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Well-timed Product and Service Delivery</h3>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center border-r border-gray-200 p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-blue-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="18" width="44" height="36" rx="4" />
                <path d="M20 18v-4c0-6.6 5.4-12 12-12s12 5.4 12 12v4" />
                <circle cx="32" cy="36" r="8" />
                <path d="M32 32v8" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Security & Confidentiality of the Project</h3>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center p-6"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 text-orange-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="10" width="44" height="44" rx="4" />
                <path d="M20 20h24" strokeLinecap="round" />
                <path d="M20 30h24" strokeLinecap="round" />
                <path d="M20 40h24" strokeLinecap="round" />
                <path d="M50 20l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 26l-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-md mb-2">Reporting Structure</h3>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default AboutUs;