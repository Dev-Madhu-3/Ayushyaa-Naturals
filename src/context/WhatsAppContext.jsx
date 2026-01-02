// src/context/WhatsAppContext.jsx
import { createContext, useContext } from "react";

const WhatsAppContext = createContext();

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
};

export const WhatsAppProvider = ({ children }) => {
  const phoneNumber = "7416595826"; // Replace with your actual WhatsApp number

  const sendProductMessage = (product, quantity) => {
    const totalPrice = (product.price * quantity).toFixed(2);
    const message = `Hello! I'm interested in buying the following product:\n\n• Product: ${product.name}\n• Quantity: ${quantity}\n• Price per unit: ₹${product.price}\n• Total price: ₹${totalPrice}\n\nPlease let me know the next steps for payment and delivery.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const sendCartMessage = (cartItems, total) => {
    let message = "Hello! I would like to order the following products:\n\n";

    cartItems.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2);
      message += `• ${item.name} - ${item.quantity} x $${item.price} = $${itemTotal}\n`;
    });

    message += `\nTotal: $${total.toFixed(2)}\n\n`;
    message += "Please let me know the next steps for payment and delivery.";

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <WhatsAppContext.Provider
      value={{
        sendProductMessage,
        sendCartMessage,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};
