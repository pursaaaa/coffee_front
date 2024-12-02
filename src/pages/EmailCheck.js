import axios from 'axios';
import React, { useState } from 'react';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function EmailCheck() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        try {
            const res = await axios.post(config.apiPath + '/user/checkEmail', {
                email
            });

            if (res.status === 200) {
                navigate('/changePassword', { state: { email } }); // Pass email to the next page
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message); // Show error message from the backend
            } else {
                setError('Server error');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="signin-container d-flex align-items-center justify-content-center">
                <div className="card signin-card">
                    <h3 className="text-center mb-4">เปลี่ยนรหัสผ่าน</h3>
                    <form onSubmit={handleEmailSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">อีเมล</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="กรอกอีเมลของคุณ"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="text-danger">{error}</div>}
                        <button type="submit" className="btn btn-light w-100">ถัดไป</button>
                    </form>
                    <div className="text-left mt-3">
                        <span>กลับสู่หน้าหลัก? </span>
                        <button
                            className="btn btn-link"
                            onClick={() => navigate('/')}
                        >
                            หน้าแรก
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmailCheck;
