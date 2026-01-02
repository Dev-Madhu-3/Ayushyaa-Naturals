// src/components/products/ProductFilters.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";

const ProductFilters = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "herbal", name: "Herbal Products" },
    { id: "skincare", name: "Skincare" },
    { id: "wellness", name: "Wellness" },
    { id: "sweets", name: "Natural Sweets" },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    onFilterChange({ category: categoryId === "all" ? null : categoryId });
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <h3 className="text-lg font-semibold text-text-dark">Filters</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 px-4 py-2 bg-cream rounded-lg"
        >
          <Filter size={18} />
          <span>Filter</span>
          <ChevronDown
            size={18}
            className={`transform transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Filters */}
      <AnimatePresence>
        {(isExpanded || window.innerWidth >= 768) && (
          <motion.div
            className="bg-cream rounded-2xl p-6 shadow-soft"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-text-dark mb-4 md:mb-2">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        activeCategory === category.id
                          ? "bg-primary-green text-white"
                          : "bg-white text-text-dark hover:bg-white/80"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* <div className="mt-4 md:mt-0">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="text-text-light hover:text-primary-green transition-colors"
                >
                  Clear Filters
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFilters;
