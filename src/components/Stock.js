import React from 'react';
import './Stock.css';

function Stock(props) {
 return (
  <div id='stockHolder'>
  <div id='stocker'  style={{backgroundColor: props.stock.color}}>
  <div id='stockHead'>
    <div id='stockHeader'>
     <h3>{props.stock.header}</h3> <p>{props.stock.header1}</p>
     </div>
     <div id='stockP'>
      <p>SEE ALL</p>  >
    </div>
   </div>
  </div>

   <div id='stock'>
    {props.stock.stock.map(item => (
     <div id='stockCard'>
      <div id='stockDiscount'>
       {item.title.discount ? item.title.discount : <p></p>}
      </div>
      <img src={item.pics} alt="" />
      <div id='stockTitle'>
       {item.title.name} <br/>
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