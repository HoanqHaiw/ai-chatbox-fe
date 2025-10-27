import React, { useState } from "react";
import { addProduct } from "../../../api/productService";

const AddProduct = ({ onClose, onSave }) => {
    const [product, setProduct] = useState({ name: "", price: "", category: "", img: "" });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        onSave();
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>Thêm sản phẩm mới</h3>
                <input type="text" name="name" placeholder="Tên sản phẩm" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Giá" onChange={handleChange} required />
                <input type="text" name="category" placeholder="Danh mục" onChange={handleChange} required />
                <input type="text" name="img" placeholder="URL ảnh sản phẩm" onChange={handleChange} />
                <button type="submit">Lưu</button>
                <button type="button" onClick={onClose}>Hủy</button>
            </form>
        </div>
    );
};

export default AddProduct;
