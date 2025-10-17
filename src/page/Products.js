import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import "../scss/products.scss";

const products = [
    { id: 1, name: "Áo LV Black", price: "450.000đ", image: "/img/a1.png", hot: true },
    { id: 2, name: "Áo LV White", price: "420.000đ", image: "/img/a2.png", hot: true },
    { id: 3, name: "Áo Gucci Classic", price: "480.000đ", image: "/img/a3.png" },
    { id: 4, name: "Áo Nike Street", price: "400.000đ", image: "/img/a4.png" },
    { id: 5, name: "Áo Adidas Basic", price: "390.000đ", image: "/img/a5.png" },
    { id: 6, name: "Áo Dior Style", price: "470.000đ", image: "/img/a6.png" },
    { id: 7, name: "Áo NY Black", price: "460.000đ", image: "/img/a7.png" },
    { id: 8, name: "Áo NY White", price: "430.000đ", image: "/img/a8.png" },
    { id: 9, name: "Áo Puma Style", price: "410.000đ", image: "/img/a9.png" },
    { id: 10, name: "Áo LV Street", price: "440.000đ", image: "/img/a10.png" },
    { id: 11, name: "Áo Dior Classic", price: "470.000đ", image: "/img/a11.png" },
    { id: 12, name: "Áo Gucci Bold", price: "490.000đ", image: "/img/a12.png" },
];

const Products = () => {
    return (
        <div className="products-page">
            <Navbar />
            <div className="container">
                <h2 className="text-center mt-4 mb-4">Tất cả sản phẩm</h2>
                <div className="product-grid">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;
