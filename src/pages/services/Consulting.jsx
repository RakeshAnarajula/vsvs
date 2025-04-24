import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserTie, FaCogs, FaChartLine, FaRegLightbulb } from "react-icons/fa";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SAPConsulting = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-20 py-2 text-gray-800 space-y-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 items-center gap-10"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 mt-10">
            SAP Consulting Services
          </h1>
          <p className="text-lg text-gray-600">
            Drive digital transformation with expert-led SAP consulting. From planning to implementation, we ensure tailored ERP success.
          </p>
        </div>
        <img
          src="/consulting services.jpg"
          alt="SAP Consulting"
          className="rounded-2xl shadow-lg w-full h-56 md:h-64 lg:h-60 object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-10 text-center"
      >
        {[
          { icon: <FaUserTie />, title: "Expert Advisory", desc: "Industry veterans guiding your SAP journey." },
          { icon: <FaCogs />, title: "End-to-End Services", desc: "From assessment to post-go-live support." },
          { icon: <FaChartLine />, title: "Business Aligned", desc: "Solutions tailored to your company’s growth goals." },
          { icon: <FaRegLightbulb />, title: "Innovation Driven", desc: "Stay ahead with the latest SAP technologies." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
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
>
  <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
    Our SAP Consulting Services
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        img: "/consulting implementation.avif",
        title: "SAP Implementation",
        desc: "Seamless end-to-end SAP system implementation tailored to your business needs.",
      },
      {
        img: "/system upgrade.jpg",
        title: "System Upgrades & Migration",
        desc: "Ensure a smooth upgrade or migration to the latest SAP version with zero disruption.",
      },
      {
        img: "/customation and integration.avif",
        title: "Customization & Integration",
        desc: "Adapt SAP to fit your workflows and integrate it with third-party platforms or tools.",
      },
      {
        img: "/Ongoing Support & Maintenance.jpg",
        title: "Ongoing Support & Maintenance",
        desc: "Comprehensive support to ensure your SAP system runs smoothly and securely.",
      },
      {
        img: "/Training & Change Management.avif",
        title: "Training & Change Management",
        desc: "Equip your teams with the skills and knowledge to use SAP efficiently.",
      },
      {
        img: "/Business Intelligence & Analytics.avif",
        title: "Business Intelligence & Analytics",
        desc: "Leverage SAP tools to gain real-time insights and drive data-driven decisions.",
      },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={service.img}
          alt={service.title}
          className="h-44 w-full object-cover"
        />
        <div className="p-5">
          <h4 className="text-blue-800 font-semibold text-lg mb-2">
            {service.title}
          </h4>
          <p className="text-gray-600 text-sm">{service.desc}</p>
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
  className="grid md:grid-cols-2 items-center gap-6 "
>
  <div className="block md:hidden">
    <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Why Partner With Us?</h2>
  </div>
  <img
    src="/Why Partner With Us.avif"
    alt="Benefits"
    className="rounded-xl shadow-xl w-full h-72 object-cover"
  />
  <div>
        <h2 className="hidden md:block text-3xl font-bold text-blue-900 mb-4">
      Why Partner With Us?
    </h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>Customized SAP roadmaps for your business</li>
  <li>Certified SAP consultants with years of domain expertise</li>
  <li>Agile methodology for faster ROI</li>
  <li>Seamless data migration & change management</li>
  <li>End-to-end support from strategy to execution</li>
  <li>Proven track record across multiple industries</li>
</ul>

  </div>
</motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white p-6 rounded-2xl text-center shadow-2xl"
      >
        <h3 className="text-2xl font-semibold ">Looking to Elevate Your SAP Experience?</h3>
        <p className="mb-2 text-lg">Let’s collaborate to drive business transformation through tailored SAP solutions.</p>
        <Link to="/Contactus">
        <button className="bg-white text-blue-900 px-4 py-3 font-bold rounded-full hover:bg-blue-100 transition">
          Talk to a Consultant
        </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default SAPConsulting;
