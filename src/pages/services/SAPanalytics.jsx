import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChartLine, FaCog, FaDatabase } from "react-icons/fa";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SAPAnalytics = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 md:px-20 space-y-10 text-gray-800">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 items-center gap-12"
      >
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-6 mt-6">
            Unlock Insights with SAP Analytics
          </h1>
          <p className="text-lg text-gray-600">
            Leverage the power of SAP Analytics to transform data into actionable insights that drive business decisions and improve performance.
          </p>
        </div>
        <img
          src="/Unlock Insights with SAP Analytics.jpg"
          alt="SAP Analytics"
          className="rounded-2xl shadow-lg w-full h-56 md:h-64 lg:h-60 object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-4 text-center"
      >
        {[
          {
            icon: <FaChartLine />,
            title: "Real-time Analytics",
            desc: "Track real-time data to stay ahead of business trends.",
          },
          {
            icon: <FaDatabase />,
            title: "Data Integration",
            desc: "Seamlessly integrate data from multiple sources into a unified dashboard.",
          },
          {
            icon: <FaCog />,
            title: "Customizable Reports",
            desc: "Generate tailored reports to suit your business needs and key metrics.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-4xl text-blue-700 mb-4">{item.icon}</div>
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
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Data Insights and Trends
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Leverage SAP's analytics capabilities to uncover trends, identify key growth opportunities, and make informed business decisions.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Predictive Analytics</h3>
            <p className="text-gray-600">
              Predict future trends and identify key factors that influence business growth with SAP's predictive analytics tools.
            </p>
            <img
              src="/Predictive Analytics.avif"
              alt="Predictive Analytics"
              className="rounded-xl mt-6 w-full max-w-md md:max-w-sm mx-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Data-Driven Decisions</h3>
            <p className="text-gray-600">
              Utilize real-time data to drive smarter decisions across various departments like finance, sales, and marketing.
            </p>
            <img
              src="/Data-Driven Decisions.avif"
              alt="Data-Driven Decisions"
              className="rounded-xl mt-6 w-full max-w-md md:max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-white p-6 md:p-12 rounded-xl shadow-lg"
>
  <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center md:text-center">
    Interactive Data Visualizations
  </h2>
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="w-full md:w-1/2">
      <img
        src="/Interactive Data Visualizations.avif"
        alt="Data Visualization"
        className="rounded-xl shadow-xl w-full"
      />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <p className="text-lg text-gray-700">
        SAP Analytics empowers businesses with dynamic and interactive dashboards that allow users to drill down into key performance indicators (KPIs) in real time.
      </p>
      <p className="text-gray-600">
        These visualizations are not just static reports — they are dynamic tools that respond to user input, helping to uncover insights faster and more efficiently.
      </p>
      <p className="text-gray-600">
        By visualizing data through charts, graphs, heat maps, and geographical dashboards, businesses gain better understanding and engagement across departments.
      </p>
      <p className="text-gray-600">
        Empower every team with intuitive dashboards that lead to faster and more accurate decision-making.
      </p>
    </div>
  </div>
</motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Benefits of SAP Analytics Integration
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          SAP Analytics seamlessly integrates with your existing systems, providing centralized, actionable insights.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Faster Decision-Making",
              desc: "Get access to real-time data to make quick, informed decisions.",
              img: "/Faster Decision-Making.jpg",
            },
            {
              title: "Cost Reduction",
              desc: "By optimizing operations with insights, you can minimize inefficiencies and reduce costs.",
              img: "/Cost Reduction.jpg",
            },
            {
              title: "Enhanced Reporting",
              desc: "Generate customized reports that align with your KPIs and business goals.",
              img: "/Enhanced Reporting.jpg",
            },
            {
              title: "Improved Forecasting",
              desc: "Accurate predictive analytics to help you anticipate market changes and trends.",
              img: "/Improved Forecasting.jpg",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
              <img
                src={benefit.img}
                alt={benefit.title}
                className="rounded-xl mt-6 w-full max-w-md md:max-w-sm mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white p-6 rounded-2xl text-center shadow-2xl"
      >
        <h3 className="text-2xl font-semibold">Ready to Transform Your Data?</h3>
        <p className="mb-4 text-lg">
          Unlock the power of SAP Analytics and take your business to the next level with actionable insights.
        </p>
        <Link to="/Contactus">
        <button className="bg-white text-blue-900 px-4 py-3 font-bold rounded-full hover:bg-blue-100 transition">
          Contact Us for a Demo
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default SAPAnalytics;
