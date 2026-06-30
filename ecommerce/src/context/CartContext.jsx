import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Inicializa o estado lendo direto do localStorage para persistir o F5
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("devstore:cart");
    return localData ? JSON.parse(localData) : [];
  });

  // Toda vez que o carrinho mudar, salva a nova lista no localStorage automaticamente
  useEffect(() => {
    localStorage.setItem("devstore:cart", JSON.stringify(cart));
  }, [cart]);

  // Função para adicionar produto ao carrinho (Mantém a mesma lógica top)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Função para remover um item do carrinho completamente
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Cálculos dinâmicos
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
