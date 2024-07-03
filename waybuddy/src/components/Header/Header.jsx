import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            </div>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img id='logo' src="https://i.postimg.cc/Jzv2tB8J/image.png" alt="Logo" />
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link className="bar" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/about">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/navlink">Solutions</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/contribute">Contribute</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <div className="navbar-cart"> */}
                {/* <a href="#"><i className="fas fa-shopping-cart"></i><span>3</span></a> */}
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Header;
