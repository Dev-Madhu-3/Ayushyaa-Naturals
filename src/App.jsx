// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedNavbar from "./components/common/AnimatedNavbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import {CartProvider} from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import WhyNatural from "./pages/WhyNatural";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <AnimatedNavbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/why-natural" element={<WhyNatural />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/not-found" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;