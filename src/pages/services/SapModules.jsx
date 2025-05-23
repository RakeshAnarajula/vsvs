import { motion } from "framer-motion";
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
const SapModules = () => {
  const features = [
    {
      icon: "/Custom Configurations.png",
      title: "Custom Configurations",
      desc: "Tailor SAP modules to meet your business needs.",
    },
    {
      icon: "/Real-Time Insights.png",
      title: "Real-Time Insights",
      desc: "Gain actionable insights across departments.",
    },
    {
      icon: "/Seamless Integration.png",
      title: "Seamless Integration",
      desc: "Connect SAP with your current ecosystem.",
    },
  ];
  const approachSteps = [
    {
      title: "1. Assessment",
      img: "/implemantation assesment.jpg",
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
      title: "SAP CFIN",
      icon: "https://img.icons8.com/color/96/000000/invoice.png",
      description: "Consolidates financial data from varies systems into a single system, central plat form for reporting and analysis.",
    },
    {
      title: "Group Reporting",
      icon: "https://img.icons8.com/color/96/000000/combo-chart.png",
      description: "Manage data consolidation and regulatory Compliance.",
    },
    {
      title: "SAP RAR",
      icon: "/sap rar.png",
      description: "More efficient revenue accounting and reporting functions across the entire enterprise.",
    },
    {
      title: "SAP FICO",
      icon: "https://img.icons8.com/color/96/000000/accounting.png",
      description: "Manage financial accounting and reporting with precision.",
    },
    {
      title: "SAP MM",
      icon: "/Real-Time Insights.png",
      description: "Oversee procurement, inventory, and vendor management seamlessly.",
    },
    {
      title: "SAP SD",
      icon: "https://img.icons8.com/color/96/000000/sales-performance.png",
      description: "Optimize order-to-cash cycle and customer billing.",
    },
    {
      title: "SAP HCM",
      icon: "/Career Growth.png",
      description: "Simplify HR processes like payroll and talent management.",
    },
    {
      title: "SAP PP",
      icon: "https://img.icons8.com/color/96/000000/factory.png",
      description: "Plan and control manufacturing efficiently.",
    },
    {
      title: "SAP CRM",
      icon: "/SAP CFIN.png",
      description: "Enhance customer engagement and retention.",
    },
    {
      title: "SAP SuccessFactors",
      icon: "https://img.icons8.com/color/96/000000/conference-call.png",
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
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 mt-10">
          SAP Modules We Offer
          </h1>
          <p className="text-lg text-gray-600">
          Drive efficiency, agility, and innovation across all departments with our expert SAP module implementations.
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
            <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </motion.div>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <h2 className="text-3xl md:text-3xl font-bold text-blue-900 text-center mb-10">
          Key SAP Modules We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg hover:bg-white transition duration-300"
            >
              <img src={module.icon} alt={module.title} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900 text-center mb-8"
        >
          Our Approach
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8 py-10">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/team work.jpg"
            alt="Teamwork"
            className="rounded-xl shadow-md w-full md:w-1/2 object-cover h-64 md:h-80"
          />
         <ul className="md:w-1/2 space-y-3 text-lg pl-2">
              <li>✔️ We have SAP expertise</li>
              <li>✔️ Dedicated SAP certified consultants</li>
              <li>✔️ Flexible delivery models</li>
              <li>✔️ Proven record in multiple industries</li>
              <li>✔️ Customized solutions meet client needs</li>
              <li>✔️ Strong post-implementation support </li>
              <li>✔️ Innovation with latest SAP technologies</li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg text-center mt-10"
      >
        <h3 className="text-2xl font-semibold">Start Your SAP Journey Today</h3>
        <p className="text-lg">Let our experts help you achieve digital transformation with SAP.</p>
        <Link to="/Contactus">
        <button className="mt-2 px-4 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 transition">
          Request a Free Demo
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default SapModules;