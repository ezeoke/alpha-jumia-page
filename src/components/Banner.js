import React from 'react';
import './Banner.css';

function Banner(props){
 return(
 <div id='b1-div'>
  {props.bannerImage.map(item=>(
   <div id='b1-Img'>
    <img src={item} alt=""/>
    </div>
  ))}
 </div>
 )
}

export default Banner;