import React from 'react';
import FooterTwo from './FooterTwo'
import HeaderTwo from './HeaderTwo';
import './Login.css';
// import {Redirect} from 'react-router-dom';

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
    //  return (<Redirect to='/'></Redirect>)
    }
    return (
      <div>
      <HeaderTwo/>
       <div id='Plog'>
       <div id='log'>
          <div className='log1' id="login-one">
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
       <FooterTwo></FooterTwo>

      </div>
    )
  }
}

export default Login