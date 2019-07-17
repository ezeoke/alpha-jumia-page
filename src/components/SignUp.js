import React from 'react';
import FooterTwo from './FooterTwo';
import {NavLink} from 'react-router-dom';
import jumiaNew from './pictures/jumialogonew.png';
import './SignUp.css';

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
            <NavLink to='/login' id='signup-nav'><h4>Login</h4></NavLink>
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