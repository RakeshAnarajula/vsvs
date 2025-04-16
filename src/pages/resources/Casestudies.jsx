import React from 'react';
import { motion } from 'framer-motion';
import {Factory,ShoppingCart,Banknote,Stethoscope,Truck,GraduationCap,} from 'lucide-react';
const caseStudies = [
  {
    id: 1,
    title: 'SAP Implementation for Global Manufacturing Firm',
    description:
      'We helped a Fortune 500 manufacturing company implement SAP S/4HANA across 7 countries, improving real-time visibility and reducing operational costs by 20%.',
    image: '/Advanced Reporting.avif',
    industry: 'Manufacturing',
  },
  {
    id: 2,
    title: 'ERP Rollout in a Multinational Retail Chain',
    description:
      'A large retail company streamlined its inventory and supply chain with a custom ERP solution, leading to a 30% improvement in fulfillment efficiency.',
    image: '/Automated Workflows.avif',
    industry: 'Retail',
  },
  {
    id: 3,
    title: 'Cloud Migration for Financial Services Firm',
    description:
      'Our team guided a finance client to migrate their SAP environment to the cloud, enhancing scalability, security, and cost-effectiveness.',
    image: '/Business Intelligence & Analytics.avif',
    industry: 'Finance',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    icon: <Factory size={36} className="text-blue-600 mb-4" />,
    short: 'Optimize production and supply chain efficiency.',
  },
  {
    name: 'Retail',
    icon: <ShoppingCart size={36} className="text-blue-600 mb-4" />,
    short: 'Enhance inventory and customer experience.',
  },
  {
    name: 'Finance',
    icon: <Banknote size={36} className="text-blue-600 mb-4" />,
    short: 'Improve financial systems and compliance.',
  },
  {
    name: 'Healthcare',
    icon: <Stethoscope size={36} className="text-blue-600 mb-4" />,
    short: 'Manage resources and patient care efficiently.',
  },
  {
    name: 'Logistics',
    icon: <Truck size={36} className="text-blue-600 mb-4" />,
    short: 'Optimize supply chains and delivery tracking.',
  },
  {
    name: 'Education',
    icon: <GraduationCap size={36} className="text-blue-600 mb-4" />,
    short: 'Manage students, faculty, and reporting systems.',
  },
];
const technologies = [
  {
    name: 'SAP S/4HANA',
    image: '/business intelligence.avif',
    description:
      'The next-gen ERP suite with real-time processing and analytics.',
  },
  {
    name: 'ERPNext',
    image: '/Cloud-Based Solutions.jpg',
    description:
      'Open-source ERP for accounting, CRM, and full business management.',
  },
  {
    name: 'Oracle NetSuite',
    image: '/consulting implementation.avif',
    description:
      'A cloud ERP that integrates financials, CRM, and eCommerce.',
  },
  {
    name: 'AWS Cloud Services',
    image: '/consulting services.jpg',
    description:
      'Reliable cloud platform to host and scale SAP/ERP systems.',
  },
  {
    name: 'Microsoft Power BI',
    image: '/customation and integration.avif',
    description:
      'Powerful business intelligence tools to visualize and analyze data.',
  },
  {
    name: 'Zoho ERP',
    image: '/Customizable Modules.jpg',
    description:
      'Flexible ERP system for businesses to manage finance, HR, and more.',
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 space-y-20">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Case Studies
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Real success stories from clients who transformed their operations
          using SAP and ERP solutions.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={cs.image}
              alt={cs.title}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">{cs.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{cs.industry}</p>
            <p className="mt-2 text-gray-600 text-sm">{cs.description}</p>
          </motion.div>
        ))}
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Industries We Serve
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                {industry.icon}
                <h3 className="text-lg font-semibold text-blue-800">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{industry.short}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Technologies We Use
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800">
                  {tech.name}
                </h3>
                <p className="text-gray-600 mt-4">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
export default CaseStudies;
