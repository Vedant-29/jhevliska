"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type CartContextType = {
  cart: any[];
  total: number;
  addToCart: (item: any) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeFromCart = (id: number) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      setTotal((prevTotal) => prevTotal - itemToRemove.price);
    }
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
