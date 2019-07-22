import React from 'react';
import './Starter.css';

function Starter() {
 return (
  <div id='starter'>
   <div id='starter1'>
    <p>
     Sign up now to get Amazing Deals and Discounts!
  </p>
    <div>
     <div id='starter2'>
      <input type="text" id='starter-input'placeholder='Type your email here'/>
      <input type="text" value='MALE'  className='starter-btn'/>
      <input type="text" value='FEMALE' className='starter-btn'/>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Starter;