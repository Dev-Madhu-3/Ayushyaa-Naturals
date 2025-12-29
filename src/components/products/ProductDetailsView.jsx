// src/components/products/ProductDetailsView.jsx
// (Previously ProductDetails.jsx, now renamed and refactored)

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

const ProductDetailsView = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

const handleAddToCart = () => {
  addToCart(product, quantity);
};

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ... The rest of the component remains the same ... */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Product Images */}
        <motion.div variants={slideInFromBottom}>
          {/* ... Image gallery code ... */}
        </motion.div>

        {/* Product Info */}
        <motion.div variants={slideInFromBottom} custom={0.2}>
          {/* ... Product info, price, buttons, etc. ... */}
        </motion.div>
      </motion.div>

      {/* Product Details Tabs */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
        custom={0.4}
      >
        {/* ... Tabs for Description, Ingredients, etc. ... */}
      </motion.div>
    </div>
  );
};

export default ProductDetailsView;
