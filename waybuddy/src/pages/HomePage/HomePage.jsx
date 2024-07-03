import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";

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
      <section className="options">
        <div className="container">
          <div className="Header">
            <div className="div1">
              <h1>SERVICE WE PROVIDE</h1>
              <h2>Yah wala section hata dange fil hal ka liya.</h2>
            </div>
            <div class="div2">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti iusto aspernatur sit aut optio accusamus amet dicta,
                ipsa ipsum sed debitis ex. Consequuntur totam cumque quam
                adipisci vel fugit nemo.
              </h3>
            </div>
          </div>

          <div className="content">
            <div className="card">
              <div className="card-header">
                <h3>01</h3>
              </div>
              <div className="card-body">
                <h3>BEST ROUTE</h3>
              </div>
              <div className="card-footer">
                <p>
                  Our full product line is still available online here on our
                  site! Getting outside and hiking is still something you can
                  do. Get your gear now!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>02</h3>
              </div>
              <div className="card-body">
                <h3>TOTAL EXPENSE</h3>
              </div>
              <div className="card-footer">
                <p>
                  Since we've changed the way we operate to online only, and to
                  ensure your safety, not all our staff is working. Donate to
                  keep them afloat.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>03</h3>
              </div>
              <div className="card-body">
                <h3>LOCATION NEAR YOU</h3>
              </div>
              <div className="card-footer">
                <p>
                  Have all the outdoor gear you need for now? Buy a gift card
                  and use it later or share it with friends and family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <video
          id="auliVideo"
          autoplay="true"
          muted=""
          poster="https://uttarakhandtourism.gov.in//sites/default/files/2022-05/Banner_Kartik_Swami_Temple.jpeg"
        >
          <source
            src="https://uttarakhandtourism.gov.in//sites/default/files/2021-11/Kartik-ji-banner.mp4"
            type="video/mp4"
          ></source>
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default HomePage;
