import React from 'react';
import './Banner.css';

function Banner(props){
 return(
 <div id='b1-div'>
  {props.bannerImage.map(item=>(
    <img src={item} alt=""/>
  ))}
 </div>
 )
}

export default Banner;