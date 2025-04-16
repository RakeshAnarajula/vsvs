import React from 'react';
import { motion } from 'framer-motion';
const values = [
  {
    img: '/Unlock Insights with SAP Analytics.jpg',
    title: 'Innovation',
    description: 'We bring creative ERP and SAP ideas to life.',
  },
  {
    img: '/Training & Change Management.avif',
    title: 'Excellence',
    description: 'Committed to delivering top-quality solutions and service.',
  },
  {
    img: '/team work.jpg',
    title: 'Ambition',
    description: 'We believe in dreaming big and building the future.',
  },
];
const perks = [
  {
    img: '/system upgrade.jpg',
    title: 'Flexible Work Culture',
    description: 'Hybrid and remote work options for better work-life balance.',
  },
  {
    img: '/production and planning.avif',
    title: 'Career Growth',
    description: 'Learning paths, certifications, and real-time project experience.',
  },
  {
    img: '/Improved Collaboration.avif',
    title: 'Collaborative Teams',
    description: 'Work with experienced SAP and ERP professionals globally.',
  },
  {
    img: '/Data-Driven Decisions.avif',
    title: 'Diversity & Inclusion',
    description: 'We value different perspectives and celebrate individuality.',
  },
];
const employeeBenefits = [
  {
    img: '/Advanced Reporting.avif',
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage, gym memberships, and mental health support.',
  },
  {
    img: '/Business Intelligence & Analytics.avif',
    title: 'Paid Time Off',
    description: 'Generous paid vacation, sick days, and holidays for work-life balance.',
  },
  {
    img: '/business intelligence.avif',
    title: 'Retirement Plans',
    description: 'Employer-funded retirement plans and financial planning resources.',
  },
];
const learningResources = [
  {
    img: '/Training & Change Management.avif',
    title: 'Upskilling Programs',
    description: 'Access to SAP learning hub and online certifications.',
  },
  {
    img: '/Unlock Insights with SAP Analytics.jpg',
    title: 'Mentorship',
    description: 'Guided learning through 1-on-1 sessions with industry experts.',
  },
  {
    img: '/consulting services.jpg',
    title: 'Hands-on Labs',
    description: 'Practice real-time SAP modules in sandbox environments.',
  },
];
const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 space-y-10 text-gray-800">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Careers at Our ERP Firm</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Join a team that’s shaping enterprise solutions with SAP and ERP excellence.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <img
                src={value.img}
                alt={value.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-800">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Work With Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <img
                src={perk.img}
                alt={perk.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-800">{perk.title}</h3>
              <p className="text-gray-600 mt-2">{perk.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Work Environment</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/consulting services.jpg"
            alt="Office Space"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <div className="text-left space-y-4">
            <p className="text-lg text-gray-700">
              We foster a creative, inclusive, and collaborative environment where your ideas are valued. Our team works together to create innovative SAP and ERP solutions for clients worldwide.
            </p>
            <p className="text-lg text-gray-700">
              Join us to be part of an inspiring team that is shaping the future of enterprise solutions.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Employee Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {employeeBenefits.map((benefit, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-800">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Learning & Development</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {learningResources.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-600 mb-6">
          Let’s collaborate to drive business transformation through tailored SAP solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-800 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 transition-colors"
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Careers;
