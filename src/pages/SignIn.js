import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add API call or authentication logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="signin-container d-flex align-items-center justify-content-center">
            <div className="card signin-card shadow-sm">
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="ชื่อผู้ใช้ของคุณ"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="รหัสผ่านของคุณ"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">เข้าสู่ระบบ</button>
                </form>
                <div className="text-center mt-3">
                    <span>ไม่มีบัญชีผู้ใช้? </span>
                    <button
                        className="btn btn-link"
                        onClick={() => navigate('/register')}
                    >
                        สมัครสมาชิก
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
