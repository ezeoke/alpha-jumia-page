import React from 'react';
import FooterTwo from './FooterTwo'
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
import cart from './pictures/shopping-cart.svg';
import {Redirect} from 'react-router-dom';
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
     return (<Redirect to='/'></Redirect>)
    }
    return (
      <div>
      <div id='up'>
        <p>Sell on Jumia</p>
      </div>
      <div id='login-header2'>

        <div id='login-header2i'>
          <img src={jumiaNew} alt="" />
          <div id='login-input'>
            <input type="text" placeholder='Search for products, brands and categories' />
            <button id='search'>SEARCH</button>
          </div>
          <div id='login-need'>
            <h4>Login</h4>
            <h4>Help </h4>
            <h4>Cart</h4>
          </div>
        </div>
      </div>
       <div id='Plog'>
       <div id='log'>
          <div className='log1'>
            <h3>Login</h3>
            <input type="email" placeholder='E-mail' name='sandra' value={this.state.sandra} onChange={this.onChange}/><br />
            <input type="password" placeholder='Password' name='learn' value={this.state.learn} onChange={this.onChange}/>
            <p>Forgot your password?</p>
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
       <FooterTwo></FooterTwo>

      </div>
    )
  }
}

export default Login