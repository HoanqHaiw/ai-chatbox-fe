import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./scss/admin.scss";


const LoginAdmin = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tạm thời hardcode admin login
        if (form.username === "admin" && form.password === "123456") {
            localStorage.setItem("isAdmin", true);
            navigate("/admin/dashboard");
        } else {
            setError("Sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div className="admin-login">
            <div className="login-box">
                <h2>Đăng nhập quản trị</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Tài khoản"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;
