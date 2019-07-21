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

function HeaderTwo(){
 return(
  <div>
   <div id='headerTwo-up'>
   <div id='up'>
         <p>Sell on Jumia</p>
         <div id="logoSection">
         <ul>
            <li id="list"><img src={jumiaNew} id="img" alt="tyuiy" width="80%" height="60%"/></li>
            <li><a href="#"><img className="nan" src={food1} alt="tyl" height="50%"/>FOODS</a></li>
            <li><a href="#"><img className="nan" src={travel1} alt="tyl" height="50%"/>TRAVEL</a></li>
            <li><a href="#"><img className="nan" src={flights} alt="tyl" height="50%"/>FLIGHT</a></li>
            <li><a href="#"><img  className="nan"src={deal} alt="tyl" height="50%"/>DEALS</a></li>
            <li><a href="#"><img className="nan" src={house1} alt="tyl" height="50%"/>HOUSE</a></li>
            <li><a href="#"><img className="nan" src={party} alt="tyl" height="50%"/>PARTY</a></li>
            <li><a href="#"><img className="nan by" src={one} alt="tyl" height="50%"/>ONE</a></li>
          </ul>
          </div>
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