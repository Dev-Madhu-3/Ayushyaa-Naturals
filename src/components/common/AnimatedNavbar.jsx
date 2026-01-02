// src/components/common/AnimatedNavbar.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search, User, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartDrawer from "./CartDrawer";
import { useSearch } from "../../context/SearchContext";
import SearchModal from "./SearchModal";
import { Fade, Slide, Bounce, Flip } from "react-awesome-reveal";

const AnimatedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const {  setIsSearchOpen } = useSearch();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Why Natural", path: "/why-natural" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    scrolled: {
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
        <nav
          className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover"
                    src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767005685/closeup-1to1_d5macq.jpg"
                    alt="Logo"
                  />
                </motion.div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Ayushyaa Naturals
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 md:space-x-3">
                {/* Search Button */}
                <motion.button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  aria-label="Search"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Search size={18} />
                </motion.button>

                {/* Cart Button */}
                <motion.button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors relative"
                  aria-label="Shopping cart"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart size={18} />
                  {getCartCount() > 0 && (
                    <motion.span
                      className="absolute top-0 right-0 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {getCartCount()}
                    </motion.span>
                  )}
                </motion.button>

                {/* User Account - Desktop Only */}
                {/* <div className="hidden md:block relative" ref={dropdownRef}>
                <motion.button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  aria-label="User account"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <User size={18} />
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                      >
                        My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                      >
                        Wishlist
                      </Link>
                      <hr className="my-2" />
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                      >
                        Login / Register
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

                {/* Mobile Menu Button */}
                <motion.button
                  className="lg:hidden p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div
                ref={mobileMenuRef}
                className="lg:hidden bg-white border-t border-gray-100"
            >
              <Fade>
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item, index) => (
                      <Slide
                        key={item.name}
                        direction="left"
                        delay={index * 50}
                        triggerOnce
                      >
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                            location.pathname === item.path
                              ? "text-green-600"
                              : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </Slide>
                    ))}

                    {/* <hr className="my-3" />

                    <Slide
                      direction="left"
                      delay={navItems.length * 50}
                      triggerOnce
                    >
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User size={18} className="mr-3" />
                        My Account
                      </Link>
                    </Slide> */}
                  </div>
                </div>
              </Fade>
            </div>
            )}
          </AnimatePresence>
        </nav>
    </>
  );
};

export default AnimatedNavbar;
