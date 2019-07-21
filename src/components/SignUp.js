import React from 'react';
import FooterTwo from './FooterTwo';
import {NavLink} from 'react-router-dom';
import './SignUp.css';
import HeaderTwo from './HeaderTwo';

const SignUp = () => {
  return (
    <div id='resp'>
    <HeaderTwo/>
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