import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="bg-white py-10 px-6 sm:px-12 lg:px-24" id="about-us">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-3xl font-bold text-center text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg lg:text-lg mb-6 leading-relaxed">
            We specialize in helping organizations streamline and automate their operations through cutting-edge SAP and ERP implementations. 
            With a team of dedicated professionals, we tailor solutions to fit the unique needs of your business.
          </p>
          <p className="text-gray-700 text-lg lg:text-lg mb-6 leading-relaxed">
            Our mission is to deliver scalable, secure, and user-friendly platforms that enable growth and innovation. 
            From small startups to large enterprises, we empower companies to achieve digital excellence.
          </p>
          <p className="text-gray-700 text-lg lg:text-lg leading-relaxed">
            At the heart of everything we do is our commitment to quality, transparency, and long-term success for our clients.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src="/team work.jpg" 
            alt="About Us" 
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
