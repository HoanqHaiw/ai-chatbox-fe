import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../scss/cartPage.scss";

const Cart = () => {
    const { cartItems, addToCart, decreaseQuantity, subtotal } = useCart();

    return (
        <div className="cart-page container py-5">
            <h3 className="mb-4">Giỏ hàng của bạn</h3>

            {cartItems.length === 0 ? (
                <p>
                    Giỏ hàng trống. <Link to="/products">Mua sắm ngay</Link>
                </p>
            ) : (
                <div className="row">
                    {/* BÊN TRÁI */}
                    <div className="col-lg-8 mb-4">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th className="text-center">Số lượng</th>
                                    <th className="text-end">Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        objectFit: "cover",
                                                        marginRight: "10px",
                                                        borderRadius: "8px",
                                                    }}
                                                />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{parseFloat(item.price).toLocaleString()}đ</td>
                                        <td className="text-center">
                                            <button
                                                className="btn btn-sm btn-outline-dark me-2"
                                                onClick={() => decreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            {item.quantity}
                                            <button
                                                className="btn btn-sm btn-outline-dark ms-2"
                                                onClick={() => addToCart(item, 1)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td className="text-end">
                                            {(parseFloat(item.price) * item.quantity).toLocaleString()}đ
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* BÊN PHẢI */}
                    <div className="col-lg-4">
                        <div className="card p-4 shadow-sm">
                            <h5 className="mb-3">Thông tin thanh toán</h5>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Họ và tên</label>
                                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Số điện thoại</label>
                                    <input type="tel" className="form-control" placeholder="0123 456 789" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Địa chỉ</label>
                                    <input type="text" className="form-control" placeholder="123 Đường ABC, TP.HCM" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Ghi chú (tuỳ chọn)</label>
                                    <textarea className="form-control" rows="3" placeholder="Ví dụ: Giao giờ hành chính"></textarea>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between mb-3">
                                    <strong>Tạm tính:</strong>
                                    <span className="text-danger">{subtotal.toLocaleString()}đ</span>
                                </div>

                                <button type="submit" className="btn btn-success w-100">
                                    Đặt hàng
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
