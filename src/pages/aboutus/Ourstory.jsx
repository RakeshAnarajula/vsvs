import React from 'react';
import { motion } from 'framer-motion';
const OurStory = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-10 px-6 sm:px-12 md:px-16 lg:px-24">
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Story</h1>
        <p className="text-lg sm:text-lg text-gray-500 leading-relaxed">
          Learn about our journey, mission, and the passionate team behind our innovative ERP solutions.
        </p>
      </motion.div>
      <motion.div 
        className="max-w-7xl mx-auto space-y-12 lg:grid lg:grid-cols-2 lg:gap-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center lg:items-start">
          <motion.div 
            className="w-full sm:w-1/2 sm:mr-12 mb-8 sm:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700">
              What began as a small startup is now transforming the way businesses operate, offering tailored ERP solutions to streamline processes and enable growth.
            </p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/Advanced Reporting.avif" 
              alt="Our Journey" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row items-center lg:items-start">
          <motion.div 
            className="w-full sm:w-1/2 sm:mr-12 mb-8 sm:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
            Our vision is to enable businesses of all sizes to embrace the future of technology with innovative and reliable ERP solutions that power growth and efficiency.
            </p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/Automated Workflows.avif" 
              alt="Our Values" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="max-w-7xl mx-auto space-y-12 lg:grid lg:grid-cols-2 lg:gap-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center lg:items-start">
          <motion.div 
            className="w-full sm:w-1/2 sm:mr-12 mb-8 sm:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-2 mt-6">Our Mission</h2>
            <p className="text-lg text-gray-700">
            Our mission is to empower businesses by providing cutting-edge ERP solutions that simplify operations, boost productivity, and foster innovation.
            </p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/business intelligence.avif" 
              alt="Our Journey" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row items-center lg:items-start">
          <motion.div 
            className="w-full sm:w-1/2 sm:mr-12 mb-8 sm:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">
              We believe in integrity, innovation, and collaboration as the core principles guiding our work and shaping our company culture.
            </p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src="/Advanced Reporting.avif" 
              alt="Our Values" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-500 mb-8">
          A team of passionate, driven professionals committed to delivering innovative ERP solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <img 
              src="/consulting implementation.avif" 
              alt="Team Member" 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
            />
            <h3 className="font-semibold text-xl text-blue-600">John Doe</h3>
            <p className="text-gray-600">CEO & Co-Founder</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <img 
              src="/consulting services.jpg" 
              alt="Team Member" 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
            />
            <h3 className="font-semibold text-xl text-blue-600">Jane Smith</h3>
            <p className="text-gray-600">CTO & Co-Founder</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <img 
              src="/Customizable Modules.jpg" 
              alt="Team Member" 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
            />
            <h3 className="font-semibold text-xl text-blue-600">Alice Brown</h3>
            <p className="text-gray-600">Head of Product Development</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="text-center py-12 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">What We Do</h2>
        <p className="text-lg text-gray-500 mb-8">
          We provide modern ERP solutions to help businesses automate and manage their day-to-day operations.
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <motion.div 
            className="w-full mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="/Cloud-Based Solutions.jpg" 
              alt="What We Do" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="w-full text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-600 mb-4">
              Our ERP solutions streamline operations and ensure that businesses can make data-driven decisions to maximize efficiency and profitability.
            </p>
            <ul className="list-disc list-inside text-left text-lg text-gray-600">
              <li>Automated workflows and task management</li>
              <li>Customizable modules for various industries</li>
              <li>Cloud-based, scalable solutions</li>
              <li>Real-time reporting and analytics</li>
              <li>Seamless integration with existing systems</li>
              <li>Mobile-friendly interfaces for on-the-go management</li>
              <li>Advanced security features to protect sensitive data</li>
              <li>24/7 customer support to ensure smooth operations</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Join Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          Are you passionate about innovation and technology? Join us and be a part of a dynamic team changing the way businesses operate.
        </p>
        <a 
          href="/careers" 
          className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Careers
        </a>
      </motion.div>
    </div>
  );
};
export default OurStory;
