import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
const TermsOfService = () => {
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
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        <motion.div 
          className="bg-white shadow-xl rounded-b-lg p-6 md:p-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-blue-900 rounded-t-lg py- text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-3xl font-bold">Terms of Service</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                Welcome to vsvs tech waves. By accessing or using our website, software, applications, products, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">
                vsvs tech waves provides enterprise resource planning (ERP) solutions, software consulting, and digital transformation services to businesses of all sizes. Our Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Custom ERP implementation and integration</li>
                <li>Software development and maintenance</li>
                <li>Cloud migration and hosting services</li>
                <li>IT consulting and strategy development</li>
                <li>Technical support and maintenance</li>
                <li>Training and knowledge transfer</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                Some aspects of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Update your information to keep it current</li>
                <li>Safeguard your username and password</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Take responsibility for all activities that occur under your account</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by vsvs tech waves, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your computer may temporarily store copies of such materials incidental to your accessing and viewing those materials</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                <li>You may print or download one copy of a reasonable number of pages for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">5. User Conduct</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use the Services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm the Company or users of the Services or expose them to liability</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">6. Service Level Agreements</h2>
              <p className="text-gray-700 mb-4">
                For clients with active service contracts, we provide service level agreements (SLAs) that outline our commitments regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>System availability and uptime guarantees</li>
                <li>Response and resolution times for support requests</li>
                <li>Maintenance windows and notification procedures</li>
                <li>Data backup and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Specific SLA terms are included in individual client contracts and may vary based on service tier and specific client requirements.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our Services are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fees for our Services are specified in individual client agreements</li>
                <li>Unless otherwise stated, payment is due within 30 days of invoice date</li>
                <li>We accept payment via credit card, wire transfer, and other methods specified in your agreement</li>
                <li>Subscription services are billed according to the billing cycle specified in your agreement</li>
                <li>We reserve the right to suspend Services for accounts with overdue payments</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
              In no event will the company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the services, any websites linked to them, any content on the services or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.              </p>
              <p className="text-gray-700">
              The foregoing does not affect any liability which cannot be excluded or limited under applicable law.              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to all or part of the Services, with or without notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.
              </p>
              <p className="text-gray-700">
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="mb-10">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700">
                These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of California.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-xl font-semibold text-blue-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="p-4 rounded">
                <p className="text-lg text-gray-700">vsvs tech waves</p>
                <p className="text-gray-700">USA</p>
                <p className="text-gray-700">123 Tech Park, Silicon Valley</p>
                <p className="text-gray-700">California, 94043</p>
                <p className="text-gray-700">Email: legal@vsvstech.com</p>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default TermsOfService;