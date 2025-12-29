// src/components/common/AnimatedNavbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartDrawer from "./CartDrawer";
import { useSearch } from "../../context/SearchContext";
import SearchModal from "./SearchModal";

const AnimatedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, isCartOpen, setIsCartOpen } = useCart();
  const { isSearchOpen, setIsSearchOpen } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
              {/* <span className="text-white font-bold text-xl">A</span> */}
              <img
                className="w-12 h-10 rounded-[50%]"
                src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767005685/closeup-1to1_d5macq.jpg"
                alt="Logo"
              />
            </div>
            <span className="text-xl font-bold text-primary-green">
              Ayushyaa Naturals
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-text-dark hover:text-primary-green transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-text-dark hover:text-primary-green transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-text-dark hover:text-primary-green transition-colors"
            >
              About
            </Link>
            <Link
              to="/why-natural"
              className="text-text-dark hover:text-primary-green transition-colors"
            >
              Why Natural
            </Link>
            <Link
              to="/contact"
              className="text-text-dark hover:text-primary-green transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-cream transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-text-dark" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-cream transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} className="text-text-dark" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-accent-green text-white text-xs rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-cream transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 bg-cream/90 backdrop-blur-md rounded-lg shadow-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-text-dark hover:text-primary-green transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-text-dark hover:text-primary-green transition-colors"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-text-dark hover:text-primary-green transition-colors"
              >
                About
              </Link>
              <Link
                to="/why-natural"
                className="text-text-dark hover:text-primary-green transition-colors"
              >
                Why Natural
              </Link>
              <Link
                to="/contact"
                className="text-text-dark hover:text-primary-green transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
      <CartDrawer />
      <SearchModal />
    </motion.nav>
  );
};

export default AnimatedNavbar;
