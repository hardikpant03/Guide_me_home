import React from 'react';
import './footer.css';
import { FaTwitter,FaInstagram,FaFacebook } from "react-icons/fa"; // for use this you have install - npm install react-icons 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="https://i.postimg.cc/Jzv2tB8J/image.png" alt="Logo" className="logo" />
      </div>
      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
      </div>
      <div className="footer-center">
        <p>Made by <span className="highlight">developer</span> &copy; 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
