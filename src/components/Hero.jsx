// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// export default function Hero() {
//   const rotatingContent = [
//     {
//       title: "SAP Implementation",
//       description: "Complete SAP solutions from setup to support for smooth digital transformation.",
//     },
//     {
//       title: "SAP Business One",
//       description: "Affordable, scalable ERP for small and mid-sized businesses.",
//     },
//     {
//       title: "SAP Consulting",
//       description: "Expert guidance to align SAP with your business goals.",
//     },
//     {
//       title: "ERP Solutions",
//       description: "Custom ERP systems to streamline your operations and boost efficiency.",
//     },
//     {
//       title: "SAP Analytics",
//       description: "Real-time insights and data visualization for better decisions.",
//     }
//   ];

//   const [currentContent, setCurrentContent] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1200,
//     height: typeof window !== 'undefined' ? window.innerHeight : 800
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentContent((prev) => (prev + 1) % rotatingContent.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleResize = () => {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight
//         });
//       };
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   const imageSet = [
//     "/consulting implementation.avif",
//     "/consulting services.jpg",
//     "/Cost Reduction.jpg",
//     "/customation and integration.avif",
//     "/Customizable Modules.jpg",
//     "/Data-Driven Decisions.avif",
//     "/Advanced Reporting.avif",
//     "/Automated Workflows.avif",
//     "/Business Intelligence & Analytics.avif",
//     "/Unlock Insights with SAP Analytics.jpg",
//     "/Training & Change Management.avif",
//     "/team work.jpg",
//     "/system upgrade.jpg",
//     "/support.jpg",
//     "/sap why choose.avif",
//   ];

//   const renderMarqueeLanes = () => {
//     const getLaneCount = () => {
//       if (windowSize.width < 640) return 2;
//       if (windowSize.width < 1024) return 3;
//       return 4;
//     };
//     const totalLanes = getLaneCount();

//     const getImageSize = () => {
//       if (windowSize.width < 640) return { width: 150, height: 180 };
//       if (windowSize.width < 1024) return { width: 200, height: 200 };
//       return { width: 320, height: 220 };
//     };

//     const imageSize = getImageSize();
//     const gap = 40;
//     const duration = 400;
//     const allLanes = [];

//     for (let lane = 0; lane < totalLanes; lane++) {
//       const fullImageSet = [...imageSet, ...imageSet];
//       const isEven = lane % 2 === 0;
//       const scrollDistance = (imageSize.height + gap) * imageSet.length;

//       allLanes.push(
//         <div
//           key={lane}
//           className="overflow-hidden"
//           style={{
//             width: `${imageSize.width}px`,
//             height: "100vh",
//             marginLeft: lane === 0 ? '0' : `${(windowSize.width / totalLanes) * 0.1}px`,
//           }}
//         >
//           <motion.div
//             className="flex flex-col items-center"
//             style={{ gap: `${gap}px` }}
//             initial={{ y: isEven ? 0 : -scrollDistance }}
//             animate={{ y: isEven ? -scrollDistance : 0 }}
//             transition={{
//               duration: duration,
//               repeat: Infinity,
//               ease: "linear",
//               repeatType: "loop",
//             }}
//           >
//             {fullImageSet.map((src, i) => (
//               <div
//                 key={`${lane}-img-${i}`}
//                 className="rounded-lg overflow-hidden shadow-lg"
//                 style={{
//                   width: `${imageSize.width}px`,
//                   height: `${imageSize.height}px`,
//                   transition: "transform 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   if (windowSize.width > 1024) {
//                     e.currentTarget.style.transform = "scale(1.05)";
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (windowSize.width > 1024) {
//                     e.currentTarget.style.transform = "scale(1)";
//                   }
//                 }}
//               >
//                 <img
//                   src={src}
//                   alt={`img-${i}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       );
//     }
//     return (
//       <div className="absolute inset-0 flex justify-evenly z-0 pointer-events-none">
//         {allLanes}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 overflow-hidden relative">
//       {renderMarqueeLanes()}
//       <div className="absolute inset-0 bg-black opacity-85 z-20" />

//       {/* VSVS Tech Waves Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center z-30 mb-8"
//       >
//         VSVS Tech Waves
//       </motion.h2>

//       {/* Rotating Content */}
//       <div className="max-w-6xl mx-auto text-center z-30 relative">
//         <div className="min-h-48 flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentContent}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="text-center py-6 px-6 rounded-2xl backdrop-blur-sm"
//               style={{
//                 background: "rgba(0,0,0,0.4)",
//                 boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)",
//               }}
//             >
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 md:mb-6">
//                 {rotatingContent[currentContent].title}
//               </h1>
//               <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
//                 {rotatingContent[currentContent].description}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const rotatingContent = [
    {
      title: "SAP Implementation",
      description: "Complete SAP solutions from setup to support for smooth digital transformation.",
    },
    {
      title: "SAP Business One",
      description: "Affordable, scalable ERP for small and mid-sized businesses.",
    },
    {
      title: "SAP Consulting",
      description: "Expert guidance to align SAP with your business goals.",
    },
    {
      title: "ERP Solutions",
      description: "Custom ERP systems to streamline your operations and boost efficiency.",
    },
    {
      title: "SAP Analytics",
      description: "Real-time insights and data visualization for better decisions.",
    }
  ];

  const [currentContent, setCurrentContent] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % rotatingContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const imageSet = [
    "/consulting implementation.avif",
    "/consulting services.jpg",
    "/Cost Reduction.jpg",
    "/customation and integration.avif",
    "/Customizable Modules.jpg",
    "/Data-Driven Decisions.avif",
    "/Advanced Reporting.avif",
    "/Automated Workflows.avif",
    "/Business Intelligence & Analytics.avif",
    "/Unlock Insights with SAP Analytics.jpg",
    "/Training & Change Management.avif",
    "/team work.jpg",
    "/system upgrade.jpg",
    "/support.jpg",
    "/sap why choose.avif",
  ];

  const renderMarqueeLanes = () => {
    const getLaneCount = () => {
      if (windowSize.width < 640) return 2;
      if (windowSize.width < 1024) return 3;
      return 4;
    };
    const totalLanes = getLaneCount();

    const getImageSize = () => {
      if (windowSize.width < 640) return { width: 190, height: 190 };
      if (windowSize.width < 1024) return { width: 230, height: 200 };
      return { width: 350, height: 220 }; // 🔽 reduced height
    };

    const imageSize = getImageSize();
    const gap = 20; // 🔽 reduced vertical spacing
    const duration = 400;
    const allLanes = [];

    for (let lane = 0; lane < totalLanes; lane++) {
      const fullImageSet = [...imageSet, ...imageSet];
      const isEven = lane % 2 === 0;
      const scrollDistance = (imageSize.height + gap) * imageSet.length;

      allLanes.push(
        <div
          key={lane}
          className="overflow-hidden"
          style={{
            width: `${imageSize.width}px`,
            height: "90vh", // 🔽 reduced overall screen height
            marginLeft: lane === 0 ? '0' : `${(windowSize.width / totalLanes) * 0.05}px`, // 🔽 reduced horizontal space between lanes
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            style={{ gap: `${gap}px` }}
            initial={{ y: isEven ? 0 : -scrollDistance }}
            animate={{ y: isEven ? -scrollDistance : 0 }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {fullImageSet.map((src, i) => (
              <div
                key={`${lane}-img-${i}`}
                className="rounded-lg overflow-hidden shadow-lg"
                style={{
                  width: `${imageSize.width}px`,
                  height: `${imageSize.height}px`,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (windowSize.width > 1024) {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (windowSize.width > 1024) {
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                <img
                  src={src}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      );
    }
    return (
      <div className="absolute inset-0 flex justify-evenly z-0 px-2 pointer-events-none">
        {allLanes}
      </div>
    );
  };

  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center px-6 py-10 overflow-hidden relative"> {/* 🔽 reduced screen height */}
      {renderMarqueeLanes()}
      <div className="absolute inset-0 bg-black opacity-85 z-20" />

      {/* 🔹 Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center z-30 mb-8"
      >
        VSVS Tech Waves
      </motion.h2>

      {/* 🔹 Rotating Text Block */}
      <div className="max-w-6xl mx-auto text-center z-30 relative">
        <div className="min-h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-6 px-6 rounded-2xl backdrop-blur-sm"
              style={{
                background: "rgba(0,0,0,0.4)",
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 md:mb-6">
                {rotatingContent[currentContent].title}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                {rotatingContent[currentContent].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
