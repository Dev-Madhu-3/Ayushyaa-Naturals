A premium, modern, and nature-inspired e-commerce frontend for Ayushyaa Naturals, a brand dedicated to selling handmade, chemical-free, natural products.

Ayushyaa Naturals

🌿 Features

Modern UI/UX: Clean, calming, and visually rich design built with React and Tailwind CSS.
Product Browsing: View products with detailed information, images, and pricing.
Functional Cart: Add, remove, and update item quantities in the shopping cart (managed via localStorage).
Search Functionality: Real-time search to find products quickly.
WhatsApp Checkout: A temporary, direct-to-WhatsApp ordering system for a seamless buying experience.
Responsive Design: Fully responsive layout that works beautifully on all devices.
Smooth Animations: Subtle, nature-inspired animations using Framer Motion.
Component-Based Architecture: Scalable and maintainable code structure.

🛠 Tech Stack
Framework: React 18
Bundler: Vite
Styling: Tailwind CSS
Animations: Framer Motion
Icons: Lucide React
Carousels: Swiper.js
Routing: React Router DOM

📁 Project Structure

ayushyaa-naturals/
├── public/
│ └── favicon.ico
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── common/ # Header, Footer, Modals, etc.
│ │ ├── home/ # Homepage-specific sections
│ │ ├── products/ # Product-related components
│ │ └── about/ # About page components
│ ├── context/ # React Context for state management
│ ├── pages/ # Main page components
│ ├── styles/ # Global CSS and Tailwind config
│ ├── utils/ # Helper functions and constants
│ ├── App.jsx # Main app component with routing
│ └── main.jsx # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/ayushyaa-naturals.git
    cd ayushyaa-naturals
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```
    The static files will be in the `dist` folder.

## ⚙️ Configuration

- **Tailwind CSS**: Configured in `tailwind.config.js` with a custom color palette and design system.
- **Vite**: Configured in `vite.config.js`. No special configuration is required for this project.

## 📱 Temporary WhatsApp Integration

The current system uses a direct WhatsApp link for checkout. The phone number is configured in `src/context/WhatsAppContext.jsx`.

**To change the WhatsApp number:**

1.  Open `src/context/WhatsAppContext.jsx`.
2.  Update the `phoneNumber` variable:
    ```javascript
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    ```

---

## 🔌 API Integration Guide (Step-by-Step)

This guide will help you transition from the current temporary setup (localStorage, static data) to a full-fledged backend integration.

### Step 1: Set Up Your Backend

Create a backend service (e.g., using Node.js/Express, Python/Django, etc.). You will need, at a minimum, the following API endpoints:

-   `GET /api/products` - Fetch all products.
-   `GET /api/products/:id` - Fetch a single product by ID.
-   `GET /api/products?search=...` - Search for products.
-   `POST /api/cart` - Add an item to the cart (requires user authentication).
-   `GET /api/cart` - Get the current user's cart.
-   `PUT /api/cart/:itemId` - Update item quantity in the cart.
-   `DELETE /api/cart/:itemId` - Remove an item from the cart.
-   `POST /api/orders` - Create an order from the cart.

### Step 2: Configure Environment Variables

Never hardcode API URLs or secrets in your code. Use a `.env` file.

1.  Create a file named `.env` in the root of your project.
2.  Create a file named `.env.example` as a template.

**`.env.example`**
```env
VITE_API_BASE_URL=http://localhost:4000/api