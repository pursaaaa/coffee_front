import React from 'react';

function Footer() {
    return (
        <footer id="footer" className="fixed-buttom text-center py-4 mt-5" style={{ backgroundColor: '#4E342E', color: '#D7CCC8' }}>
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
