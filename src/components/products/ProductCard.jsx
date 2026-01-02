// src/components/products/ProductCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye, Leaf, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { scaleIn } from "../../utils/animations";
import { useCart } from "../../context/CartContext";
import { useWhatsApp } from "../../context/WhatsAppContext"; // NEW IMPORT

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const { sendProductMessage } = useWhatsApp(); // FROM WhatsAppContext

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: product.name,
      text: product.description,
      url: window.location.origin + `/products/${product.id}`,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled or failed:", err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Product link copied to clipboard! 📋");
      } catch (err) {
        alert("Failed to copy link. Please copy manually.");
      }
    }
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // NEW: WhatsApp Buy Handler
  const handleBuyOnWhatsApp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendProductMessage(product, 1);
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

        {/* Action Buttons - UPDATED */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} className="text-primary-green" />
          </button>

          {/* TEMPORARILY COMMENTED OUT FAVORITE BUTTON */}
          {/*
          <button
            onClick={handleToggleFavorite}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Add to favorites"
          >
            <Heart
              size={18}
              className={isFavorite ? "text-red-500 fill-red-500" : "text-primary-green"}
            />
          </button>
          */}

          {/* Quick View */}
          {/* <Link
            to={`/products/${product.id}`}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} className="text-primary-green" />
          </Link> */}

          {/* Share Button (fixed icon and handler) */}
          <button
            onClick={handleShare}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-white transition-colors"
            aria-label="Share product"
          >
            <Share2 size={18} className="text-primary-green" />
          </button>

          {/* NEW: Buy on WhatsApp Button */}
          <button
            onClick={handleBuyOnWhatsApp}
            className="bg-green-500/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:bg-green-500 transition-colors"
            aria-label="Buy on WhatsApp"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </button>
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
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-xl font-bold text-primary-green">
              ₹{product.price}
            </span>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="text-primary-green hover:text-text-dark font-medium text-sm flex items-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
