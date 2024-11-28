import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../config';
import Navbar from '../components/Navbar';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call the backend API for sign-in
            const res = await axios.post(config.apiPath + '/user/sign-in', {
                username,
                password,
            });

            // Store the token in localStorage
            localStorage.setItem('token', res.data.token);

            // Show success alert
            Swal.fire({
                title: 'เข้าสู่ระบบสำเร็จ',
                text: 'Welcome back!',
                icon: 'success',
            });

            // Navigate to the home page
            navigate('/');
        } catch (error) {
            // Show error alert
            Swal.fire({
                title: 'เข้าสู่ระบบไม่สำเร็จ',
                text: error.response?.data?.message || 'Invalid username or password.',
                icon: 'error',
            });
        }
    };

    return (
        <>
        <Navbar/>
        <div className="signin-container d-flex align-items-center justify-content-center">
            <div className="card signin-card shadow">
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <form>
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
                    <button type="submit" className="btn btn-light w-100" onClick={handleSubmit}>เข้าสู่ระบบ</button>
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
        </>
    );
}

export default SignIn;
