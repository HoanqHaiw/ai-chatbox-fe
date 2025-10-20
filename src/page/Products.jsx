import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import ProductCard from "../Component/ProductCard";
import "../scss/products.scss";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";

const Products = () => {
    // 👉 Tạm thời render cứng dữ liệu
    const [products] = useState([
        { id: 1, name: "Áo thun Lonely Stonie", price: "250.000đ", img: img1 },
        { id: 2, name: "SHORT CAMO “BESTIE”", price: "400.000đ", img: img2 },
        { id: 3, name: "Giày sneaker basic", price: "800.000đ", img: img3 },
        { id: 4, name: "Nón lưỡi trai đen", price: "150.000đ", img: img4 },
        { id: 5, name: "Balo phong cách", price: "350.000đ", img: img5 },
    ]);

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
        </div>
    );
};

export default Products;
