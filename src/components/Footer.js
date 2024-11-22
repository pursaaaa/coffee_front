import React from 'react';
import '../App.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>© 2024 CoffeeBeans. All Rights Reserved.</p>
                <div>
                    <a href="https://www.facebook.com/pursa.kaewsootthipol" target='_blank' rel="noreferrer" className="text-primary mx-2">Facebook</a>
                    <a href="https://www.instagram.com/pursapung/" target='_blank' rel="noreferrer" className="text-primary mx-2">Instagram</a>
                    <a href="https:/www.x.com/" target='_blank' rel="noreferrer" className="text-primary mx-2">X</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
