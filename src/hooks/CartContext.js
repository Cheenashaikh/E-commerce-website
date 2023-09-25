import { createContext, useContext, useEffect, useState } from "react";
import data from "../helper/data";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => ([ ...prev, item ]));
  };
  const removeFromCart = (item) => {
    let newData = data.filter((i) => i.id !== item.id);
    setCart(newData);
  };
  const removeAllItems = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeAllItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}
