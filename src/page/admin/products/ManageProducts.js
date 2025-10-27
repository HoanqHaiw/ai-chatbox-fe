import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../../api/productService";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import "../scssa/products.scss";


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        loadProducts();
    };

    return (
        <div className="admin-container">
            <h2>Manage Products</h2>
            <button onClick={() => setIsAdding(true)}>+ Add Product</button>

            {isAdding && <AddProduct onClose={() => setIsAdding(false)} onSave={loadProducts} />}
            {editingProduct && (
                <EditProduct product={editingProduct} onClose={() => setEditingProduct(null)} onSave={loadProducts} />
            )}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price.toLocaleString()} đ</td>
                            <td>{p.category}</td>
                            <td><img src={p.img} alt={p.name} width="50" /></td>
                            <td>
                                <button onClick={() => setEditingProduct(p)}>Edit</button>
                                <button onClick={() => handleDelete(p.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="back-home" onClick={() => window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default ManageProducts;
