import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../config';
import Navbar from '../components/Navbar';

function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        lastname: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [validated, setValidated] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true); // State for custom password validation
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Check if password and confirm password match
        if (name === 'password' || name === 'confirmPassword') {
            setPasswordMatch(
                name === 'password'
                    ? value === formData.confirmPassword
                    : value === formData.password
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        // Check Bootstrap validity and custom password match validation
        if (form.checkValidity() === false || !passwordMatch) {
            e.stopPropagation();
        } else {
            try {
                // Submit form data to API
                const res = await axios.post(config.apiPath + '/user/register', formData);
                Swal.fire({
                    title: 'สำเร็จ',
                    text: 'สมัครสมาชิกสำเร็จ',
                    icon: 'success',
                });

                // Navigate to the Sign In page
                navigate('/signin');
            } catch (error) {
                Swal.fire({
                    title: 'ผิดพลาด',
                    text: error.res?.data?.message || 'Something went wrong. Please try again.',
                    icon: 'error',
                });
            }
        }

        setValidated(true);
    };

    return (
        <>
        <Navbar />
            <div className="register-container d-flex">
                <div className="card register-card shadow-sm">
                    <h3 className="text-center mb-4">สมัครสมาชิก</h3>
                    <form noValidate className={validated ? 'was-validated' : ''}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="fullname" className="form-label">ชื่อจริง</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    className="form-control"
                                    placeholder="ชื่อจริงของคุณ"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">First Name is required.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastname" className="form-label">นามสกุล</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="form-control"
                                    placeholder="นามสกุลของคุณ"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Last Name is required.</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">เบอร์โทรศัพท์</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-control"
                                placeholder="เบอร์โทรศัพท์ของคุณ"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                pattern="\d{10}" // Example: only allows 10-digit numbers
                                maxLength={10}
                            />
                            <div className="invalid-feedback">Please provide a valid phone number (10 หลัก).</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">อีเมล</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="อีเมลของคุณ"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="ชื่อผู้ใช้ของคุณ"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Username is required.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="รหัสผ่านของคุณ"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password is required.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">ยืนยันรหัสผ่าน</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className={`form-control ${validated && !passwordMatch ? 'is-invalid' : ''}`}
                                placeholder="ใส่รหัสผ่านของคุณอีกครั้ง"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                {formData.password !== formData.confirmPassword
                                    ? 'Passwords do not match.'
                                    : 'Please confirm your password.'}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-light w-100" onClick={handleSubmit}>สมัครสมาชิก</button>
                    </form>
                    <div className="text-center mt-3">
                        <span>มีบัญชีผู้ใช้อยู่แล้ว? </span>
                        <button
                            className="btn btn-link"
                            onClick={() => navigate('/signin')}
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
