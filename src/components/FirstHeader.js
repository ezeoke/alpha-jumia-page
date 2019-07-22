import React, { Component } from 'react';
import "./Login.css"
import deal from "./pictures/deal.png"
import party from "./pictures/party.png"
import flights from "./pictures/flights.png"
import food1 from "./pictures/food1.png"
import house1 from "./pictures/house1.png"
import one from "./pictures/one.png"
import travel1 from "./pictures/travel1.png"
import jumiaNew from './pictures/jumialogonew.png';

class FirstHeader extends Component {

    render() { 
        return ( 
            <div>
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
         );
    }
}
 
export default FirstHeader;