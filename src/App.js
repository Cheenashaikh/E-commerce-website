import "./App.css";
import Navbar from "./components/layout/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/layout/footer";
import Checkout from "./pages/checkout";
import { ProductProvider } from "./hooks/ProductContext";
import { CartProvider } from "./hooks/CartContext";
import ProductList from "./pages/home/ProductList";
import Signup from "./pages/login/Signup";
import ProductShow from "./pages/home/ProductShow";

function App() {
  return (
    <div>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/ProductShow" element={<ProductShow />} />
            {/* <Route path="/Signup" element={<Signup />} /> */}
         
          </Routes>
          <Footer />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
