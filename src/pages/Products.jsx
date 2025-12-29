// src/pages/Products.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductGrid from "../components/products/ProductGrid";
import ProductFilters from "../components/products/ProductFilters";
import { products } from "../utils/constants";
import { fadeIn } from "../utils/animations";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      let result = products;

      if (filters.category) {
        result = result.filter(
          (product) => product.category === filters.category
        );
      }

      setFilteredProducts(result);
      setLoading(false);
    }, 500);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
          Our Natural Products
        </h1>
        <p className="text-text-light max-w-2xl mx-auto">
          Discover our range of handmade, chemical-free products crafted with
          care
        </p>
      </div>

      <ProductFilters filters={filters} onFilterChange={handleFilterChange} />

      <ProductGrid products={filteredProducts} loading={loading} />
    </motion.div>
  );
};

export default Products;
