import { motion } from "framer-motion";
import {FaChartLine,FaBoxes,FaFileInvoiceDollar,FaPeopleCarry,FaIndustry,FaUsersCog,FaCogs,FaCheckCircle,} from "react-icons/fa";
import { MdOutlineInsights } from "react-icons/md";
import { Link } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SAPImplementation = () => {
  const features = [
    {
      icon: <FaCogs />,
      title: "Custom Configurations",
      desc: "Tailor SAP modules to meet your business needs.",
    },
    {
      icon: <MdOutlineInsights />,
      title: "Real-Time Insights",
      desc: "Gain actionable insights across departments.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Seamless Integration",
      desc: "Connect SAP with your current ecosystem.",
    },
  ];

  const approachSteps = [
    {
      title: "1. Assessment",
      img: "/implemantation assesment.avif",
      desc: "Evaluate existing processes and define strategy.",
    },
    {
      title: "2. Design",
      img: "/implementation design.jpg",
      desc: "Map out workflows and configure SAP to fit them.",
    },
    {
      title: "3. Implementation",
      img: "/implemantation.jpeg",
      desc: "Migrate data, test modules, and roll out in phases.",
    },
    {
      title: "4. Support",
      img: "/support.jpg",
      desc: "Post-launch support and performance optimization.",
    },
  ];

  const modules = [
    {
      title: "SAP FICO",
      icon: <FaFileInvoiceDollar />,
      description: "Manage financial accounting and reporting with precision.",
    },
    {
      title: "SAP MM",
      icon: <FaBoxes />,
      description: "Oversee procurement, inventory, and vendor management seamlessly.",
    },
    {
      title: "SAP SD",
      icon: <FaChartLine />,
      description: "Optimize order-to-cash cycle and customer billing.",
    },
    {
      title: "SAP HCM",
      icon: <FaUsersCog />,
      description: "Simplify HR processes like payroll and talent management.",
    },
    {
      title: "SAP PP",
      icon: <FaIndustry />,
      description: "Plan and control manufacturing efficiently.",
    },
    {
      title: "SAP CRM",
      icon: <FaPeopleCarry />,
      description: "Enhance customer engagement and retention.",
    },
    {
      title: "SAP CFIN",
      icon: <FaFileInvoiceDollar />,
      description: "Consolidate financial data from various systems into a single platform for centralized reporting and analysis.",
    },
    {
      title: "Group Reporting",
      icon: <FaChartLine />,
      description: "Manage financial data consolidation and ensure regulatory compliance across the organization.",
    },
    {
      title: "SAP RAR",
      icon: <FaCheckCircle />,
      description: "Improve revenue accounting and automate reporting across your enterprise.",
    },
    {
      title: "SAP SuccessFactors",
      icon: <FaUsersCog />,
      description: "Empower your workforce with cloud-based HCM for recruiting, onboarding, performance, and learning.",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 md:px-20 py-1 text-gray-800 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 mt-10">
            SAP Implementation Services
          </h1>
          <p className="text-lg text-gray-600">
            Transform your business with expert SAP implementation and tailored enterprise solutions for sustainable growth.
          </p>
        </div>
        <img
          src="/sap implemetation.jpg"
          alt="SAP Implementation"
          className="rounded-2xl shadow-lg w-full h-56 md:h-64 lg:h-60 object-cover"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <div className="text-4xl text-blue-700 mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      <div className="mt-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900 text-center mb-8"
        >
          Our Implementation Approach
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {approachSteps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img src={step.img} alt={step.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-blue-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
          Key SAP Modules We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg hover:bg-white transition duration-300"
            >
              <div className="text-4xl text-blue-700">{module.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/team work.jpg"
            alt="Teamwork"
            className="rounded-xl shadow-md w-full md:w-1/2 object-cover h-64 md:h-80"
          />
         <ul className="md:w-1/2 space-y-3 text-lg  pl-2">
              <li>✔️ We have SAP expertise</li>
              <li>✔️ Dedicated SAP certified consultants</li>
              <li>✔️ Flexible delivery models</li>
              <li>✔️ Proven track record in multiple industries</li>
              <li>✔️ Customized solutions to meet client needs</li>
             <li>✔️ Strong post-implementation support and training</li>
             <li>✔️ Continuous innovation with latest SAP technologies</li>
        </ul>

        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg text-center mt-20"
      >
        <h3 className="text-2xl font-semibold">Start Your SAP Journey Today</h3>
        <p className="text-lg mt-2">Let our experts help you achieve digital transformation with SAP.</p>
        <Link to="/Contactus">
        <button className="mt-4 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 transition">
          Request a Free Demo
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default SAPImplementation;
