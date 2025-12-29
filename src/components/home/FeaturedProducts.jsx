// src/components/home/FeaturedProducts.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideInFromBottom, staggerContainer } from "../../utils/animations";
import ProductCard from "../products/ProductCard";
import { products } from "../../utils/constants";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(
    (product) => product.isNew || product.isHandmade
  );

  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Featured Products
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Discover our handpicked selection of natural, handmade products
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom}
          custom={0.3}
        >
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-primary-green hover:bg-light-green text-white font-medium rounded-full transition-all transform hover:scale-105"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
