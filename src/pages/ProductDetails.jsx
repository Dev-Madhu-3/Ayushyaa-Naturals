// src/pages/ProductDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Breadcrumb from "../components/common/Breadcrumb";
import ProductDetailsView from "../components/products/ProductDetailsView";
import { products } from "../utils/constants";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { fadeIn } from "../utils/animations";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Simulate fetching product data
    const fetchProduct = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      }, 500); // Simulate network delay
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner text="Fetching product details..." />;
  }

  if (notFound) {
    return (
      <motion.div
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl font-bold text-text-dark mb-4">
          Product Not Found
        </h1>
        <p className="text-text-light mb-8">
          Sorry, the product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-primary-green hover:bg-light-green text-white font-medium rounded-full transition-all"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-cream">
        <div className="container mx-auto px-4">
          <Breadcrumb productName={product.name} />
        </div>
      </div>
      <ProductDetailsView product={product} />
    </motion.div>
  );
};

export default ProductDetails;
