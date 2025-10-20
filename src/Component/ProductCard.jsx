import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div className="card h-100 text-center shadow-sm" onClick={() => navigate(`/products/${product.id}`)} style={{ cursor: "pointer" }}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <p className="text-primary fw-bold">{product.price}</p>
                <button className="btn btn-dark w-100 mt-2">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
}

export default ProductCard;
