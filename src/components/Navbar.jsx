import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUp } from "lucide-react";
const Dropdown = ({ title, items, isActive, isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isAnyItemActive = items.some(item => location.pathname.startsWith(item.path));

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
      setIsHovered(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
      setIsHovered(false);
    }
  };
  
  const toggleMobileDropdown = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };
  const handleItemClick = () => {
    setIsOpen(false);
    setIsHovered(false);
    if (isMobile) closeMenu();
  };
  return (
    <div 
      className={`${isMobile ? "w-full" : "relative group"}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 ${
          isMobile ? "w-full justify-between" : "relative"
        } ${
          isActive || isAnyItemActive ? "text-blue-600 font-medium" : "text-blue-800 hover:text-blue-600"
        }`}
        onClick={toggleMobileDropdown}
      >
        <span className="relative inline-block">
          {title}
          {!isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: isHovered || isActive || isAnyItemActive ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen && isMobile ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { height: 0, opacity: 1 } : { opacity: 0, y: -10 }}
            animate={isMobile ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0 }}
            exit={isMobile ? { height: 0, opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`${
              isMobile 
                ? "bg-gray-50 overflow-hidden w-full" 
                : "absolute z-50 bg-white shadow-lg rounded-md mt-2 py-1"
            }`}
            style={!isMobile ? { minWidth: "200px" } : {}}
          >
            <div className="w-full">
              {items.map((item, index) => {
                const isItemActive = location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      isMobile ? "pl-8" : ""
                    } ${
                      isItemActive 
                        ? "text-blue-600 font-medium bg-blue-50" 
                        : "text-blue-800 hover:text-blue-600"
                    }`}
                    onClick={handleItemClick}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ to, children, isMobile, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`${
        isMobile ? "w-full block" : ""
      } px-2 sm:px-3 md:px-4 py-2 relative ${
        isActive ? "text-blue-600 font-medium" : "text-blue-800 hover:text-blue-600"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative inline-block">
        {children}
        {!isMobile && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: isHovered || isActive ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollButton(window.scrollY > 300);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutItems = [
    { label: "Our Story", path: "/aboutus/ourstory" },
    { label: "Leadership", path: "/aboutus/leadership" },
  ];

  const servicesItems = [
    { label: "Implementation", path: "/services/Implementation" },
    { label: "Business One", path: "/services/Businessone" },
    { label: "Consulting", path: "/services/Consulting" },
    { label: "ERP Solutions", path: "/services/ERPsolutions" },
    { label: "SAP Analytics", path: "/services/SAPanalytics" },
  ];

  const resourcesItems = [
    { label: "Blog", path: "/resources/blog" },
    { label: "Case Studies", path: "/resources/Casestudies" },
  ];

  const isAboutActive = location.pathname.includes("/aboutus");
  const isServicesActive = location.pathname.includes("/services");
  const isResourcesActive = location.pathname.includes("/resources");

  const getLogoSize = () => {
    if (windowWidth <= 320) return "h-8"; 
    if (windowWidth <= 480) return "h-10";
    if (windowWidth <= 768) return "h-12"; 
    if (windowWidth <= 1024) return "h-14"; 
    return "h-16"; 
  };

  const getNavPadding = () => {
    if (windowWidth <= 640) return "py-2";
    if (windowWidth <= 1024) return "py-3";
    return "py-2";
  };

  return (
    <>
      <nav className={`bg-white text-blue-800 fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}>
        <div className={`max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 ${getNavPadding()} flex justify-between items-center`}>
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/vsvs logo.jpg" 
              alt="Logo" 
              className={`${getLogoSize()} w-auto`} 
            />
          </Link>
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            <NavLink to="/">Home</NavLink>
            <Dropdown title="About Us" items={aboutItems} isActive={isAboutActive} />
            <Dropdown title="Services" items={servicesItems} isActive={isServicesActive} />
            <Dropdown title="Resources" items={resourcesItems} isActive={isResourcesActive} />
            <NavLink to="/carrers">Careers</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
          </div>
          <div className="hidden md:flex lg:hidden gap-2 items-center">
            <NavLink to="/">Home</NavLink>
            <Dropdown title="About Us" items={aboutItems} isActive={isAboutActive} />
            <Dropdown title="Services" items={servicesItems} isActive={isServicesActive} />
            <Dropdown title="Resources" items={resourcesItems} isActive={isResourcesActive} />
            <NavLink to="/carrers">Careers</NavLink>
            <NavLink to="/contactus">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-blue-800 p-2" 
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-full md:hidden bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link to="/" onClick={closeMobileMenu} className="flex-shrink-0">
                  <img 
                    src="/vsvs logo.jpg" 
                    alt="Logo" 
                    className={`${windowWidth <= 320 ? 'h-8' : 'h-10'} w-auto`} 
                  />
                </Link>
                <button 
                  onClick={closeMobileMenu} 
                  className="text-blue-800 p-1" 
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col p-2 sm:p-4 space-y-1 sm:space-y-2 w-full">
                <NavLink to="/" isMobile={true} onClick={closeMobileMenu}>
                  Home
                </NavLink>
                <Dropdown 
                  title="About Us" 
                  items={aboutItems} 
                  isActive={isAboutActive} 
                  isMobile={true} 
                  closeMenu={closeMobileMenu} 
                />
                <Dropdown 
                  title="Services" 
                  items={servicesItems} 
                  isActive={isServicesActive} 
                  isMobile={true} 
                  closeMenu={closeMobileMenu} 
                />
                <Dropdown 
                  title="Resources" 
                  items={resourcesItems} 
                  isActive={isResourcesActive} 
                  isMobile={true} 
                  closeMenu={closeMobileMenu} 
                />
                <NavLink to="/carrers" isMobile={true} onClick={closeMobileMenu}>
                  Careers
                </NavLink>
                <NavLink to="/contactus" isMobile={true} onClick={closeMobileMenu}>
                  Contact Us
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className={`${
        windowWidth <= 480 ? "pt-14" : 
        windowWidth <= 768 ? "pt-16" : 
        windowWidth <= 1024 ? "pt-18" : "pt-20"
      }`}></div>
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className={`fixed ${
              windowWidth <= 640 ? "bottom-2 right-4 p-2" : "bottom-8 right-8 p-3"
            } bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg z-50`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={windowWidth <= 640 ? 20 : 24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;