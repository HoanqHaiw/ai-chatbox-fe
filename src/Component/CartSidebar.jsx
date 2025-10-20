import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import "../scss/cartSidebar.scss";

function CartSidebar() {
    const {
        isSidebarOpen,
        closeSidebar,
        cartItems,
        removeFromCart,
        subtotal,
        decreaseQuantity,
        addToCart,
    } = useCart();

    const location = useLocation();
    if (location.pathname === "/cart") return null; // ✅ không hiển thị ở trang /cart

    return (
        <>
            <div
                className={`cart-overlay ${isSidebarOpen ? "show" : ""}`}
                onClick={closeSidebar}
            ></div>

            <div className={`cart-sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="cart-header">
                    <h5>Giỏ hàng của bạn</h5>
                    <button className="btn-close" onClick={closeSidebar}></button>
                </div>

                <div className="cart-body">
                    {cartItems.length === 0 ? (
                        <p>Chưa có sản phẩm nào.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image || item.images?.[0]} alt={item.name} />
                                <div className="item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">{item.price}₫</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item, 1, false)}>+</button>
                                    </div>
                                </div>
                                <button
                                    className="btn-remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span>Tạm tính:</span>
                            <strong>{subtotal.toLocaleString()}₫</strong>
                        </div>
                        <div className="cart-actions">
                            <Link to="/cart" className="btn btn-outline-dark" onClick={closeSidebar}>
                                Xem giỏ hàng
                            </Link>
                            <Link to="/checkout" className="btn btn-primary" onClick={closeSidebar}>
                                Thanh toán
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartSidebar;
