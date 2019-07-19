import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {
 render(){
  return(
   <div id='profile'>
    <div id='profile-first'>
     <p>My Jumia Account</p>
     <p>Orders</p>
     <p>Jumia Credit</p>
     <p>Saved Items</p>
     <div>
      <p>Details</p>
      <p>Address Book</p>
      <p>Change Password</p>
      <p>Newsletter Preferences</p>
     </div>
     <div>
      <p>LOGOUT</p>
     </div>
    </div>
    <div id='profile-second'>
     <h2>Account Overview</h2>
     <div id='profile-wrap'>
      <div className='pWrap'>
       <div className='wrap1'>
        <h4>ACCOUNT DETAILS</h4>
       </div>
       <p>chike Ezeoke</p>
       <p>senatorcuba@gmail.com</p>
       <h4>CHANGE PASSWORD</h4>
      </div>
      <div className='pWrap'>
       <div className='wrap1'>
       <h4>ADDRESS BOOK</h4>
       </div>
      </div>
      <div className='pWrap'>
       <div className='wrap1'>
       <h4>NEWSLETTER PREFERENCES</h4>
       </div>
       <h4>You are currently subscribed to following newsletters:</h4>
      </div>
     </div>
    </div>
   </div>
  )
 }
}

export default ProfilePage;