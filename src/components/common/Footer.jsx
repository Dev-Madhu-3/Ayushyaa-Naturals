// src/components/common/Footer.jsx
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
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Fade delay={200} damping={0.2} cascade triggerOnce>
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
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
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-white/80 hover:text-white"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/why-natural"
                    className="text-white/80 hover:text-white"
                  >
                    Why Natural
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white/80 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/products?category=herbal"
                    className="text-white/80 hover:text-white"
                  >
                    Herbal Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=skincare"
                    className="text-white/80 hover:text-white"
                  >
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=wellness"
                    className="text-white/80 hover:text-white"
                  >
                    Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=sweets"
                    className="text-white/80 hover:text-white"
                  >
                    Natural Sweets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1" />
                  <span className="text-white/80">
                    123 Nature Lane, Green Valley, India 500018
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span className="text-white/80">+91 74165 95826</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span className="text-white/80">info@ayushyaa.com</span>
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        {/* Bottom Section */}
        <Fade delay={300} triggerOnce>
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} Ayushyaa Naturals. All rights reserved.
            </p>

            <div className="flex items-center text-white/70 text-sm">
              <Leaf size={16} className="mr-1" />
              <span>Made with love for nature</span>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
