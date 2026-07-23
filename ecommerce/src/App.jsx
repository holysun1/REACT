import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

// Import das novas páginas
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Equip from "./pages/Equip";
import TrustBadges from "./components/TrustBadges";
import Locacao from "./pages/Locacao";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased">
        <NavBar
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
          <Route path="/about" element={<About />} />
          <Route
            path="/equip"
            element={
              <Equip
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route path="/locacao" element={<Locacao />} />
        </Routes>
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <TrustBadges />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
