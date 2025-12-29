// src/components/common/Footer.jsx
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";
import { slideInFromBottom } from "../../utils/animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {/* <span className="text-primary-green font-bold text-xl">A</span> */}
                <img
                  className="w-12 h-10 rounded-[50%]"
                  src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767005685/closeup-1to1_d5macq.jpg"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-bold">Ayushyaa Naturals</span>
            </div>
            <p className="text-white/80 mb-4">
              Pure. Natural. Handcrafted with love for your wellness journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ayushyaa_naturals/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.1}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/why-natural"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Why Natural
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.2}
          >
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=herbal"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Herbal Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=skincare"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=wellness"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Wellness
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=sweets"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Natural Sweets
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.3}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Nature Lane, Green Valley, India 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-white/80">info@ayushyaa.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-white/70 text-sm mb-4 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.4}
          >
            © {currentYear} Ayushyaa Naturals. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center text-white/70 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom}
            custom={0.5}
          >
            <Leaf size={16} className="mr-1" />
            <span>Made with love for nature</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
