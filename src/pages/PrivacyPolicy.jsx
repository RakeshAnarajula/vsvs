import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-blue-50">
      {/* Content Section */}
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        <motion.div 
          className="bg-white shadow-xl rounded-b-lg p-6 md:p-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
           <motion.div
          className=" text-blue-900 rounded-t-lg py-4 text-center mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-3xl font-bold">Privacy Policy</h2>
        </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                At vsvs tech waves, we respect our privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p className="text-gray-700">
                This policy applies to information we collect on this website, in email, text, and other electronic messages between you and this website, and when you interact with our advertising and applications on third-party websites and services.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal information such as name, email address, postal address, telephone number, and any other identifier by which you may be contacted online or offline.</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                <li>Information collected through cookies, web beacons, and other tracking technologies.</li>
                <li>Records and copies of your correspondence if you contact us.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To notify you about changes to our website or any products or services we offer.</li>
                <li>To improve our website, products or services, marketing, or customer relationships.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
              </p>
              <p className="text-gray-700">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Changes to Our Privacy Policy</h2>
              <p className="text-gray-700">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our website and this privacy policy to check for any changes.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-xl font-semibold text-blue-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              </p>
              <div className=" p-4 rounded">
                <p className="text-lg text-gray-700">vsvs tech waves</p>
                <p className="text-gray-700">USA</p>
                <p className="text-gray-700">123 Tech Park, Silicon Valley
                California, 94043</p>
                <p className="text-gray-700">Email: info@vsvstech.com</p>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;