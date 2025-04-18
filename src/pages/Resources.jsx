import React from 'react';
import { motion } from 'framer-motion';
import {BookOpen,Settings,Puzzle,Network,TrendingUp,ServerCog,} from 'lucide-react';
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 SAP Implementation Strategies in 2025',
    excerpt:
      'Discover the most effective approaches for implementing SAP solutions successfully in your organization.',
    image: '/Automated Workflows.avif',
    date: 'April 10, 2025',
  },
  {
    id: 2,
    title: 'How ERP Transforms Business Operations',
    excerpt:
      'Learn how modern ERP systems streamline operations, boost productivity, and enable real-time decision-making.',
    image: '/Business Intelligence & Analytics.avif',
    date: 'March 28, 2025',
  },
  {
    id: 3,
    title: 'SAP S/4HANA: What You Need to Know',
    excerpt:
      'An in-depth look into SAP S/4HANA features, benefits, and why it’s the future of enterprise management.',
    image: '/Cloud-Based Solutions.jpg',
    date: 'March 15, 2025',
  },
];

const extraContent = [
  {
    title: 'Complete Guide to ERP Implementation',
    description:
      'Step-by-step planning and execution strategies for a successful ERP rollout.',
    icon: <BookOpen className="w-10 h-10 text-blue-800" />,
  },
  {
    title: 'Understanding SAP Modules',
    description:
      'Explore SAP modules like FI, MM, SD, HR, and how they enhance enterprise functionality.',
    icon: <Settings className="w-10 h-10 text-blue-800" />,
  },
  {
    title: 'Best Practices for ERP Integration',
    description:
      'Learn to connect ERP systems with other platforms for streamlined operations.',
    icon: <Puzzle className="w-10 h-10 text-blue-800" />,
  },
  {
    title: 'Cloud vs On-Premise ERP',
    description:
      'Analyze the pros and cons of cloud-based vs traditional ERP deployment.',
    icon: <Network className="w-10 h-10 text-blue-800" />,
  },
  {
    title: 'Future Trends in ERP & SAP',
    description:
      'Discover emerging trends like AI, machine learning, and automation in ERP.',
    icon: <TrendingUp className="w-10 h-10 text-blue-800" />,
  },
  {
    title: 'Data Security in ERP Systems',
    description:
      'Understand how to secure your ERP data and comply with industry standards.',
    icon: <ServerCog className="w-10 h-10 text-blue-800" />,
  },
];
const Resources = () => {
  return (
    <div className="min-h-screen  sm:px-4 lg:px-20 bg-gray-50 text-gray-800 px-4 py-10 space-y-10 ">
      <section className="text-center max-w-3xl mx-auto mb-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl lg:text-4xl font-bold text-blue-900"
        >
          SAP & ERP Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mt-4 text-gray-600"
        >
          Stay up-to-date with the latest trends, news, and strategies in SAP and ERP solutions.
        </motion.p>
      </section>
      <motion.section
        className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/Customizable Modules.jpg"
          alt="Featured"
          className="w-full md:w-[35%]  rounded-xl object-cover"
          transition={{ duration: 0.3 }}
        />
        <div className="md:w-[65%]">
          <motion.h2
            className="text-2xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured: Why ERP is Critical for Digital Transformation
          </motion.h2>
          <motion.p
            className="text-gray-600 text-md leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ERP systems are the backbone of digital business, offering centralized control, seamless integration, and real-time visibility across all departments. In 2025, these systems are not just supporting business operations—they are transforming them.
            <br />
            With advancements in AI, machine learning, and data analytics, modern ERP platforms are enabling smarter decision-making, predictive insights, and greater operational efficiency. From automating routine tasks to enhancing supply chain resilience and customer experience, ERP systems are becoming the nerve center of agile and innovative enterprises.
          </motion.p>
        </div>
      </motion.section>
      <section className="grid md:grid-cols-3 gap-8 max-w-[1800px] mx-auto px-4">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </section>
      <section className="max-w-[1800px] px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Explore More About ERP & SAP</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {extraContent.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-[1800px] mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          SAP Resource Spotlight
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'SAP Fiori Design System',
              desc: 'Create intuitive user experiences with SAP Fiori. Explore the UI/UX toolkit trusted by enterprises worldwide.',
              img: '/SAP Fiori Design System.jpg',
            },
            {
              title: 'S/4HANA Migration Hub',
              desc: 'Tools, best practices, and accelerators to move your legacy ERP to SAP S/4HANA with confidence.',
              img: '/Migration Hub.avif',
            },
            {
              title: 'SAP Analytics Cloud',
              desc: 'Make real-time business decisions with smart dashboards, planning, and predictive analytics.',
              img: '/SAP Analytics Cloud.avif',
            },
            {
              title: 'Business Process Automation',
              desc: 'Boost efficiency through intelligent RPA and workflow automation integrated within SAP.',
              img: '/Business Process Automation.jpg',
            },
            {
              title: 'SAP Integration Suite',
              desc: 'Connect cloud, on-premise, and third-party systems seamlessly with SAP’s integration toolkit.',
              img: '/SAP Integration Suite.avif',
            },
            {
              title: 'Learning Journey: SAP BTP',
              desc: 'Master the SAP Business Technology Platform with guided, role-based learning paths.',
              img: '/Learning Journey SAP BTP.jpg',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Resources;
