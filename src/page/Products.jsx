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
    // 👉 Dữ liệu mẫu
    const [products] = useState([
        { id: 1, name: "Áo thun Lonely Stonie", price: 250000, img: img1, category: "Áo" },
        { id: 2, name: "SHORT CAMO “BESTIE”", price: 400000, img: img2, category: "Quần" },
        { id: 3, name: "Giày sneaker basic", price: 800000, img: img3, category: "Giày" },
        { id: 4, name: "Nón lưỡi trai đen", price: 150000, img: img4, category: "Phụ kiện" },
        { id: 5, name: "Balo phong cách", price: 350000, img: img5, category: "Phụ kiện" },
    ]);

    // 👉 State cho lọc, tìm kiếm và sắp xếp
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");

    // 👉 Hàm lọc & sắp xếp
    const filteredProducts = products
        .filter((p) =>
            selectedCategory === "Tất cả" ? true : p.category === selectedCategory
        )
        .filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "price-asc") return a.price - b.price;
            if (sortOption === "price-desc") return b.price - a.price;
            return 0;
        });

    return (
        <div className="products-page">
            <Navbar />
            <div className="container">
                {/* ---------- SIDEBAR ---------- */}
                <div className="sidebar">
                    <h5>Category</h5>
                    <ul>
                        {["All Products", "Men", "Women", "Shoes", "Accessories"].map((cat) => (
                            <li
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    fontWeight: selectedCategory === cat ? "600" : "400",
                                    color: selectedCategory === cat ? "#007bff" : "#111",
                                }}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>

                    <div className="filter-section">
                        <h5>Filter by Price</h5>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => setSortOption("price-asc")}
                                checked={sortOption === "price-asc"}
                            />
                            Price: Low to High
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => setSortOption("price-desc")}
                                checked={sortOption === "price-desc"}
                            />
                            Price: High to Low
                        </label>
                    </div>
                </div>

                {/* ---------- MAIN CONTENT ---------- */}
                <div className="products-content">
                    <div className="top-bar">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Find Products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <i className="fas fa-search"></i>
                        </div>

                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="default">Sort By</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))
                        ) : (
                            <p>Not Found Products.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
