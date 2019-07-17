import React from 'react';
import FooterTwo from './FooterTwo';
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
      <div id='signup-header2'>

        <div id='signup-header2i'>
          <img src={jumiaNew} alt="" />
          <div id='signup-input'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button id='search'>SEARCH</button>
          </div>
          <div id='signup-need'>
            <NavLink to='/login'><h4>Login</h4></NavLink>
            <h4>Help </h4>
            <h4>Cart</h4>
          </div>
        </div>
      </div>
      <div id='create'>
        <h3>Create Account</h3>
        <div id='signup-input1'>
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
          <NavLink to='/login' id='signup-nav'>LOGIN</NavLink>
        </div>
      </div>
      <FooterTwo></FooterTwo>
    </div>
  )
}

export default SignUp