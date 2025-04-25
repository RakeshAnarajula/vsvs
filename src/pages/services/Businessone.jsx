import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {FaMoneyBillWave, FaBoxes, FaUserFriends, FaShoppingBasket, FaClipboardList, FaChartPie} from "react-icons/fa";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const SAPBusinessOne = () => {
  const features = [
    { 
      icon: <img src="https://img.icons8.com/color/48/analytics.png" alt="Analytics" />, 
      title: "Real-Time Analytics", 
      desc: "Make faster decisions with instant access to business data." 
    },
    { 
      icon: <img src="https://img.icons8.com/color/48/synchronize.png" alt="Integrated Processes" />, 
      title: "Integrated Processes", 
      desc: "Streamline operations across finance, sales, and inventory." 
    },
    { 
      icon: <img src="https://img.icons8.com/color/48/smartphone.png" alt="Mobile Ready" />, 
      title: "Mobile Ready", 
      desc: "Access insights anytime, anywhere from mobile devices." 
    },
    { 
      icon: <img src="https://img.icons8.com/color/48/database.png" alt="Centralized Data" />, 
      title: "Centralized Data", 
      desc: "Unify your business data under one secure platform." 
    },
    { 
      icon: <img src="https://img.icons8.com/color/48/idea.png" alt="Scalable & Flexible" />, 
      title: "Scalable & Flexible", 
      desc: "Grow your system as your business evolves." 
    },
    { 
      icon: <img src="https://img.icons8.com/color/48/security-checked.png" alt="Enhanced Security" />, 
      title: "Enhanced Security", 
      desc: "Protect your business data with advanced security protocols." 
    },
  ];

  const industries = [
    { 
      icon: <img src="/manufacturing.png" alt="Manufacturing" />, 
      title: "Manufacturing", 
      desc: "Optimize production planning and material tracking." 
    },
    { 
      icon: <img src="/Retail.png" alt="Retail" />, 
      title: "Retail", 
      desc: "Manage inventory and multi-channel sales in one place." 
    },
    { 
      icon: <img src="/Logistics.png" alt="Logistics" />, 
      title: "Logistics", 
      desc: "Track shipments, warehouse management, and procurement." 
    },
    { 
      icon: <img src="/Professional Services.png" alt="Professional Services" />, 
      title: "Professional Services", 
      desc: "Deliver seamless customer experiences and project tracking." 
    },
  ];

  const modules = [
    {
      name: "Financial Management",
      icon: <FaMoneyBillWave />,
      image: "/financial.avif",
      description: "Comprehensive accounting, budgeting, and financial reporting tools for better fiscal management."
    },
    {
      name: "Inventory & Distribution",
      icon: <FaBoxes />,
      image: "/inventory.jpg",
      description: "Optimize stock levels, warehouse operations, and distribution channels for maximum efficiency."
    },
    {
      name: "Sales & CRM",
      icon: <FaUserFriends />,
      image: "/sales and crm.jpg",
      description: "Manage the complete sales cycle and maintain strong customer relationships with integrated tools."
    },
    {
      name: "Purchasing",
      icon: <FaShoppingBasket />,
      image: "/purchaseing.jpg",
      description: "Streamline procurement processes from purchase requests to vendor invoice payments."
    },
    {
      name: "Production Planning",
      icon: <FaClipboardList />,
      image: "/production and planning.avif",
      description: "Plan and execute manufacturing operations with precise material and resource management."
    },
    {
      name: "Business Intelligence",
      icon: <FaChartPie />,
      image: "/business intelligence.avif",
      description: "Transform data into actionable insights with powerful analytics and reporting capabilities."
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-20 py-2 space-y-6 text-gray-800">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 mt-10">
            SAP Business One Solutions
          </h1>
          <p className="text-lg text-gray-600">
            Empower small and medium enterprises with integrated, affordable ERP solutions built for growth.
          </p>
        </div>
        <img
          src="/sap business.avif"
          alt="SAP Hero"
          className="rounded-2xl shadow-lg w-full h-56 md:h-64 lg:h-60 object-cover"
        />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Core Modules</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="h-44 overflow-hidden bg-gray-200">
                <img
                  src={module.image}
                  alt={module.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-blue-700">{module.icon}</span>
                  <h3 className="text-xl font-semibold text-blue-800">{module.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {industries.map((ind, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <div className="flex justify-center mb-4">{ind.icon}</div>
              <h4 className="font-bold text-lg mb-1">{ind.title}</h4>
              <p className="text-sm text-gray-600">{ind.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-start md:items-center"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center md:hidden order-1">
          Why SAP Business One?
        </h2>
        <div className="order-2 md:order-1">
          <img
            src="/sap why choose.avif"
            alt="Benefits"
            className="rounded-xl shadow-xl w-full h-64 object-cover"
          />
        </div>
        <div className="order-3 md:order-2 flex flex-col justify-center space-y-6 md:space-y-4">
          <h2 className="hidden md:block text-3xl font-bold text-blue-900 mb-2">
            Why SAP Business One?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
             <li>Affordable ERP for SMEs</li>
             <li>Quick deployment and user-friendly interface</li>
             <li>Customizable to fit your industry</li>
             <li>Powerful reporting and forecasting tools</li>
             <li>Seamless integration with existing systems</li>
             <li>Real-time data access for better decision-making</li>
           </ul>
        </div>
      </motion.div>
      <motion.div
        className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
        <p className="text-lg">
          Schedule a personalized demo and discover how SAP Business One can streamline your operations.
        </p>
        <Link to="/Contactus">
        <button className="mt-4 px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow hover:bg-blue-100 transition">
          Schedule a Demo
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default SAPBusinessOne;