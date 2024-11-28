import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom styles for the Navbar
import Swal from 'sweetalert2';


function Navbar() {
  const location = useLocation(); // Hook to get the current path
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (based on token existence in localStorage)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists, otherwise false
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.nav-bar');
      const hamburger = document.querySelector('.hamburger');
      
      // Check if the click was outside the navbar and hamburger
      if (
        isMenuOpen &&
        navbar &&
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // Cleanup listener when component unmounts or when `isMenuOpen` changes
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

    <header> 
      <div className='logo'>COFFEESHOP</div>
      <div className={`hamburger ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
      <i class="fa-solid fa-bars"></i>
      </div>
      <nav className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
                <Link to="/shop" className="nav-link">SHOP</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/story' ? 'active' : ''}`}>
                <Link to="/story" className="nav-link">STORY</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </li>
              {!isLoggedIn ? (
                <li className={`nav-item ${location.pathname === '/signin' ? 'active' : ''}`}>
                  <Link to="/signin" className="nav-link">LOGIN</Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn px-3" onClick={handleSignOut}>
                    ออกจากระบบ
                  </button>
                </li>
              )}
            </ul>
      </nav>
    </header>
  )
}

export default Navbar;

