import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./page/Home";
import Products from "./page/Products";
import ProductDetail from "./page/ProductDetail";
import Cart from "./page/cart";
import Checkout from "./page/Checkout";
import About from "./page/About";
import Contact from "./page/Contact";
import CartSidebar from "./Component/CartSidebar";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-wrapper">
          <Navbar />
          <CartSidebar /> {/* ✅ Sidebar luôn sẵn sàng */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
