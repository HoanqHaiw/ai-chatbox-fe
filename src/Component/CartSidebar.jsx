import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../scss/cartSidebar.scss";

const CartSidebar = () => {
    const {
        cartItems,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        subtotal,
        isSidebarOpen,
        closeSidebar,
    } = useCart();

    return (
        <>
            {/* Overlay mờ nền */}
            <div
                className={`cart-overlay ${isSidebarOpen ? "show" : ""}`}
                onClick={closeSidebar}
            ></div>

            {/* Sidebar */}
            <div className={`cart-sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <h5>Giỏ hàng</h5>
                    <button onClick={closeSidebar} className="close-btn">×</button>
                </div>

                {cartItems.length === 0 ? (
                    <p className="empty">Giỏ hàng trống</p>
                ) : (
                    <div className="sidebar-content">
                        <div className="sidebar-header">
                            <p>CART</p>
                            <button
                                className="sibar-exit"
                                onClick={closeSidebar}
                            >
                                ✕
                            </button>
                        </div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="info">
                                    <h6>{item.name}</h6>
                                    <p>{item.price.toLocaleString()}₫</p>
                                    <div className="quantity">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                                <button
                                    className="remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Xoá
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="sidebar-footer">
                    <div className="subtotal">
                        <span>Tạm tính:</span>
                        <strong>{subtotal.toLocaleString()}₫</strong>
                    </div>
                    <div className="actions">
                        <Link to="/cart" onClick={closeSidebar} className="view-cart">
                            Xem Giỏ Hàng
                        </Link>
                        <Link to="/checkout" onClick={closeSidebar} className="checkout">
                            Thanh Toán
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSidebar;
