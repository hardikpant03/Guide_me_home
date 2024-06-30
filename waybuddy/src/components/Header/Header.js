// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src="https://i.imgur.com/Xv0aX0Q.png" alt="Logo" />
                    <span>ACME</span>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#">Home</a></li>
                    <li className="navbar-item"><a href="#">About</a></li>
                    <li className="navbar-item"><a href="#">nav link</a></li>
                    <li className="navbar-item"><a href="#">Contribute</a></li>
                    <li className="navbar-item"><a href="#">Contact</a></li>
                </ul>
                <div className="navbar-cart">
                    <a href="#"><i className="fas fa-shopping-cart"></i><span>3</span></a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
