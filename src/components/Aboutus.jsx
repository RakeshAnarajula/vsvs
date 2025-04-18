import { motion } from 'framer-motion';
export default function VisionMission() {
  return (
    <div className="bg-white px-6 py-10 md:px-20 space-y-10">
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
            src="/consulting services.jpg"
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
            src="/Business Intelligence & Analytics.avif"
            alt="Mission 1"
            className="w-full h-52 md:h-66 lg:h-76 object-cover rounded-lg shadow-md row-span-2"
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
    </div>
  );
}
