import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

// Import das novas páginas
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 antialiased">
        <Navbar
          onCartClick={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Gerenciador de Rotas Dinâmicas */}
        <Routes>
          <Route
            path="/"
            element={
              <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />

        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
