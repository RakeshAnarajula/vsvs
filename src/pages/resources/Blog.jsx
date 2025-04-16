import React from 'react';
import { motion } from 'framer-motion';
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 SAP Implementation Strategies in 2025',
    excerpt: 'Discover the most effective approaches for implementing SAP solutions successfully in your organization.',
    image: '/Automated Workflows.avif',
    date: 'April 10, 2025',
  },
  {
    id: 2,
    title: 'How ERP Transforms Business Operations',
    excerpt: 'Learn how modern ERP systems streamline operations, boost productivity, and enable real-time decision-making.',
    image: '/Business Intelligence & Analytics.avif',
    date: 'March 28, 2025',
  },
  {
    id: 3,
    title: 'SAP S/4HANA: What You Need to Know',
    excerpt: 'An in-depth look into SAP S/4HANA features, benefits, and why it’s the future of enterprise management.',
    image: '/Cloud-Based Solutions.jpg',
    date: 'March 15, 2025',
  },
];
const faqs = [
  {
    question: 'What is SAP?',
    answer: 'SAP is a leading enterprise resource planning (ERP) software that helps businesses manage operations and customer relations efficiently.',
  },
  {
    question: 'What industries use ERP the most?',
    answer: 'Industries such as manufacturing, logistics, finance, retail, and healthcare benefit significantly from ERP systems.',
  },
  {
    question: 'Is SAP suitable for small businesses?',
    answer: 'Yes, SAP offers cloud-based solutions like SAP Business One, which is ideal for small and medium-sized enterprises.',
  },
];
const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 space-y-20">
      <section className="text-center max-w-3xl mx-auto mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
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
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-10 items-center bg-white p-6 rounded-2xl shadow-lg">
        <img
          src="/Customizable Modules.jpg"
          alt="Featured"
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Featured: Why ERP is Critical for Digital Transformation</h2>
          <p className="text-gray-600">
            ERP systems are the backbone of digital business, offering centralized control and real-time visibility. Explore how they are reshaping businesses in 2025.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto ">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </section>
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-blue-700">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
