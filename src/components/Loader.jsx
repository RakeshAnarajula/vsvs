import React, { useEffect } from 'react';
const Loader = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dotJump {
        0%, 80%, 100% {
          transform: scale(0);
        }
        40% {
          transform: scale(2.0);
        }
      }
      .animate-dot1 {
        animation: dotJump 1.6s -0.32s linear infinite;
      }
      .animate-dot2 {
        animation: dotJump 1.6s -0.16s linear infinite;
      }
      
      .animate-dot3 {
        animation: dotJump 1.6s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []); 
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="mb-8">
        <img 
          src="/vsvs logo.jpg" 
          alt="Company Logo" 
          className="h-16 w-auto"
        />
      </div>
            <div className="flex flex-row items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-white bg-[#0074C8] mx-2.5 animate-dot1"></div>
        <div className="w-4 h-4 rounded-full border-2 border-white bg-[#0074C8] mx-2.5 animate-dot2"></div>
        <div className="w-4 h-4 rounded-full border-2 border-white bg-[#0074C8] mx-2.5 animate-dot3"></div>
      </div>
    </div>
  );
};

export default Loader;