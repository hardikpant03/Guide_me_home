import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <h1>Serving</h1>
          <h1>you</h1>
          <h1>Your</h1>
          <h1>Destiny.</h1>
          <p>yaha par kuch bhi text dal denge backchodi ka liya</p>
          <button className="btn">Guide Me Home</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;