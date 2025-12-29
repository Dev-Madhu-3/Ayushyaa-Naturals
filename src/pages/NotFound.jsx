// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link, useNavigate} from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { fadeIn, slideInFromBottom } from "../utils/animations";



const NotFound = () => {
const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-off-white px-4">
      <motion.div
        className="text-center max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="mb-8" variants={slideInFromBottom}>
          <div className="text-9xl font-bold text-primary-green/20">404</div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
          variants={slideInFromBottom}
          custom={0.1}
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          className="text-text-light text-lg mb-8"
          variants={slideInFromBottom}
          custom={0.2}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={slideInFromBottom}
          custom={0.3}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-green hover:bg-light-green text-white font-medium rounded-full transition-all transform hover:scale-105"
          >
            <Home size={20} className="mr-2" />
            Go Back Home
          </Link>

          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center justify-center px-6 py-3 bg-cream hover:bg-cream/80 text-text-dark font-medium rounded-full transition-all transform hover:scale-105"
          >
            {/* <ArrowLeft size={20} className="mr-2" /> */}
            Browse Products
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;
