import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import ProductCard from "../Component/ProductCard";
import { useCart } from "../context/CartContext";
import "../scss/productDetail.scss";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, subtotal } = useCart();

    const product = {
        id,
        name: "Áo thun Lonely Stonie BESTIE",
        price: "580000",
        description: "Chất liệu Cotton 300gsm washed, form boxy cá tính.",
        sizes: ["S", "M", "L", "XL"],
        images: [img1, img2, img3, img4],
        image: img1,
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity, true); // ✅ mở sidebar khi thêm
    };

    return (
        <div className="product-detail-page">
            <Navbar />

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="image-section">
                            <div className="thumbnail-list">
                                {product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Ảnh ${index + 1}`}
                                        className={`thumbnail-img ${selectedImage === img ? "active" : ""}`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                            <div className="main-image">
                                <img src={selectedImage} alt={product.name} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="product-info sticky-top">
                            <h3 className="fw-bold">{product.name}</h3>
                            <p className="text-primary fs-5">{product.price}đ</p>
                            <p>{product.description}</p>

                            <div className="mb-3">
                                <strong>Size:</strong>
                                <div className="mt-2">
                                    {product.sizes.map((s) => (
                                        <button
                                            key={s}
                                            className="btn btn-outline-dark btn-sm me-2"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <strong className="me-2">Số lượng:</strong>
                                <button
                                    className="btn btn-outline-dark btn-sm"
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                >
                                    -
                                </button>
                                <span className="mx-3">{quantity}</span>
                                <button
                                    className="btn btn-outline-dark btn-sm"
                                    onClick={() => setQuantity((q) => q + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <div className="button-group mb-3">
                                <Link to="/products" className="btn btn-outline-dark me-2">
                                    ← Quay lại sản phẩm
                                </Link>
                                <button className="btn btn-dark" onClick={handleAddToCart}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-products mt-5">
                    <h4 className="text-center mb-4">Sản phẩm tương tự</h4>
                    <div className="product-grid">
                        {[img1, img2, img3, img4].map((img, i) => (
                            <ProductCard
                                key={i}
                                product={{
                                    id: i + 1,
                                    name: `Sản phẩm ${i + 1}`,
                                    price: "350000",
                                    img,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
