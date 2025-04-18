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

const workCulture = [
  {
    title: 'Friendly Environment',
    description: 'We believe in maintaining an environment that is filled with integrity and joy to manifest a better workplace.',
    icon: (
      <path d="M30 12c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 4c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm14 16H16c-5.523 0-10 4.477-10 10v10h48V42c0-5.523-4.477-10-10-10zm6 16H10v-6c0-3.314 2.686-6 6-6h28c3.314 0 6 2.686 6 6v6z" fill="#3182ce" fillRule="evenodd" />
    ),
  },
  {
    title: 'Team Support',
    description: 'We have tremendous team support for fielding your queries and solving problems that come your way.',
    icon: (
      <path d="M44 18h-6v-2c0-1.1-.9-2-2-2h-12c-1.1 0-2 .9-2 2v2h-6c-3.3 0-6 2.7-6 6v14c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6v-14c0-3.3-2.7-6-6-6zm-18-2h8v2h-8v-2zm20 22c0 1.1-.9 2-2 2h-28c-1.1 0-2-.9-2-2v-8h4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h8v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h4v8z" fill="#3182ce" fillRule="evenodd" />
    ),
  },
  {
    title: 'Continuous Learning',
    description: 'Learning is a timeless process, and we make sure that the individual who is part of our journey will get the opportunity to learn every day.',
    icon: (
      <path d="M45 12H15c-1.7 0-3 1.3-3 3v30c0 1.7 1.3 3 3 3h30c1.7 0 3-1.3 3-3V15c0-1.7-1.3-3-3-3zm-1 32H16V16h28v28zM26 22h8v2h-8v-2zm-4 0h2v2h-2v-2zm4 6h8v2h-8v-2zm-4 0h2v2h-2v-2zm0 6h12v2H22v-2zm18-12h-2v10h-10v2h12V22z" fill="#3182ce" fillRule="evenodd" />
    ),
  },
  {
    title: 'Career Growth',
    description: 'As a growing organization, ours is the perfect place for taking your career to the next level.',
    icon: (
      <path d="M18 42h-8V30h8v12zm16 0h-8V18h8v24zm16 0h-8V26h8v16zm4-30H6c-1.1 0-2 .9-2 2v36c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zm-2 36H8V16h44v32z" fill="#3182ce" fillRule="evenodd" />
    ),
  },
  {
    title: 'Flexible Timing',
    description: 'It provides performance liberty as well as become authorized to achieve the target by pre-scheduling the task.',
    icon: (
      <path d="M30 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-2-16.7V18h4v10.1l8.4 5-2 3.4-10.4-6.2z" fill="#3182ce" fillRule="evenodd" />
    ),
  },
  {
    title: 'Diversified Sources',
    description: 'We, as a company, empower the employees with a heap of resources to accomplish goals.',
    icon: (
      <path d="M46 16H14c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zm0 24H14V20h32v20zm-4-16H32v-4h10v4zm0 8H26v-4h16v4zm0 8H18v-4h24v4zm-28-8h4v4h-4v-4zm0-8h4v4h-4v-4z" fill="#3182ce" fillRule="evenodd" />
    ),
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
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Careers at Our ERP Firm</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Join a team that's shaping enterprise solutions with SAP and ERP excellence.
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
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-1 text-center">Work Culture</h2>
        <div className="border-t-3 border-blue-800 w-30 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10">
          We are always looking to add talented and motivated individuals to our dedicated workforce. If you
          are a team player, passionate about what you do, and are thrilled at the prospect of solving problems,
          Horizoncore is the place for you!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCulture.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              whileHover={{ y: -5 }}
            >
              <div className="rounded-full bg-blue-50 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-900">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Empowering SAP Careers</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="/Business Intelligence & Analytics.avif" alt="SAP Analytics Team" className="rounded-lg shadow-md" />
          <div>
            <p className="text-gray-700 text-lg mb-4">
              At vsvs tech waves, we specialize in SAP-powered transformation. Whether you're a FICO wizard, ABAP developer,
              or a BW/4HANA data scientist, we provide an ecosystem that supports learning, innovation, and high-impact delivery.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Work on S/4HANA cloud and on-premise deployments</li>
              <li>Get access to internal SAP sandbox and demo systems</li>
              <li>Engage in global SAP rollouts and support projects</li>
              <li>Collaborate with experts across modules and industries</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-10 text-lg text-gray-700">
          <strong>To apply, please send your resume/CV to</strong>{' '}
          <a href="mailto:info@virtutechsolutions.com" className="text-blue-700 underline">
            HR@vsvstechwaves.com
          </a>
        </p>
      </motion.section>
    </div>
  );
};

export default Careers;
