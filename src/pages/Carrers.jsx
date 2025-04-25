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
    iconUrl: '/Friendly Environment.png',
    altText: 'Friendly workplace environment icon'
  },
  {
    title: 'Team Support',
    description: 'We have tremendous team support for fielding your queries and solving problems that come your way.',
    iconUrl: '/Dedicated Support Team.png',
    altText: 'Team collaboration icon'
  },
  {
    title: 'Continuous Learning',
    description: 'Learning is a timeless process, and we make sure that the individual who is part of our journey will get the opportunity to learn every day.',
    iconUrl: '/Continuous Learning.png',
    altText: 'E-learning and education icon'
  },
  {
    title: 'Career Growth',
    description: 'As a growing organization, ours is the perfect place for taking your career to the next level.',
    iconUrl: '/Career Growth.png',
    altText: 'Career growth ladder icon'
  },
  {
    title: 'Flexible Timing',
    description: 'It provides performance liberty as well as become authorized to achieve the target by pre-scheduling the task.',
    iconUrl: '/Flexible Timing.png',
    altText: 'Flexible time management icon'
  },
  {
    title: 'Diversified Sources',
    description: 'We, as a company, empower the employees with a heap of resources to accomplish goals.',
    iconUrl: '/Custom SAP Integrations.png',
    altText: 'Diversified resources icon'
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-16 py-10 space-y-10 text-gray-800">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-blue-800">Careers at VS TECH WAVES</h1>
        <p className="mt-4 text-gray-600 text-md sm:text-lg">
          Join a team that's shaping enterprise solutions with SAP and ERP excellence.
        </p>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-[1800px] mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
        className="max-w-[1800px] px-4 mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-1 text-center">Work Culture</h2>
        <div className="border-t-4 border-blue-800 w-24 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10 text-md sm:text-lg">
          We are always looking to add talented and motivated individuals. If you are passionate and love solving problems,
          Horizoncore is the place for you!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCulture.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img 
                  src={item.iconUrl} 
                  alt={item.altText}
                  className="w-16 h-16 sm:w-20 sm:h-20" 
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 text-center">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.h2
       className="text-3xl font-bold text-blue-800 mb-4 text-center"
       initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Empowering SAP Careers
      </motion.h2>
      
      <motion.section
        className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/Business Intelligence & Analytics.avif"
          alt="Featured"
          className="w-full md:w-[35%] rounded-xl object-cover"
          transition={{ duration: 0.3 }}
        />
        <div className="md:w-[65%]">
          <p className="text-gray-700 text-md sm:text-md mb-4">
            At VS Tech Waves, we specialize in SAP-powered transformation. Whether you're a FICO wizard, ABAP developer,
            or a BW/4HANA data scientist, we provide an ecosystem that supports learning, innovation, and high-impact delivery.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
             <li>Work on S/4HANA cloud and on-premise deployments</li>
             <li>Access to internal SAP sandbox and demo systems</li>
             <li>Engage in global SAP rollouts and support projects</li>
             <li>Collaborate with experts across modules and industries</li>
             <li>Contribute to innovative SAP Fiori and UI5 application development</li>
             <li>Participate in real-time issue resolution and system performance optimization</li>
           </ul>
        </div>
      </motion.section>
      <p className="text-center mt-10 text-lg text-gray-700">
        <strong>To apply, please send your resume/CV to</strong>{' '}
        <a href="mailto:HR@vstechwaves.com" className="text-blue-700 underline">
          HR@vstechwaves.com
        </a>
      </p>
    </div>
  );
};
export default Careers;