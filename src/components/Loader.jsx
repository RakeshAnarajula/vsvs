import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: '',
  });
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: '',
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
  };

  // Location data
  const locations = [
    {
      title: 'Headquarters',
      address: '123 Corporate Plaza, Suite 500, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'info@company.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
    {
      title: 'East Coast Office',
      address: '456 Business Avenue, 20th Floor, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'eastcoast@company.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    },
    {
      title: 'European Office',
      address: '78 Tech Boulevard, London, UK EC2N 4AY',
      phone: '+44 20 1234 5678',
      email: 'europe@company.com',
      hours: 'Monday - Friday: 9:00 AM - 5:30 PM',
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive enterprise solutions including custom software development, system integration, cloud migration, and IT consulting services tailored to your business needs.',
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'Our support team is available 24/7 with guaranteed response times of 1 hour for critical issues, 4 hours for high-priority issues, and 24 hours for standard inquiries.',
    },
    {
      question: 'Do you offer custom implementation services?',
      answer: 'Yes, we specialize in custom implementations tailored to your specific business requirements. Our team of experts will work with you to develop solutions that align with your goals and processes.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our diverse expertise allows us to understand the unique challenges across different sectors.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="bg-blue-600 text-white py-16 px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We're here to help with your technology needs. Reach out and let's start a conversation about how we can help your business grow.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              
              {formSubmitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-green-600 text-xl font-medium mb-2">Thank you for your message!</div>
                  <p className="text-green-600">We will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your needs or questions in detail..."
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <motion.button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit Message
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div 
              className="mt-12 bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate={activeAccordion === index ? "visible" : "hidden"}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 text-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Side Information */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Info */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-100 rounded-full p-2 text-blue-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (800) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Monday-Friday, 8am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-100 rounded-full p-2 text-blue-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">contact@company.com</p>
                    <p className="text-gray-500 text-sm mt-1">For general inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-100 rounded-full p-2 text-blue-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Support</h3>
                    <p className="text-gray-600 mt-1">support@company.com</p>
                    <p className="text-gray-500 text-sm mt-1">24/7 technical support</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Office Locations */}
            <motion.div 
              className="mt-8 bg-white rounded-xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Offices</h2>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div 
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <h3 className="font-semibold text-lg text-gray-900">{location.title}</h3>
                    
                    <div className="mt-4 space-y-3 text-gray-600">
                      <div className="flex">
                        <MapPin className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      
                      <div className="flex">
                        <Phone className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      
                      <div className="flex">
                        <Mail className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.email}</span>
                      </div>
                      
                      <div className="flex">
                        <Clock className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="w-full bg-gray-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Us On The Map</h2>
          
          {/* Placeholder for map - in a real implementation you would use a mapping service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64 md:h-96">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-blue-600 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's start a conversation about your technology needs today.</p>
          
          <motion.button
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg inline-flex items-center transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule a Call
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="text-gray-400 max-w-xs">Innovative technology solutions for businesses of all sizes.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Company Name. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;