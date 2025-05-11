import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUp } from "lucide-react";
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
const Dropdown = ({ title, items, isActive, isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isAnyItemActive = items.some(item => location.pathname.startsWith(item.path));
  const handleMouseEnter = () => {
    !isMobile && setIsOpen(true);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    !isMobile && setIsOpen(false);
    setIsHovered(false);
  };
  const toggleMobileDropdown = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };
  const handleItemClick = () => {
    setIsOpen(false);
    if (isMobile) closeMenu();
  };
  return (
    <div 
      className={`${isMobile ? "w-full" : "relative group"}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-2 sm:px-3 md:px-4 py-2 ${isMobile ? "w-full justify-between" : ""} ${
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
        <ChevronDown size={16} className={`transition-transform ${isOpen && isMobile ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { height: 0 } : { opacity: 0, y: -10 }}
            animate={isMobile ? { height: "auto" } : { opacity: 1, y: 0 }}
            exit={isMobile ? { height: 0 } : { opacity: 0, y: -10 }}
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
                    className={`block px-4 py-2 hover:bg-gray-100 ${isMobile ? "pl-8" : ""} ${
                      isItemActive ? "text-blue-600 font-medium bg-blue-50" : "text-blue-800"
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
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const closeMobileMenu = () => setMobileMenuOpen(false);
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowScrollButton(window.scrollY > 300 && window.innerWidth >= 768);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setShowScrollButton(window.scrollY > 300 && window.innerWidth >= 768);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const servicesItems = [
    { label: "Key SAP Modules Offering", path: "/services/SapModules" },
    { label: "SAP Analytics", path: "/services/SAPanalytics" },
    { label: "ERP Solutions", path: "/services/ERPsolutions" },
    { label: "Business One", path: "/services/Businessone" },
    { label: "Consulting", path: "/services/Consulting" },
  ];
  const isServicesActive = location.pathname.includes("/services");
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
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <nav className={`bg-white fixed w-full top-0 left-0 right-0 z-50 text-blue-800 font-semibold ${scrolled ? "shadow-lg" : "shadow-md"}`}>
        <div className={`max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 ${getNavPadding()} flex justify-between items-center`}>
          <div className="flex-shrink-0 cursor-pointer scale-120 pl-2" onClick={handleLogoClick}>
            <img src="/Final logo 1 footer.svg" alt="Logo" className={`${getLogoSize()} w-auto`} />
          </div>
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <Dropdown title="Services" items={servicesItems} isActive={isServicesActive} />
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/carrers">Careers</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
          </div>
          <div className="hidden md:flex lg:hidden gap-2 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <Dropdown title="Services" items={servicesItems} isActive={isServicesActive} />
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/carrers">Careers</NavLink>
            <NavLink to="/contactus">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-blue-800 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={closeMobileMenu}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 left-0 bottom-0 w-full md:hidden bg-white shadow-xl z-50 overflow-y-auto"
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="cursor-pointer scale-120 pl-2" onClick={handleLogoClick}>
                    <img src="Final logo 1 footer.svg" alt="Logo" className={`${windowWidth <= 320 ? 'h-8' : 'h-10'} w-auto`} />
                  </div>
                  <button onClick={closeMobileMenu} className="text-blue-800 p-1">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col p-4 space-y-2 w-full">
                  <NavLink to="/" isMobile={true} onClick={closeMobileMenu}>Home</NavLink>
                  <NavLink to="/aboutus" isMobile={true} onClick={closeMobileMenu}>About Us</NavLink>
                  <Dropdown title="Services" items={servicesItems} isActive={isServicesActive} isMobile={true} closeMenu={closeMobileMenu} />
                  <NavLink to="/resources" isMobile={true} onClick={closeMobileMenu}>Resources</NavLink>
                  <NavLink to="/carrers" isMobile={true} onClick={closeMobileMenu}>Careers</NavLink>
                  <NavLink to="/contactus" isMobile={true} onClick={closeMobileMenu}>Contact Us</NavLink>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      <div className={`${windowWidth <= 480 ? "pt-14" : windowWidth <= 768 ? "pt-16" : windowWidth <= 1024 ? "pt-18" : "pt-20"}`}></div>
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-2 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-lg z-50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={30} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
