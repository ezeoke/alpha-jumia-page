import React, { Component } from 'react';
import "./FooterTwo.css"
import img1 from "./pictures/img1.png"
import img2 from "./pictures/img2.png"
import img3 from "./pictures/img3.png"

class FooterTwo extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="house">
            <div id="top">
            <div id="topinside">
            <div id="rowA">
                <div class="One">
                    <h4>LET US HELP YOU</h4>
                </div>
                <div class="Two">
                    <p><a href="#">Help Center</a></p>
                    <p><a href="#">Contact us</a></p>
                       <p><a href="#">How to shop on Jumia?</a></p> 
                       <p><a href="#">Delivery options and timelines</a></p>
                       <p><a href="#">How to return a product on Jumia?</a></p>
                       <p><a href="#">Corporate and bulk purchases</a></p>
                       <p><a href="#">Jumia Bot (Beta version)</a></p>
                </div>
                <div class="Three"></div>
                <div class="four"></div>
             </div>
            <div id="rowB">
            <div class="One">
                    <h4>ABOUT JUMIA</h4>
                </div>
                <div class="Two">
                     JUMIA

                    <p><a href="#">About us</a></p>
                    <p><a href="#">Jumia careers</a></p>
                   <p><a href="#">Jumia Express</a></p>
                    <p><a href="#">Jumia Global</a></p>
                    <p><a href="#">Terms and Conditions</a></p>
                    <p><a href="#">Privacy policy</a></p>
                    <p><a href="#">Ramadan Shop</a></p>
                    <p><a href="#">Mobile Week</a></p>
                    </div>
             </div>
            <div id="rowC">
                <div id="beginning">
                <div class="One">
                    <h4>MAKE MONEY WITH JUMIA</h4>
                </div>
                <div class="Two">
                        <p><a href="#">Sell on Jumia</a></p>
                       <p> <a href="#">Become an Affiliate Partner</a></p>
                        <p><a href="#">Become a Sales Consultant</a></p>
                       <p> <a href="#">Become a Jumia Vendor Service Provider</a></p>
                       <p> <a href="#">Become a Logistics Service Partner</a></p>
                    </div>
                </div>
                <div id="end">
                <div class="One">
                    <h4>JUMIA INTERNATIONAL</h4>
                    </div>
                    <div id="endbox">
                        <div id="endbox1">
                        <p><a href="#">Algeria</a></p>
                        <p><a href="#">Cameroon</a></p>
                        <p><a href="#">Egypt</a></p>
                        <p><a href="#">Ghana</a></p>
                        <p><a href="#">Ivory Coast</a></p>
                        <p><a href="#">Kenya</a></p>
                        </div>
                        <div id="endbox2">
                        <p><a href="#">Morocco</a></p>
                        <p><a href="#">Senegal</a></p>
                        <p><a href="#">Tanzania</a></p>
                        <p><a href="#">Tunisia</a></p>
                        <p><a href="#">Uganda</a></p>
                        </div>
                    </div>
                </div>

            </div>
            
            </div>
            <div id="best">
                <div id="best1">
                    <div id="best11">
                        <h5>JOIN US ON</h5>
                    </div>
                    <div id="best12">
                        <h5>Contact us</h5>
                    </div>
                    <div id="best13">
                        <h5>PAYMENT METHODS & DELIVERY PARTNERS</h5>
                    </div>
                    
                </div>
                    <div id="best2">
                <div id="best14">
                <img src={img2} width="100%" />
                       
                    </div>
                    <div id="best15">
                        <p>01 888 1100 / 0700 600 0000</p>
                    </div>
                    <div id="best16">
                    <img src={img1} width="100%" />
                    </div>
                    </div>
            </div>
            </div>
            <div id="bottom">
                <img src={img3} width="100%" />
            </div>
            
            </div>
         );
    }
}
 
export default FooterTwo;