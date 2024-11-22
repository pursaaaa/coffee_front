import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar.css'; // Custom styles for the Navbar

function Navbar() {
    const location = useLocation(); // Hook to get the current path

    return (
        <nav className="navbar navbar-expand-lg bg-coffee">
            <div className="container">
                <a className="navbar-brand text-light fs-3 fw-bold" href="/">Coffee</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/" className="nav-link px-3">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
                            <Link to="/shop" className="nav-link px-3">Shop</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact" className="nav-link px-3">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

