// src/components/common/SearchModal.jsx
import { useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useSearch } from "../../context/SearchContext";
import { products } from "../../utils/constants";
import { Link } from "react-router-dom";

const SearchModal = () => {
  const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } =
    useSearch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchItemClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Enhanced Backdrop with blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      />

      {/* Search Modal - Slides down from top */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out transform-gpu ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ maxHeight: "90vh" }}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Search Bar - Premium Style */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-green pointer-events-none">
              <Search size={24} />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search natural wellness products..."
              className="w-full pl-16 pr-16 py-5 text-lg bg-cream/70 border border-cream rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-green/20 focus:bg-white transition-all duration-300 placeholder-text-light"
            />

            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-text-light hover:text-text-dark transition-colors"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
              <button
                onClick={handleClose}
                className="text-text-light hover:text-text-dark transition-colors font-medium text-sm hidden sm:block"
              >
                ESC
              </button>
            </div>
          </div>

          {/* Results Container */}
          {searchQuery && (
            <div className="mt-8 max-w-6xl mx-auto">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-8">
                  {filteredProducts.slice(0, 8).map((product, index) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      onClick={handleSearchItemClick}
                      className="group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-green/30"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isSearchOpen
                          ? "fadeInUp 0.4s ease-out forwards"
                          : "none",
                        opacity: isSearchOpen ? 1 : 0,
                        transform: isSearchOpen
                          ? "translateY(0)"
                          : "translateY(20px)",
                      }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="font-semibold text-text-dark group-hover:text-primary-green transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xl font-bold text-primary-green">
                            ${product.price}
                          </span>
                          <ArrowRight
                            size={20}
                            className="text-primary-green opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-xl text-text-light">
                    No products found for "
                    <span className="font-medium text-text-dark">
                      {searchQuery}
                    </span>
                    "
                  </p>
                  <p className="text-text-light mt-2">
                    Try searching for herbs, oils, wellness, or natural
                    remedies.
                  </p>
                </div>
              )}

              {/* Show more hint */}
              {filteredProducts.length > 8 && (
                <div className="text-center mt-6 pb-4">
                  <p className="text-text-light">
                    Showing 8 of {filteredProducts.length} results •{" "}
                    <Link
                      to="/products"
                      onClick={handleClose}
                      className="text-primary-green hover:underline font-medium"
                    >
                      View all
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Empty state when no query */}
          {!searchQuery && (
            <div className="text-center mt-12 text-text-light">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                Start typing to search our natural products
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Custom keyframes for staggered fade-in */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default SearchModal;
