import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx"; // Importa o Provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Envolve a aplicação */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
