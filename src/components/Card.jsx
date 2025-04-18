import React from "react";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SAPExperienceSection = () => {
  return (
    <div className="bg-blue-50  py-6 lg:py-12 px-4 sm:px-4 lg:px-20">
      <div className="bg-blue-900 max-w-8xl mx-auto px-4 py-10 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/sap remove.png"
            alt="SAP Illustration"
            className="w-full h-auto object-cover "
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left "
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
            Looking to Elevate Your SAP Experience?
          </h3>
          <p className="mb-4 text-lg text-gray-300">
            SAP (Systems, Applications, and Products) empowers enterprises to streamline operations and improve decision-making through integrated modules that cover finance, logistics, human resources, and more. From automating workflows to enhancing real-time data visibility, tailored SAP solutions can transform your digital core and drive scalable growth.
          </p>
          <p className="text-lg text-gray-300">
            Whether you're modernizing legacy systems or building a new digital ecosystem, SAP provides the foundation for resilient, intelligent enterprises.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default SAPExperienceSection;
