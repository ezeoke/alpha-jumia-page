import React from 'react';
import './Stock.css';

function Stock(props) {
 return (
  <div>
   <div id='stockHead'>
    <div id='stockHeader'>
    <h3>Deals on Fashion</h3>
    <div id='stockP'>
    <p>SEE ALL</p>  >
    </div>
    </div>
   </div>
   <div id='stock'>
   {props.stock.map(item => (
    <div id='stockCard'>
     <div id='stockDiscount'>
      {item.title.discount}
     </div>
     <img src={item.pics} alt="" />
     <div id='stockTitle'>
     {item.title.name} <br />
     <h3>{item.title.price}</h3> <br />
     <del>{item.title.oldPrice}</del>
     </div>
    </div>
   ))}
  </div>
  </div>
 )
}

export default Stock;