import React from 'react';
import mtn from './pictures/mtn.png';
import axa from './pictures/axa-mansard-2.png';
import jumia from './pictures/jumialogonew.png';
import tv from './pictures/dreamtv.jpg';
import sell from './pictures/sell.png';
import pay from './pictures/Pay-on-delivery.png';
import easy from './pictures/Easy-return-(1).png';
import delivery from './pictures/delivery.jpg';
import './Header.css'

function Header() {

  return (
    <div id='header'>
      <div id='header1'>
        <span>In Partnership with</span> <img src={mtn} alt='mtnLogo' /> &
        <img src={axa} alt="axa-mansard" />
      </div>

      <div id='header2'>

        <div id='header2i'>
          <img src={jumia} alt="" />
          <div id='header-input'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button>SEARCH</button>
          </div>
          <div id='need'>
            <p>Need <br /> <span>Help?</span> </p>
            <p>Hello <br /> <span>Chike</span> </p>
          </div>
        </div>

      </div>

      <div id='header3'>
        <div id='one'>
          <p>FREE DELIVERY</p>
          <p>PHONES AND TABLETS</p>
          <p>COMPUTING</p>
          <p>ELECTRONICS</p>
          <p>HOME OFFICE</p>
          <p>FASHION</p>
          <p>HEALTH & BEAUTY</p>
          <p>GAMING</p>
          <p>GROCERY</p>
          <p>GLOBAL STORE</p>
          <p>BABY PRODUCTS</p>
          <p>OTHER CATEGORIES</p>
        </div>
        <div id='delivery'>
          <img src={tv} alt="" />
        </div>
        <div id='one1'>
          <div id='sell'>
            <div className='buy' id='buy1'>
              <img src={sell} alt="jumia sell" />
              <p> SELL ON JUMIA <br />
                <span>Millions of Monthly Visitors</span>  </p>
            </div>
            <div className='buy'>
              <img src={pay} alt="jumia pay" />
              <p>PAY ON DELIVERY <br />
                <span>After Checking the Product</span> </p>
            </div>
            <div className='buy'>
              <img src={easy} alt="easy return" />
              <p>
                EASY RETURN <br />
                <span>Quick Refund</span>
              </p>
            </div>
          </div>
          <div id='modal'>
            <img src={delivery} alt="modal" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;