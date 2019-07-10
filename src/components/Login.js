import React from 'react';
import jumiaNew from './pictures/jumialogonew.png';

function Login(){
 return(
  <div>
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
  </div>
 )
}

export default Login