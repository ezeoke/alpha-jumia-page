import React from 'react';
import FooterTwo from './FooterTwo'
import jumiaNew from './pictures/jumialogonew.png';
import './Login.css';
import {Redirect} from 'react-router-dom';

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
      <div id='login-up'>
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