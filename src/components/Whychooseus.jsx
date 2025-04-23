import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BadgeCheck, Rocket, Cpu, HeadsetIcon, Award, PuzzleIcon } from 'lucide-react';
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
  const features = [
    {
      icon: <BadgeCheck className="text-blue-900" size={24} />,
      title: "Certified SAP Expertise",
      description: "Our team consists of certified SAP consultants with over 15 years of industry experience delivering enterprise-grade solutions."
    },
    {
      icon: <Rocket className="text-blue-900" size={24} />,
      title: "Rapid Implementation",
      description: "Our proven methodology accelerates SAP deployment by 40%, minimizing business disruption and maximizing ROI."
    },
    {
      icon: <Cpu className="text-blue-900" size={24} />,
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest SAP technologies including S/4HANA, SAP Cloud Platform, and AI-driven analytics."
    },
    {
      icon: <HeadsetIcon className="text-blue-900" size={24} />,
      title: "Dedicated Support Team",
      description: "24/7 access to our expert support team ensures your SAP ecosystem runs smoothly without interruption."
    },
    {
      icon: <Award className="text-blue-900" size={24} />,
      title: "Industry Recognition",
      description: "Award-winning SAP implementation partner recognized by SAP for excellence in digital transformation."
    },
    {
      icon: <PuzzleIcon className="text-blue-900" size={24} />,
      title: "Custom SAP Integrations",
      description: "Seamless integration of SAP with your existing business applications for enhanced workflow and data coherence."
    }
  ];
  return (
    <section className="py-4 bg-blue-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Partner with us to transform your business with industry-leading SAP implementation, customization, and support services.
          </p>
        </motion.div>
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-800"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Whychooseus;