import React from 'react';
import jumiaNew from './pictures/jumialogonew.png';
import './Login.css';

function Login(){
 return(
  <div id='loginParent'>
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
            <h4>Login</h4>
            <h4>Help </h4>
            <h4>Cart</h4>
          </div>
        </div>
      </div>
      <div id='log'>
       <div className='log1'>
        <h3>Login</h3>
        <input type="email" placeholder='E-mail'/><br/>
        <input type="password" placeholder='Password'/>
        <p>Forgot your password?</p>
        <button className='loginA'>LOGIN</button><br/>
        <button className='loginB'>LOGIN WITH FACEBOOK</button>
       </div>
       <div className='log1'>
       <h3>Create your Jumia account</h3>
       <button className='loginA'>CREATE AN ACCOUNT VIA E-MAIL</button><br/>
       <button className='loginB'>REGISTER WITH FACEBOOK</button>
       </div>
      </div>
  </div>
 )
}

export default Login