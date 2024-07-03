import React from 'react';
import './contact.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const contact = () => {
    return(
        <>
        <Header/>
        <div className="container">
      <div className="contact-section">
        <div className="heading"><h1>Contact WayBuddy for Support</h1></div>
        <div className="contact-options">
          <div className="contact-block">
            <div className="logo" style={{color:"black"}}>logo attach here</div>
            <div className="other">
            <h2>Contact Us</h2>
            <p style={{color:"black"}}>Just want to say hi? We'd love to hear from you. We love our customers and community!</p>
            <button className="contact-button">Send Us A Message</button>
            </div>
          </div>
          <div className="contact-block">
            <div className="logo" style={{color:"black"}}>logo attach here</div>
            <div className="other"><h2>Get Support</h2>
            <p style={{color:"black"}}>Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
            <button className="contact-button">Contact Support</button></div>
          </div>
        </div>
      </div>
    </div>

     <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Acme Outdoors</p>
        <p>123 Rainy Street</p>
        <p>Oklahoma City, OK 73129</p>
        <p><strong>General Inquiries:</strong> (405) 555-5555</p>
        <p><strong>Customer Support:</strong> (405) 555-5556</p>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <p>Send us a message and we'll get back to you as soon as we can!</p>
        <form>
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
            />
          </label>
          <label>
            Email Address
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email address" 
            />
          </label>
          <label>
            Your Message
            <textarea 
              name="message" 
              placeholder="Enter your message" 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <Footer />
        </>
    );
};

export default contact;