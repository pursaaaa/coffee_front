import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom styles for the Navbar
import Swal from 'sweetalert2';


function Navbar() {
  const location = useLocation(); // Hook to get the current path
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    // Check if the user is logged in (based on token existence in localStorage)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists, otherwise false
  }, []);

  const handleSignOut = async () => {
    try {
      const button = await Swal.fire({
        title: 'ออกจากระบบ',
        text: 'ยืนยันออกจากระบบ',
        icon: 'question',
        showCancelButton: true,
        showConfirmButton: true
      })

      if (button.isConfirmed) {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        navigate('/');
      }
    } catch (e) {
      Swal.fire({
        title: 'error',
        text: e.message,
        icon: 'error'
      })
    }
  };



  return (

    <nav className="navbar navbar-expand-lg fixed-top" data-aos='zoom-out' data-aos-duration='900'>
      <div className="container">
        <a className="navbar-brand" href="/">Coffee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" id="offcanvasNavbar">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Coffee</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto navlist">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="nav-link px-3">หน้าแรก</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
                <Link to="/shop" className="nav-link px-3">ร้านค้า</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/people' ? 'active' : ''}`}>
                <Link to="/people" className="nav-link px-3">ผู้คน</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link px-3">เกี่ยวกับเรา</Link>
              </li>
              {!isLoggedIn ? (
                <li className={`nav-item bg-warning bg-gradient ${location.pathname === '/signin' ? 'active' : ''}`}>
                  <Link to="/signin" className="nav-link px-3 text-dark" style={{ backgroundColor: '#eab94c' }}>
                    เข้าสู่ระบบ
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-warning bg-gradient text-dark px-3"
                    style={{ backgroundColor: '#eab94c', border: 'none' }}
                    onClick={handleSignOut}
                  >
                    ออกจากระบบ
                  </button>
                </li>
              )}
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

