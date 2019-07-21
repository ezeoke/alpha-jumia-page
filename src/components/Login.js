import React from 'react';
import jumiaNew from './pictures/jumialogonew.png';
import './Login.css';
import visa from './pictures/visa.jpg';
import zippy from './pictures/zippy_1.jpg';
import master from './pictures/mastercard.jpg';
import dollar from './pictures/dollar.jpg';
import gurama from './pictures/Gurama-2.jpg';
import m from './pictures/m-cash.jpg';
import max from './pictures/MAX-LOGO_1.png';
import dhl from './pictures/logo-_071.jpg';
import verve from './pictures/logo-_031_.jpg';
import inter from './pictures/logo-_051b.jpg';
import jumia from './pictures/jumia-pay-logo-footer.jpg';
import travel from './pictures/logo-white-travel-small.png';
import food from './pictures//logo-white-food-small.png';
import deals from './pictures/logo-white-deals-small.png';
import house from './pictures/logo-white-house-small.png';
import jum1 from './pictures/jumia1.png';
import face from './pictures/facebook-logo-button.svg';
import youtube from './pictures/youtube-logotype.svg';
import insta from './pictures/instagram-logo.svg';
import twitter from './pictures/twitter-logo-button.svg';
import FirstHeader from "./FirstHeader"

import deal from "./pictures/deal.png"
import party from "./pictures/party.png"
import flights from "./pictures/flights.png"
import food1 from "./pictures/food1.png"
import house1 from "./pictures/house1.png"
import one from "./pictures/one.png"
import travel1 from "./pictures/travel1.png"
import cart1 from "./pictures/cart1.png"
import human1 from "./pictures/human1.png"
import question1 from "./pictures/question1.png"

import img5 from "./pictures/img5.png"
import cart from './pictures/shopping-cart.svg';
import FooterTwo from './FooterTwo';
// import {Redirect} from 'react-router-dom';
// import {NavLink} from 'react-router-dom';

class Login extends React.Component {
  state = {
    sandra : '',
    learn : '',
    login: false
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  onHandleChange = () =>{
    if(this.state.sandra === 'learn@gmail.com' && this.state.learn === '123'){
      this.setState(() => {
        return  {
            login: true
          }
        })
    }
  }

  render() {
    if(this.state.login){
    //  return (<Redirect to='/signup'></Redirect>)
    }
    return (
      <div>
       
          <FirstHeader />
          
      <div id='header2'>

        <div id='header2i'>
          <div id="jumi">
            <div id="span">
            <div id="span1"> </div>
            <div id="span1"> </div>
            <div id="span1"> </div>
            </div>
          <img src={jumiaNew} alt="" height="60%"/>
          </div>
          <div id='input2'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button id='search' style={{border:"1px solid transparent",color:"white"}}>SEARCH</button>
          </div>
          <div id='need'>
            {/* <NavLink to='/login'><h4>Login</h4></NavLink> */}
            <p id="p1">Login </p >
            <p id="p1"> Help </p >
             <p id="p1">Cart</p > 
          </div>
        </div>
      </div>
       <div id='Plog'>
       <div id='log'>
          <div className='log1' id="one">
            <h3>Login</h3>
            <input type="email" placeholder='E-mail' name='sandra' value={this.state.sandra} onChange={this.onChange}/><br />
            <input type="password" placeholder='Password' name='learn' value={this.state.learn} onChange={this.onChange}/>
            <div id="lost">
              <div id="checkbox">
              <input type="checkbox" id="check"/>
              <p id="para">Remember me</p>

              </div>
              
            <p style={{fontSize:"15px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",marginTop:"7.5%"}}>Forgot your password?</p>
            </div>
            
            <button className='loginA' onClick={this.onHandleChange}>LOGIN</button><br />
            <button className='loginB'>LOGIN WITH FACEBOOK</button>
          </div>
          <div className='log1'>
            <h3>Create your Jumia account</h3>
            <div id='down'>
              <button className='loginA'>CREATE AN ACCOUNT VIA E-MAIL</button><br />
              <button className='loginB'>REGISTER WITH FACEBOOK</button>
            </div>
          </div>
        </div>
       </div>
        <div id='footer'>
          {/* <div id='foot'> */}
            {/* <div>
              <div>
                <h3>LET US HELP YOU</h3>
                <p>Help Center</p>
                <p>Warranty</p>
                <p>Service Centers</p>
                <p>Contact Us</p>
                <p>How to Shop 0n jumia</p>
                <p>Shipping & Delivery</p>
                <p>Return Policy</p>
                <p>Corporate & Bulk Purchase</p>
                <p>Jumia Mobile Apps</p>
                <p>Jumia Bot(Beta)</p>
              </div>
              <div>
                <h3>MAKE MONEY WITH US</h3>
                <p>Sell on Jumia</p>
                <p>Become an Affiliate Partner</p>
                <p>Become a Sales Consultant</p>
                <p>Become a Jumia Vendor Service Provider</p>
                <p></p>
              </div>
            </div>
            <div>
              <h3>GET TO KNOW US</h3>
              <p>Careers</p>
              <p>About Us</p>
              <p>Jumia Express</p>
              <p>Shipped From Overseas</p>
              <p>Jumia Prime </p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Economy Postal Shipping</p>
            </div>

            <div>
              <h3>JUMIA INTERNATIONAL</h3>
              <p>Algeria</p>
              <p>Cameroun</p>
              <p>Egypt</p>
              <p>Ghana</p>
              <p>Ivory Coast</p>
              <p>Kenya</p>
              <p>Morocco</p>
              <p>Senegal</p>
              <p>Tanzania</p>
              <p>Tunisia</p>
              <p>Uganda</p>
            </div>
            <div>
              <h3>JOIN US ON</h3>
              <div id='media'>
                <img src={face} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={cart} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
              </div>
              <h3>CONTACT US ON</h3>
              <p>01 555 120/0700 600 0000</p>
              <h3>PAYMENT METHODS & DELIVERY PARTNER</h3>
              <div id='pic'>
                <img src={master} alt="" />
                <img src={visa} alt="" />
                <img src={verve} alt="" />
                <img src={dollar} alt="" />
                <img src={m} alt="" />
                <img src={inter} alt="" />
                <img src={jumia} alt="" />
                <img src={dhl} alt="" />
                <img src={max} alt="" />
                <img src={gurama} alt="" />
                <img src={zippy} alt="" />
              </div>
              <h3>JUMIA GROUP</h3>
              <div id='pic1'>
                <img src={travel} alt="" />
                <img src={food} alt="" />
                <img src={deals} alt="" />
                <img src={house} alt="" />
                <img src={jum1} alt="" />
              </div>
            </div>
          </div> */}
          <FooterTwo />
        </div>

      </div>
    )
  }
}

export default Login