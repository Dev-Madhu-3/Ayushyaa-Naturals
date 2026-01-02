// src/components/products/ProductGrid.jsx
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [], loading = false }) => {
  // Loading state: Show skeleton placeholders
  if (loading) {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        aria-label="Loading products"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="bg-white rounded-2xl overflow-hidden shadow-soft animate-pulse border border-gray-100"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200" />
            <div className="p-6 space-y-4">
              <div className="h-5 bg-gray-300 rounded-lg w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-6 bg-gray-300 rounded mt-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state: No products found
  if (!products || products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-full py-16 px-6 text-center"
      >
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <svg
              className="w-20 h-20 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            No products found
          </h3>
          <p className="text-gray-600 mb-6">
            We couldn't find any products matching your criteria. Try adjusting
            filters or check back later for new handmade natural items! 💚
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors duration-200 shadow-md"
          >
            Refresh Page
          </button>
        </div>
      </motion.div>
    );
  }

  // Normal state: Render products with stagger animation
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      role="region"
      aria-label="Product listing"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
};

export default ProductGrid;
