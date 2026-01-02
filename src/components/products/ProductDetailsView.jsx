// src/components/products/ProductDetailsView.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import { fadeIn, slideInFromBottom } from "../../utils/animations";
import { useCart } from "../../context/CartContext";
import { useWhatsApp } from "../../context/WhatsAppContext"; // NEW IMPORT
import { Fade } from "react-awesome-reveal";

const ProductDetailsView = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useCart();
  const { sendProductMessage } = useWhatsApp(); // FROM WhatsAppContext

  // Updated handleAddToCart to use context
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // New function for WhatsApp purchase
  const handleBuyOnWhatsApp = () => {
    sendProductMessage(product, quantity);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // If no product is passed (e.g., during loading or not found), show fallback
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <Fade cascade damping={0.2} delay={200} triggerOnce>
        {/* Product Images */}
        <motion.div variants={slideInFromBottom}>
          <div className="mb-4 overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index
                    ? "border-primary-green"
                    : "border-transparent"
                }`}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div variants={slideInFromBottom} custom={0.2}>
          <div className="mb-4">
            {product.isNew && (
              <span className="inline-block px-3 py-1 bg-accent-green text-white text-xs font-bold rounded-full mb-2">
                NEW
              </span>
            )}
            {product.isHandmade && (
              <span className="inline-block px-3 py-1 bg-herbal-brown/80 text-white text-xs font-bold rounded-full mb-2 ml-2">
                100% HANDMADE
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-text-dark mb-4">
            {product.name}
          </h1>

          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? "fill-current" : ""
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-text-light">({product.rating})</span>
          </div>

          <p className="text-text-light mb-6">{product.description}</p>

          <div className="flex items-center mb-6">
            {product.oldPrice && (
              <span className="text-lg text-text-light line-through mr-2">
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-primary-green">
              ₹{product.price}
            </span>
          </div>

          {/* UPDATED BUTTON SECTION */}
          <div className="flex items-center space-x-4 mb-8">
            {/* Quantity selector remains the same */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 py-2 text-text-dark hover:bg-cream transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-3 py-2 text-text-dark hover:bg-cream transition-colors"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-primary-green hover:bg-light-green text-white font-medium rounded-lg transition-all transform hover:scale-105"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>

            {/* TEMPORARILY COMMENTED OUT FAVORITE AND SHARE BUTTONS */}
            {/*
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 border border-gray-300 rounded-lg hover:bg-cream transition-colors"
            >
              <Heart
                size={20}
                className={
                  isFavorite ? "text-red-500 fill-red-500" : "text-text-dark"
                }
              />
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:bg-cream transition-colors">
              <Share2 size={20} className="text-text-dark" />
            </button>
            */}

            {/* NEW WHATSAPP BUY BUTTON */}
            <button
              onClick={handleBuyOnWhatsApp}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all transform hover:scale-105"
            >
              Buy on WhatsApp
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck size={20} className="text-primary-green mr-3" />
                <div>
                  <p className="font-medium text-text-dark">Free Shipping</p>
                  <p className="text-sm text-text-light">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield size={20} className="text-primary-green mr-3" />
                <div>
                  <p className="font-medium text-text-dark">Secure Payment</p>
                  <p className="text-sm text-text-light">
                    100% secure transactions
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <RefreshCw size={20} className="text-primary-green mr-3" />
                <div>
                  <p className="font-medium text-text-dark">Easy Returns</p>
                  <p className="text-sm text-text-light">
                    30-day return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Fade>
      </div>

      {/* Product Details Tabs */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
        custom={0.4}
      >
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-primary-green font-medium text-primary-green">
              Description
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-text-light hover:text-text-dark">
              Ingredients
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-text-light hover:text-text-dark">
              How to Use
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-text-light hover:text-text-dark">
              Reviews
            </button>
          </nav>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-text-dark mb-4">
            Product Description
          </h3>
          <p className="text-text-light mb-4">{product.description}</p>

          {product.benefits && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-dark mb-3">
                Key Benefits
              </h4>
              <ul className="list-disc list-inside text-text-light space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {product.ingredients && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-dark mb-3">
                Ingredients
              </h4>
              <p className="text-text-light">
                {product.ingredients.join(", ")}
              </p>
            </div>
          )}

          {product.howToUse && (
            <div>
              <h4 className="text-lg font-semibold text-text-dark mb-3">
                How to Use
              </h4>
              <p className="text-text-light">{product.howToUse}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailsView;
