import React from "react";
import "./css/home.css";
import sellerLogo from "./Assets/seller.png";
import customerLogo from "./Assets/customer.png";

const Home = () => {
  const sellerWeb = () =>{
    window.location.pathname="/seller/login"
  }
  const customerWeb = () =>{
    window.location.pathname="/customer/login"
  }
  
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
            <div className="seller" onClick={sellerWeb}>
              <img src={sellerLogo} alt="Seller" />
              <b className="margin-top-home">Seller</b>
            </div>
            <div className="customer" onClick={customerWeb}>
              <img src={customerLogo} alt="" />
              <b className="margin-top-home">Customer</b>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
