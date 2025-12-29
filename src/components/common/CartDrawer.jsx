// src/components/common/CartDrawer.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello! I would like to order the following products:\n\n";

    cartItems.forEach((item) => {
      message += `• ${item.name} - ${item.quantity} x $${item.price} = $${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\nTotal: $${getCartTotal().toFixed(2)}\n\n`;
    message += "Please let me know the next steps for payment and delivery.";

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold text-text-dark flex items-center">
                <ShoppingBag size={24} className="mr-2" />
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-cream transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-text-light">
                  <ShoppingBag size={48} className="mb-4" />
                  <p>Your cart is empty</p>
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-primary-green hover:underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-4 p-3 bg-cream rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium text-text-dark">
                          {item.name}
                        </h3>
                        <p className="text-primary-green font-semibold">
                          ${item.price}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full hover:bg-white transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-3 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full hover:bg-white transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto p-1 rounded-full hover:bg-white transition-colors text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-text-dark">Total:</span>
                  <span className="font-bold text-xl text-primary-green">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
