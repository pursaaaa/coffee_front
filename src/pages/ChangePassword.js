import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config';
import Swal from 'sweetalert2';

function ChangePassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {}; // Retrieve email from state passed by EmailCheck
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(config.apiPath + '/user/changePassword', {
                email,
                currentPassword,
                newPassword
            });

            setSuccess(res.data.message);
            setError('');
            Swal.fire({
                title: 'สำเร็จ',
                text: 'เปลี่ยนรหัสผ่านสำเร็จ',
                icon: 'success',
                timer: 1000
            })
            navigate('/signin'); // Redirect to login page after successful password change
        } catch (e) {
            setError(e.res?.data?.message || 'Server error');
        }
    };

    return (
        <div className="signin-container d-flex align-items-center justify-content-center">
            <div className="card signin-card">
                <h3 className="text-center mb-4">เปลี่ยนรหัสผ่าน</h3>
                <form onSubmit={handleChangePassword}>
                    <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">รหัสผ่านปัจจุบัน</label>
                        <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                            placeholder="กรอกรหัสผ่านปัจจุบัน"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">รหัสผ่านใหม่</label>
                        <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                            placeholder="กรอกรหัสผ่านใหม่"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                    {success && <div className="text-success">{success}</div>}
                    <button type="submit" className="btn btn-light w-100">เปลี่ยนรหัสผ่าน</button>
                </form>
                {/* <div className="text-left mt-3">
                    <span>กลับสู่หน้าหลัก? </span>
                    <button
                        className="btn btn-link"
                        onClick={() => navigate('/')}
                    >
                        หน้าแรก
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default ChangePassword;
