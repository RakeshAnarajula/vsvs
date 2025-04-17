import React, { useEffect, useState } from "react";
const testimonials = [
  {
    name: "Anjali Rao",
    role: "Project Manager, SAP Corp",
    feedback:
      "The implementation process was seamless and exceeded our expectations. The team demonstrated a deep understanding of ERP systems. Their attention to detail and commitment to meeting deadlines made this one of the smoothest.",
    image: "/business intelligence.avif"
  },
  {
    name: "Rahul Mehta",
    role: "CTO, FinSys Pvt Ltd",
    feedback:
      "Their expertise in SAP solutions helped us optimize operations and cut costs significantly. Truly professional team! The customized dashboard they created gives us real-time visibility into key metrics that has transformed.",
    image: "/Automated Workflows.avif"
  },
  {
    name: "Priya Desai",
    role: "ERP Analyst, MaxonTech",
    feedback:
      "Outstanding support throughout the deployment process. I highly recommend their services. Their team was available 24/7 during critical implementation phases, and their training program ensured all our staff were comfortable .",
    image: "/Business Intelligence & Analytics.avif"
  },
  {
    name: "Arjun Verma",
    role: "IT Director, TechNova",
    feedback:
      "Exceptional service and attention to detail. Our ERP migration was smooth and successful. What impressed me most was how they handled data migration with zero downtime and complete accuracy, a feat our previous vendor said was impossible.",
    image: "/business intelligence.avif"
  },
  {
    name: "Sneha Kapoor",
    role: "Operations Head, LogicBase",
    feedback:
      "Reliable, efficient, and highly skilled professionals. Working with them was a great experience. Their team took the time to understand our unique business processes and delivered a solution that feels tailor-made rather than forced into a standard template.",
    image: "/Advanced Reporting.avif"
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate testimonials
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx) => {
    setIndex(idx);
  };

  const current = testimonials[index];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-6 md:px-8 lg:px-12">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      {/* Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-blue-900 mb-4 inline-block relative">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what industry leaders say about our enterprise SAP & ERP solutions
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="grid md:grid-cols-5 ">
            {/* Image Side - Fixed for mobile view */}
            <div className="col-span-5 md:col-span-2 bg-blue-900 min-h-40 md:min-h-full">
              <div className="flex items-center justify-center h-full py-8 md:py-0">
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="col-span-5 md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-5xl text-blue-200 font-serif">"</div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                {current.feedback}
              </p>
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{current.name}</h3>
                <p className="text-blue-900 font-medium">{current.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index ? "bg-blue-900 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;