import React from 'react';
import './Items.css';

function Items(props){
 return(
   <div id='banMain' >
  <div id='banh3'>
    <h3>Featured Categories</h3>
    </div>
   <div id='card'>
   {props.pics.map(function(item){
     return (<div id='banPic'>
       <img src={item.pics} alt=""/>
     <div>
     {item.title}
     </div>
     </div>)
   })}
   </div>
   
   </div>
 )
}

export default Items;