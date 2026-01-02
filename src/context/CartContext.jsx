// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  useEffect(() => {
    const savedCart = localStorage.getItem("ayushyaaCart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ayushyaaCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Helper to show toast
  const showToast = (message, type = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000); // Auto-hide after 3 seconds
  };

  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
      showToast(`Added ${quantity} more ${product.name} to cart`, "success");
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
      showToast(`${product.name} added to cart`, "success");
    }
  };

  const removeFromCart = (productId) => {
    const removedItem = cartItems.find((item) => item.id === productId);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    showToast(`${removedItem?.name || "Item"} removed from cart`, "info");
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const item = cartItems.find((i) => i.id === productId);
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    showToast(`Updated ${item?.name} quantity to ${quantity}`, "success");
  };

  const clearCart = () => {
    setCartItems([]);
    showToast("Cart cleared", "info");
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        toast, // expose toast state if needed elsewhere
      }}
    >
      {children}

      {/* Toast Notification */}
      <div className="fixed top-20 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className={`transform transition-all duration-500 ease-out ${
            toast.visible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div
            className={`px-6 py-4 rounded-full shadow-2xl text-white font-medium text-sm flex items-center space-x-3 backdrop-blur-lg border border-white/20 ${
              toast.type === "success"
                ? "bg-primary-green"
                : toast.type === "info"
                ? "bg-accent-green"
                : "bg-red-500"
            }`}
          >
            <span>✔</span>
            <span>{toast.message}</span>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
};
