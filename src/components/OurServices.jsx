import React from "react";
import { motion } from "framer-motion";
import { DatabaseIcon, BarChart4, Building2, Network, LineChart } from "lucide-react";
const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "SAP CFIN",
      description:
        "SAP CFIN consolidates financial data from various systems into a single, centralized platform for real-time reporting and advanced financial analysis.",
      icon: <DatabaseIcon className="h-12 w-12 mx-auto text-gray-900" strokeWidth={1.5} />
    },
    {
      id: 2,
      title: "SAP RAR",
      description:
        "SAP RAR streamlines revenue recognition processes with automation and compliance for complex billing and contract scenarios.",
      icon: <BarChart4 className="h-12 w-12 mx-auto text-gray-900" strokeWidth={1.5} />
    },
    {
      id: 3,
      title: "Group Reporting",
      description:
        "Enables seamless financial data consolidation and real-time visibility across entities, ensuring faster and more accurate group close processes.",
      icon: <Building2 className="h-12 w-12 mx-auto text-gray-900" strokeWidth={1.5} />
    },
    {
      id: 4,
      title: "SAP Analytics",
      description:
        "Transform data into actionable insights with our SAP Analytics services. Make informed decisions faster with real-time dashboards and predictive analytics.",
      icon: <LineChart className="h-12 w-12 mx-auto text-gray-900" strokeWidth={1.5} />
    },
    {
      id: 5,
      title: "ERP Solutions",
      description:
        "Comprehensive ERP solutions that integrate all aspects of your business including finance, HR, manufacturing, supply chain, services, and procurement.",
      icon: <Network className="h-12 w-12 mx-auto text-gray-900" strokeWidth={1.5} />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-4 bg-blue-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-20">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering businesses through tailored SAP and ERP services that enhance agility, improve efficiency, and enable data-driven decision-making across all operations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-blue-900 text-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;