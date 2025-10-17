import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './page/Home';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import Cart from './page/cart';
import Checkout from './page/Checkout';
import Contact from './page/Contact';
import About from './page/About';
import Footer from './Component/Footer';
import './scss/app.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
