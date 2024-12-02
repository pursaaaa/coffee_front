import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import Navbar from '../components/Navbar';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(config.apiPath + '/user/forgetPassword', {
                email
            });

            if (res.data.message) {
                setMessage(res.data.message);
                setTimeout(() => navigate('/signin'), 3000); // Redirect to Sign In after 3 seconds
            }
        } catch (error) {
            setMessage('ไม่พบอีเมลนี้ในระบบ!');
        }
    };

    return (
        <>
            <Navbar />
            <div className="signin-container d-flex align-items-center justify-content-center">
                <div className="card signin-card">
                    <h3 className="text-center mb-4">ลืมรหัสผ่าน</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">อีเมลของคุณ</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="กรุณากรอกอีเมลของคุณ"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-light w-100">ส่งคำขอเปลี่ยนรหัสผ่าน</button>
                    </form>

                    {message && (
                        <div className="text-center mt-3">
                            <span>{message}</span>
                        </div>
                    )}

                    <div className="text-left mt-3">
                        <span>จำรหัสผ่านของคุณได้แล้ว? </span>
                        <button
                            className="btn btn-link"
                            onClick={() => navigate('/signIn')}
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgetPassword;
