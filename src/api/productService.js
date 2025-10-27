// src/api/productService.js
let mockProducts = [
    { id: 1, name: "Áo sơ mi trắng", price: 250000 },
    { id: 2, name: "Quần jeans xanh", price: 400000 },
];

// Lấy danh sách sản phẩm
export const getProducts = async () => {
    return mockProducts;
};

// Thêm sản phẩm
export const addProduct = async (product) => {
    product.id = Date.now();
    mockProducts.push(product);
    return product;
};

// Cập nhật sản phẩm
export const updateProduct = async (updatedProduct) => {
    mockProducts = mockProducts.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
    );
    return updatedProduct;
};

// Xóa sản phẩm
export const deleteProduct = async (id) => {
    mockProducts = mockProducts.filter((p) => p.id !== id);
    return true;
};
