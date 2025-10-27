import React, { useState } from "react";
import { updateProduct } from "../../../api/productService";

const EditProduct = ({ product, onClose, onSave }) => {
    const [form, setForm] = useState(product);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(form.id, form);
        onSave();
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>Sửa sản phẩm</h3>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
                <input type="number" name="price" value={form.price} onChange={handleChange} />
                <input type="text" name="category" value={form.category} onChange={handleChange} />
                <input type="text" name="img" value={form.img} onChange={handleChange} />
                <button type="submit">Cập nhật</button>
                <button type="button" onClick={onClose}>Hủy</button>
            </form>
        </div>
    );
};

export default EditProduct;
