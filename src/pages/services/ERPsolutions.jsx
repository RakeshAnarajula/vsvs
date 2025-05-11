import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const ERPSolutions = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-20 py-2 text-gray-800 space-y-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 items-center gap-12"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 mt-10">
            ERP Solutions for Business Transformation
          </h1>
          <p className="text-lg text-gray-600">
            Transform your business processes with integrated ERP solutions that enhance efficiency, collaboration, and decision-making.
          </p>
        </div>
        <img
          src="/ERP Solutions.jpg"
          alt="ERP Solutions"
          className="rounded-2xl shadow-lg w-full h-56 md:h-64 lg:h-60 object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-4 text-center"
      >
        {[ 
          { 
            icon: "/manufacturing.png", 
            title: "Comprehensive ERP Solutions", 
            desc: "Streamline all aspects of your business with tailored ERP systems." 
          },
          { 
            icon: "/Seamless Integration.png", 
            title: "Seamless Integration", 
            desc: "Integrate ERP with existing systems for a smooth transition and continuous performance." 
          },
          { 
            icon: "/Certified SAP Expertise.png", 
            title: "Industry-Specific Solutions", 
            desc: "Customize ERP to meet the unique needs of manufacturing, retail, and services sectors." 
          },
          { 
            icon: "/Analytics & Reporting.png", 
            title: "Analytics & Reporting", 
            desc: "Leverage real-time data to make smarter, data-driven decisions and drive growth." 
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Key Features of Our ERP Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            {
              img: "/Customizable Modules.jpg",
              title: "Customizable Modules",
              desc: "Tailor ERP modules to suit your business processes and requirements."
            },
            {
              img: "/Cloud-Based Solutions.jpg",
              title: "Cloud-Based Solutions",
              desc: "Access ERP from anywhere with secure cloud-based platforms, ensuring flexibility and scalability."
            },
            {
              img: "/Automated Workflows.jpg",
              title: "Automated Workflows",
              desc: "Reduce manual effort with automation across various business processes."
            },
            {
              img: "/Improved Collaboration.jpg",
              title: "Improved Collaboration",
              desc: "Enhance team collaboration with integrated communication tools and document management."
            },
            {
              img: "/Robust Security.jpg",
              title: "Robust Security",
              desc: "Ensure the safety of your data with advanced encryption and security features."
            },
            {
              img: "/Advanced Reporting.jpg",
              title: "Advanced Reporting",
              desc: "Generate in-depth reports and dashboards to monitor performance and optimize operations."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="text-blue-800 font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 items-start md:items-center gap-12"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center md:hidden order-1">
          Why Choose Our ERP Solutions?
        </h2>
        <div className="order-2 md:order-1">
          <img
            src="/Why Choose Our ERP Solutions.jpg"
            alt="Benefits"
            className="rounded-xl shadow-xl w-full h-72 object-cover"
          />
        </div>
        <div className="order-3 md:order-2 space-y-6">
          <h2 className="hidden md:block text-3xl font-bold text-blue-900 mb-2">
            Why Choose Our ERP Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Fully integrated across all departments</li>
            <li>Improved data visibility and decision-making</li>
            <li>Enhanced efficiency through automated processes</li>
            <li>Support for real-time reporting and analytics</li>
            <li>Scalable as your business grows</li>
            <li>Minimized operational costs and redundancies</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white p-4 rounded-2xl text-center shadow-2xl"
      >
        <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
        <p className="mb-2 text-lg">Let's help you implement the best ERP solution for your organization's needs.</p>
        <Link to="/Contactus">
        <button className="bg-white text-blue-900 px-6 py-3 font-bold rounded-full hover:bg-blue-100 transition">
          Talk to an Expert
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default ERPSolutions;