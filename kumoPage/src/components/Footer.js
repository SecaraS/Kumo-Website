import React from 'react';
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
   <div className="footerContainer">
{/* explore box from footer */}
<div className="exploretBox">
  <div className="logoFooterText">
  <Link to="/">
  <img src={logo} className="logoPrint" alt="Logo" />
  </Link>
      </div>
     <div className="adressText">
        <p>3256 Grant Street Longview</p>
      </div>
      <div className="locationText">
        <p>TX United Kingdom 75547</p>
      </div>
      <div className="nrLocationText">
        <p>01600134871123</p>
      </div>
    
      <div className="discountsText">
        <p>Discounts</p>
      </div>
      <div className="socialWebIcons">
      <i className='bx bxl-facebook'></i>
      <i className='bx bxl-twitter'></i>
      <i className='bx bxl-instagram'></i>
      <i className='bx bxl-youtube'></i>
      </div>
    </div>

   {/* support box from footer */}
    <div className="supportBox">
      <div className="supportText">
        <h2>Support</h2>
      </div>
      <div className="supportText">
        <p>Contact Us</p>
      </div>
      <div className="supportText">
        <p>About Us</p>
      </div>
      <div className="supportText">
        <p>Size Guide</p>
      </div>
      <div className="supportText">
        <p>Terms of Use</p>
      </div>
    </div>
     {/* shop box from footer */}
     <div className="supportBox">
     <div className="supportText">
        <h2>Shop</h2>
      </div>
      <div className="mShoppingText">
        <p>Men's Shopping</p>
      </div>
      <div className="wShoppingText">
        <p>Women's Shopping</p>
      </div>
      <div className="kShoppingText">
        <p>Kids' Shopping</p>
      </div>
      <div className="furnitureText">
        <p>Furniture</p>
      </div>
      <div className="discountsText">
        <p>Discounts</p>
      </div>
    </div>
    {/* company box from footer */}
    <div className="companyBox">
     <div className="companyText">
        <h2>Company</h2>
      </div>
      <div className="mShoppingText">
        <p>About</p>
      </div>
      <div className="wShoppingText">
        <p>Blog</p>
      </div>
      <div className="furnitureText">
        <p>Login</p>
      </div>
      <div className="supportText">
        <p>Privacy Policy</p>
      </div>
      </div>
      {/* subscribe box from footer */}
    <div className="companyBox">
     <div className="subscribeText">
        <h2>Subscribe</h2>
      </div>
      <div className="inboxText">
        <p>Receive Updates, Hot Deals, Discounts, Latest News. </p>
      </div>
      <div className="inboxText">
      <p>Receive Updates, Hot Deals, Discounts, Latest News. </p>
      </div>
      <div className="inboxText">
      <p>Receive Updates, Hot Deals, Discounts, Latest News. </p>
      </div>
      </div>
   </div>
  );
};

export default Footer;
