// src/components/products/ProductCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { scaleIn } from "../../utils/animations";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart } = useCart();

const handleAddToCart = (e) => {
  e.preventDefault();
  e.stopPropagation();
  addToCart(product, 1);
};

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      className="bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2"
      variants={scaleIn}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />

        {/* Badge */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </div>
        )}

        {product.isHandmade && (
          <div className="absolute top-4 right-4 bg-herbal-brown/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Leaf size={12} className="mr-1" />
            100% Handmade
          </div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleAddToCart}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} className="text-primary-green" />
          </button>

          <button
            onClick={handleToggleFavorite}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Add to favorites"
          >
            <Heart
              size={18}
              className={
                isFavorite ? "text-red-500 fill-red-500" : "text-primary-green"
              }
            />
          </button>

          <Link
            to={`/products/${product.id}`}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} className="text-primary-green" />
          </Link>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-text-dark">
            {product.name}
          </h3>
          <div className="flex items-center">
            <span className="text-xs text-text-light mr-1">★</span>
            <span className="text-sm text-text-light">{product.rating}</span>
          </div>
        </div>

        <p className="text-text-light text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            {product.oldPrice && (
              <span className="text-sm text-text-light line-through mr-2">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-xl font-bold text-primary-green">
              ${product.price}
            </span>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="text-accent-green hover:text-primary-green font-medium text-sm flex items-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
