// src/components/common/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ productName }) => {
  const location = useLocation();

  return (
    <nav className="flex items-center space-x-2 text-sm text-text-light py-4">
      <Link
        to="/"
        className="hover:text-primary-green transition-colors flex items-center"
      >
        <Home size={16} />
      </Link>
      <ChevronRight size={14} />
      <Link
        to="/products"
        className="hover:text-primary-green transition-colors"
      >
        Products
      </Link>
      <ChevronRight size={14} />
      <span className="text-text-dark font-medium">{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
