import React from 'react';
import '../App.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>© 2024 CoffeeBeans. All Rights Reserved.</p>
                <div>
                    <a href="#" className="text-warning mx-2">Facebook</a>
                    <a href="#" className="text-warning mx-2">Instagram</a>
                    <a href="#" className="text-warning mx-2">Twitter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
