import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom styles for the Navbar

function Navbar() {
    const location = useLocation(); // Hook to get the current path

    return (

        <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">Coffee</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" id="offcanvasNavbar">

            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Coffee</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav ms-auto navlist">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/" className="nav-link px-3">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
                            <Link to="/shop" className="nav-link px-3">Shop</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/people' ? 'active' : ''}`}>
                            <Link to="/people" className="nav-link px-3">People</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact" className="nav-link px-3">About us</Link>
                        </li>
                        <li className={`nav-item bg-warning-subtle ${location.pathname === '/signin' ? 'active' : ''}`}>
                            <Link to="/signin" className='nav-link px-3 text-dark'>Sign In</Link>
                        </li>
                        <li>
                            <i className='fa fa-shopping-cart mt-2 text-light'> 0</i>
                        </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;

