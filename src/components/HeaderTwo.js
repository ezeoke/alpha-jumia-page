import React from 'react';
// import {NavLink} from 'react-router-dom';
import jumiaNew from './pictures/jumialogonew.png';
import deal from "./pictures/deal.png"
import party from "./pictures/party.png"
import flights from "./pictures/flights.png"
import food1 from "./pictures/food1.png"
import house1 from "./pictures/house1.png"
import one from "./pictures/one.png"
import travel1 from "./pictures/travel1.png";
import './HeaderTwo.css';

function HeaderTwo() {
  return (
    <div>
      <div id='headerTwo-up'>
        <p>Sell on Jumia</p>
        <div id="headerTwo-logo">
            <a href="#"><img src={food1} alt="tyl" height="50%" />FOODS</a>
            <a href="#"><img src={travel1} alt="tyl" height="50%" />TRAVEL</a>
            <a href="#"><img src={flights} alt="tyl" height="50%" />FLIGHT</a>
            <a href="#"><img src={deal} alt="tyl" height="50%" />DEALS</a>
            <a href="#"><img src={house1} alt="tyl" height="50%" />HOUSE</a>
            <a href="#"><img src={party} alt="tyl" height="50%" />PARTY</a>
            <a href="#"><img src={one} alt="tyl" height="50%" />ONE</a>
        </div>
      </div>
      <div id='headerTwo-header2'>

        <div id='headerTwo-header2i'>
          <img src={jumiaNew} alt="" />
          <div id='headerTwo-input'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button id='headerTwo-search'>SEARCH</button>
          </div>
          <div id='headerTwo-need'>
            {/* <NavLink to='/login' id='headerTwo-nav'><h4>Login</h4></NavLink> */}
            <h4>Help </h4>
            <h4>Cart</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTwo;