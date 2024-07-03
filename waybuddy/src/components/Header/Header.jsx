import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="https://i.postimg.cc/Jzv2tB8J/image.png" alt="WayBuddy" />
        </div>
        <div className="nav-items">
          <Link className="check" to="/">Home</Link>
          <Link className="check" to="/about">About</Link>
          <Link className="check" to="/solution">Solution</Link>
          <Link className="check" to="/contribute">Contribute</Link>
          <Link className="check" to="/contact">Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={toggleSidebar}>
          &times;
        </div>
            <Link className='side' to="/" onClick={toggleSidebar}>Home</Link>
            <Link className='side' to="/about" onClick={toggleSidebar}>About</Link>
            <Link className='side' to="/solution" onClick={toggleSidebar}>Solution</Link>
            <Link className='side' to="/contribute" onClick={toggleSidebar}>Contribute</Link>
            <Link className='side' to="/contact" onClick={toggleSidebar}>Contact</Link>
      </div>
    </div>
  );
    return (
        <nav className="navbar">
            <div className="navbar__logo">
            </div>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src="https://i.imgur.com/Xv0aX0Q.png" alt="Logo" />
                    <span>ACME</span>
                </div>
                <ul className="navbar-menu">
                <li className="navbar-item">
                        <Link className="bar" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/about">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="bar" to="/navlink">nav link</Link>
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
                    {/* <a href="#"><i className="fas fa-shopping-cart"></i><span>3</span></a> */}
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Header;