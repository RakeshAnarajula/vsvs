import React from 'react';
import { motion } from 'framer-motion';
const Leadership = () => {
  return (
    <div className="bg-white text-gray-900 py-10 px-6 sm:px-12 md:px-16 lg:px-24">
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Leadership</h1>
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
          Meet the visionary leaders driving our innovation and shaping the future of our company.
        </p>
      </motion.div>
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        {[
          {
            name: 'John Doe',
            title: 'CEO & Co-Founder',
            img: '/business intelligence.avif',
            bio: 'John is a visionary leader with a passion for transforming industries through technology. With over 20 years of experience in the tech industry, he has led the company to its current position as a market leader.'
          },
          {
            name: 'Jane Smith',
            title: 'CTO & Co-Founder',
            img: '/Cloud-Based Solutions.jpg',
            bio: 'Jane is a tech enthusiast with a deep understanding of cutting-edge technologies. Her strategic approach to technology has helped shape the company’s roadmap and technical vision.'
          },
          {
            name: 'Alice Brown',
            title: 'COO & Head of Operations',
            img: '/consulting services.jpg',
            bio: 'Alice has extensive experience in managing large-scale operations. Her focus on efficiency and productivity has driven the company’s growth in new and exciting directions.'
          }
        ].map((leader, index) => (
          <motion.div
            key={leader.name}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          >
            <img 
              src={leader.img} 
              alt={leader.name} 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover shadow-lg"
            />
            <h3 className="font-semibold text-xl text-blue-600">{leader.name}</h3>
            <p className="text-gray-600 mb-4">{leader.title}</p>
            <p className="text-lg text-gray-700">{leader.bio}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="py-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-10 text-center">Our Leadership Values</h2>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img 
              src="/business intelligence.avif" 
              alt="Leadership Values" 
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 order-3 lg:order-2">
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li><strong>Innovation:</strong> Constantly challenging the status quo and embracing new ideas.</li>
              <li><strong>Integrity:</strong> Upholding the highest ethical standards in every decision we make.</li>
              <li><strong>Collaboration:</strong> Working together as a team to achieve common goals.</li>
              <li><strong>Customer-Centricity:</strong> Always putting the customer at the center of everything we do.</li>
              <li><strong>Empowerment:</strong> Encouraging our team to take initiative and drive change.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Us in Shaping the Future</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Our leadership team is always on the lookout for talented, driven individuals who are passionate about technology and innovation. If you’re ready to make difference, we want hear from you.
        </p>
        <a 
          href="/Carrers"
          className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Careers
        </a>
      </motion.div>
    </div>
  );
};
export default Leadership;
