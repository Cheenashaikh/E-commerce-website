import { createContext, useContext, useEffect, useState } from "react";
import data from "../helper/data";

const productContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(data);
  }, []);

  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
}

export function useProductContext() {
  return useContext(productContext);
}
