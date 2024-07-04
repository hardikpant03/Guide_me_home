import React from "react";
import './solution.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const navlink = ()=>{
    return(
        <>
        <Header />
        <div className="first">
            <h1>About Nav link </h1>
            <p className="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque placeat ex quod earum ipsam soluta? Minima maiores omnis ipsam itaque similique eos iusto deleniti. Velit aspernatur, et beatae cumque dolores impedit architecto. Explicabo ipsam, fugiat quaerat laboriosam rerum cumque?</p>
        </div>
        <Footer />
        </>
    );
};

export default navlink;