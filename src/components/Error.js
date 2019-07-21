import React, { Component } from 'react';
import error from "./pictures/error.jpg"


class Error extends Component {
    state = { 

     }
     styles={

     }
    render() { 
        return ( 
            <div style={{width:"100%",height:"100vh",display:"flex",backgroundColor:"#cccccc" ,justifyContent:"space-around"}}>
                <div style={{width:"45%", height:"90%",textAlign:"center"}}>
                    <h1 style={{fontSize:"60px", fontFamily:" 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Oops!</h1>

                    <p style={{fontSize:"30px",fontFamily:" 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Hmmm.We can't seem to find the page you are looking for.</p>
                </div>
                <div style={{width:"45%",transform:"rotate(25deg)", height:"90%",marginTop:"2%", borderRadius:"10%"}}>
                    <img src={error} alt="dfgh" height="100%" style={{borderRadius:"50%"}} width="100%"/>
                </div>
            </div>
         );
    }
}
 
export default Error;