import React from 'react';
import './ProfilePage.css';
import HeaderTwo from './HeaderTwo';
import firstFirst from "./pictures/firstFirst.jpg";
import secondSecond from "./pictures/secondSecond.jpg";
import thirdFirst from "./pictures/thirdFirst.jpg";
import forthForth from "./pictures/forthForth.jpg";
import fifthFirst from "./pictures/fifthFirst.jpg";
import first1 from "./pictures/first-1.jpg";
import FooterTwo from '../components/FooterTwo';

class ProfilePage extends React.Component {
 render() {
  let top = [
   {
    pics: first1,
    title: {
     name: "2019 fashion Spining S...",
     price: "N 68,199",
     oldPrice: "",
     discount: ''
    }
   },
   {
    pics: firstFirst,
    title: {
     name: "S10 Lite 5.2 Inch 4GB...",
     price: "N 31,820",
     oldPrice: "N 44,590",
     discount: '-10%'
    }
   },
   {
    pics: secondSecond,
    title: {
     name: "48h Fresh Active Spray W...",
     price: "N 1,645",
     oldPrice: "",
     discount: ''
    }
   },
   {
    pics: thirdFirst,
    title: {
     name: "43 Inch Digital LED TV -H...",
     price: "N 60,000",
     oldPrice: "",
     discount: ''
    }
   },
   {
    pics: forthForth,
    title: {
     name: "Electric Kettle 1.7...",
     price: "N 3,600",
     oldPrice: "N 5,000",
     discount: '-8%',
    }
   },
   {
    pics: fifthFirst,
    title: {
     name: "The OLLOSSAL Kajal (6 HR...",
     price: "N 1,360",
     oldPrice: "N 1,700",
     discount: '-14%'
    }
   }
  ]

  return (
   <div>
    <HeaderTwo/>
    <div id='profile'>
     <div id='profile-first'>
      <div id='profile-first1'>
       <p>My Jumia Account</p>
      </div>
      <hr id='profile-hr'/>
      <p>Orders</p>
      <p>Jumia Credit</p>
      <p>Saved Items</p>
      <hr id='profile-hr'/>
      <p id='profile-first2'>Details</p>
      <p>Address Book</p>
      <p>Change Password</p>
      <p>Newsletter Preferences</p>
      <hr id='profile-hr'/>
      <p id='profile-log'>LOGOUT</p>
     </div>
     <div id='profile-second'>
      <h2 id='profile-acct'>Account Overview</h2>
      <div id='profile-wrap'>
       <div className='profile-pWrap'>
        <div className='profile-wrap1'>
         <h4>ACCOUNT DETAILS</h4>
        </div>
        <div className='profile-wrap2'>
         <p>chike Ezeoke</p>
         <p>senatorcuba@gmail.com</p>
         <h4 id='profile-pass'>CHANGE PASSWORD</h4>
        </div>
       </div>
       <div className='profile-pWrap'>
        <div className='profile-wrap1'>
         <h4>ADDRESS BOOK</h4>
        </div>
        <div className='profile-wrap2'>
         <p>Your default shipping address:
       <p>chike Ezeoke <br />
           no 24B Aba Owerri Rd. <br />
           Aba, Abia <br />
           +234-8138242433</p>
         </p>
        </div>
       </div>
       <div className='profile-pWrap'>
        <div className='profile-wrap1'>
         <h4>NEWSLETTER PREFERENCES</h4>
        </div>
        <div className='profile-wrap2'>
         <p>You are currently subscribed to following newsletters:</p>
         <p>daily newsletters</p>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div id='profile-sell'>
     <div id='profile-h3'>
      <h3>Top selling items</h3>
     </div>
     <hr id='profile-hr'/>
     <div id='profile-map'>
      {top.map(function (item) {
       return ( 
       <div id='profile-map1'>
        <div>
         <img src={item.pics} alt=""/>
        </div>
        <div>
         <p id='profile-name'>{item.title.name}</p>
         <p>{item.title.price} <br/>
         <del>{item.title.oldPrice}</del></p>
        </div>
       </div>)
      })}
     </div>
    </div>
    <FooterTwo/>
   </div>
  )
 }
}

export default ProfilePage;