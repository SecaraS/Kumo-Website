import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    const productIndex = cart.findIndex((item) => item.productId === productId);
    if (productIndex >= 0) {
      const newCart = [...cart];
      newCart[productIndex].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  };
  const updateCartQuantity = (productId, quantityChange) => {
    const newCart = cart.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: item.quantity + quantityChange };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
