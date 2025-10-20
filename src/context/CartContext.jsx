import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ trạng thái sidebar

    // ➕ Thêm sản phẩm
    const addToCart = (product, quantity = 1, showSidebar = true) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity }];
            }
        });

        if (showSidebar) setIsSidebarOpen(true); // ✅ chỉ mở khi được phép
    };

    // ➖ Giảm số lượng
    const decreaseQuantity = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // ❌ Xóa sản phẩm
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // 💰 Tính tổng
    const subtotal = cartItems.reduce(
        (sum, item) =>
            sum + parseFloat(item.price.replace(/[^\d]/g, "")) * item.quantity,
        0
    );

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                decreaseQuantity,
                removeFromCart,
                subtotal,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
