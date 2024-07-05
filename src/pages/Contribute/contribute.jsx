import React from "react";
import './contribute.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const System = () => {
    return (
      <div className="topperbahi">
        <div className="overlay">
          <h1>Here at Acme Outdoors</h1>
          <h2>every dollar counts</h2>
          <p>
            Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city.
            During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations
            you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.
          </p>
        </div>
      </div>
    );
  };
  
  const DonationButton = ({ amount }) => {
    return (
      <button className="donationButton" onClick={()=>{ alert("Add this feature after word ")}}>Donate {amount}Rupay</button>
    );
  };
  
  const DonationSection = () => {
    const donationAmounts = [10000, 5000, 2500, 1500, 500];
  
    return (
      <section className="donationSection">
        {donationAmounts.map(amount => (
          <DonationButton key={amount} amount={amount} />
        ))}
      </section>
    );
  };

const contribute = ()=>{
    return(
        <div className="Con">
        <Header />
        <System />
        <DonationSection />
        <Footer />
        </div>
    );
};

export default contribute;