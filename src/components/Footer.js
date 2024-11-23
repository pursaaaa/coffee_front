import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>© 2024 CoffeeBeans. All Rights Reserved.</p>
                <div>
                    <a href="https://www.facebook.com/pursa.kaewsootthipol" target='_blank' rel="noreferrer" className="fa-brands fa-square-facebook"></a>
                    <a href="https://www.instagram.com/pursapung/" target='_blank' rel="noreferrer" className="fa-brands fa-square-instagram"></a>
                    <a href="https:/www.x.com/" target='_blank' rel="noreferrer" className="fa-brands fa-twitter"></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
