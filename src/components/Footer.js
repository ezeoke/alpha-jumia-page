import React from 'react';
import './Footer.css';
import visa from './pictures/visa.jpg';
import zippy from './pictures/zippy_1.jpg';
import master from './pictures/mastercard.jpg';
import dollar from './pictures/dollar.jpg';
import gurama from './pictures/Gurama-2.jpg';
import m from './pictures/m-cash.jpg';
import max from './pictures/MAX-LOGO_1.png';
import dhl from './pictures/logo-_071.jpg';
import verve from './pictures/logo-_031_.jpg';
import inter from './pictures/logo-_051b.jpg';
import jumia from './pictures/jumia-pay-logo-footer.jpg';

const Footer = () => {
return(
    <div>
        <div>
        Get access to all offers, discounts and deals!
    </div>
    <div id='footer'>
    <div id='foot'>
      <div>
      <div> 
           <h3>LET US HELP YOU</h3>
        <p>Help Center</p>
        <p>Warranty</p>
        <p>Service Centers</p>
        <p>Contact Us</p>
        <p>How to Shop 0n jumia</p>
        <p>Shipping & Delivery</p>
        <p>Return Policy</p>
        <p>Corporate & Bulk Purchase</p>
        <p>Jumia Mobile Apps</p>
        <p>Jumia Bot(Beta)</p>
        </div>
      <div>
          <h3>MAKE MONEY WITH US</h3>
         <p>Sell on Jumia</p>
          <p>Become an Affiliate Partner</p>
          <p>Become a Sales Consultant</p>
          <p>Become a Jumia Vendor Service Provider</p>
          <p></p>
      </div>
      </div>
      <div>
          <h3>GET TO KNOW US</h3>
      <p>Careers</p>
      <p>About Us</p>
      <p>Jumia Express</p>
      <p>Shipped From Overseas</p>
      <p>Jumia Prime </p>
      <p>Terms and Conditions</p>
      <p>Privacy Policy</p>
      <p>Economy Postal Shipping</p>
      </div>

     <div>
         <h3>JUMIA INTERNATIONAL</h3>
         <p>Algeria</p>
         <p>Cameroun</p>
         <p>Egypt</p>
         <p>Ghana</p>
         <p>Ivory Coast</p>
         <p>Kenya</p>
         <p>Morocco</p>
         <p>Senegal</p>
         <p>Tanzania</p>
         <p>Tunisia</p>
         <p>Uganda</p>
     </div>
     <div>
       <h3>JOIN US ON</h3>  
       <h3>CONTACT US ON</h3>
       <p>01 888 1100/0700 600 0000</p>
       <h3>PAYMENT METHODS & DELIVERY PARTNER</h3>
       <div id='pic'>
           <img src={master} alt=""/>
           <img src={visa} alt=""/>
           <img src={verve} alt=""/>
           <img src={dollar} alt=""/>
           <img src={m} alt=""/>
           <img src={inter} alt=""/>
           <img src={jumia} alt=""/>
           <img src={dhl} alt=""/>
           <img src={max} alt=""/>
           <img src={gurama} alt=""/>
           <img src={zippy} alt=""/>
       </div>
       <h3>JUMIA GROUP</h3>                                                                                                                                                                                                                                                                                                                                                                                                                                    
     </div>
    </div>
    </div>
    
    </div>
)
}

export default Footer