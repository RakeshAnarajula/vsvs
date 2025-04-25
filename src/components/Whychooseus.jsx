import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
const Whychooseus = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, isInView]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const FeatureIcon = ({ imageSrc, altText }) => (
    <div className="flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-14 h-14 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-18 lg:h-18 object-contain" 
      />
    </div>
  );
  const features = [
    {
      icon: <FeatureIcon imageSrc="/Certified SAP Expertise.png" altText="Certificate Badge" />,
      title: "Certified SAP Expertise",
      description: "Our team consists of certified SAP consultants with over 15 years of industry experience delivering enterprise-grade solutions.",
      borderColor:  "border-blue-900"
    },
    {
      icon: <FeatureIcon imageSrc="/Rapid Implementation.png" altText="Rocket" />,
      title: "Rapid Implementation",
      description: "Our proven methodology accelerates SAP deployment by 40%, minimizing business disruption and maximizing ROI.",
      borderColor:  "border-blue-900"
    },
    {
      icon: <FeatureIcon imageSrc="/Cutting-Edge Solutions.png" altText="CPU Chip" />,
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest SAP technologies including S/4HANA, SAP Cloud Platform, and AI-driven analytics.",
      borderColor:  "border-blue-900"
    },
    {
      icon: <FeatureIcon imageSrc="/Dedicated Support Team.png" altText="Headset" />,
      title: "Dedicated Support Team",
      description: "24/7 access to our expert support team ensures your SAP ecosystem runs smoothly without interruption.",
      borderColor:  "border-blue-900"
    },
    {
      icon: <FeatureIcon imageSrc="/Industry Recognition.png" altText="Award Trophy" />,
      title: "Industry Recognition",
      description: "Award-winning SAP implementation partner recognized by SAP for excellence in digital transformation.",
      borderColor:  "border-blue-900"
    },
    {
      icon: <FeatureIcon imageSrc="/Custom SAP Integrations.png" altText="Puzzle Piece" />,
      title: "Custom SAP Integrations",
      description: "Seamless integration of SAP with your existing business applications for enhanced workflow and data coherence.",
      borderColor: "border-blue-900"
    }
  ];
  return (
    <section className="py-4 bg-blue-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Partner with us to transform your business with industry-leading SAP implementation, customization, and support services.
          </p>
        </motion.div>
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${feature.borderColor}`}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Whychooseus;