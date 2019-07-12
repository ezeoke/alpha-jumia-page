import React from 'react';
import {NavLink} from 'react-router-dom';
import jumiaNew from './pictures/jumialogonew.png';
import './SignUp.css';
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
import travel from './pictures/logo-white-travel-small.png';
import food from './pictures//logo-white-food-small.png';
import deals from './pictures/logo-white-deals-small.png';
import house from './pictures/logo-white-house-small.png';
import jum1 from './pictures/jumia1.png';
import face from './pictures/facebook-logo-button.svg';
import youtube from './pictures/youtube-logotype.svg';
import insta from './pictures/instagram-logo.svg';
import twitter from './pictures/twitter-logo-button.svg';
import cart from './pictures/shopping-cart.svg';
import apple from './pictures/ios.png';
import android from './pictures/android.png';

const SignUp = () => {
  return (
    <div id='resp'>
      <div id='up'>
        <p>Sell on Jumia</p>
      </div>
      <div id='header2'>

        <div id='header2i'>
          <img src={jumiaNew} alt="" />
          <div id='input2'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button id='search'>SEARCH</button>
          </div>
          <div id='need'>
            <NavLink to='/login'><h4>Login</h4></NavLink>
            <h4>Help </h4>
            <h4>Cart</h4>
          </div>
        </div>
      </div>
      <div id='create'>
        <h3>Create Account</h3>
        <div id='input1'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <div id='label'>
            <label htmlFor="">+234</label><input type="number" placeholder='Phone Number(Optional)' />
          </div>
        </div>
        <div id='hr'>
          <p id='p'>I want to receive Jumia Newsletters with the best deals and offers</p>
          <button id='signBtn'>CREATE ACCOUNT</button>
          <div>
            <div></div> OR <div></div>
          </div>
          <button id='signBtn1'>REGISTER WITH FACEBOOK</button>
          <p>Already have an account?</p>
          <NavLink to='/login'>LOGIN</NavLink>
        </div>
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
            <div id='media'>
              <img src={face} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
              <img src={cart} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
            </div>
            <h3>CONTACT US ON</h3>
            <p>01 888 1100/0700 600 0000</p>
            <h3>PAYMENT METHODS & DELIVERY PARTNER</h3>
            <div id='pic'>
              <img src={master} alt="" />
              <img src={visa} alt="" />
              <img src={verve} alt="" />
              <img src={dollar} alt="" />
              <img src={m} alt="" />
              <img src={inter} alt="" />
              <img src={jumia} alt="" />
              <img src={dhl} alt="" />
              <img src={max} alt="" />
              <img src={gurama} alt="" />
              <img src={zippy} alt="" />
            </div>
            <h3>JUMIA GROUP</h3>
            <div id='pic1'>
              <img src={travel} alt="" />
              <img src={food} alt="" />
              <img src={deals} alt="" />
              <img src={house} alt="" />
              <img src={jum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp