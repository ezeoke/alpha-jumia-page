import React, { Component } from 'react';
import "./FooterTwo.css"
import img1 from "./pictures/img1.png"
import img2 from "./pictures/img2.png"
import img3 from "./pictures/img3.png"

class FooterTwo extends Component {

    render() { 
        return ( 
            <div id="house">
            <div id="top">
            <div className='footer2Row'>
            <div id="rowA">
                <div class="One">
                    <h4>LET US HELP YOU</h4>
                </div>
                <div class="Two">
                    <p>Help Center</p>
                    <p>Contact us</p>
                       <p>How to shop on Jumia?</p> 
                       <p>Delivery options and timelines</p>
                       <p>How to return a product on Jumia?</p>
                       <p>Corporate and bulk purchases</p>
                       <p>Jumia Bot (Beta version)</p>
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

                    <p>About us</p>
                    <p>Jumia careers</p>
                   <p>Jumia Express</p>
                    <p>Jumia Global</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy policy</p>
                    <p>Ramadan Shop</p>
                    <p>Mobile Week</p>
                    </div>
             </div>
            {/* <div id="rowC"> */}
                <div id="beginning">
                <div class="One">
                    <h4>MAKE MONEY WITH JUMIA</h4>
                </div>
                <div class="Two">
                        <p>Sell on Jumia</p>
                       <p> Become an Affiliate Partner</p>
                        <p>Become a Sales Consultant</p>
                       <p> Become a Jumia Vendor Service Provider</p>
                       <p> Become a Logistics Service Partner</p>
                    </div>
                </div>
                <div id="end">
                <div class="One">
                    <h4>JUMIA INTERNATIONAL</h4>
                    </div>
                    <div id="endbox">
                        <div id="endbox1">
                        <p>Algeria</p>
                        <p>Cameroon</p>
                        <p>Egypt</p>
                        <p>Ghana</p>
                        <p>Ivory Coast</p>
                        <p>Kenya</p>
                        </div>
                        <div id="endbox2">
                        <p>Morocco</p>
                        <p>Senegal</p>
                        <p>Tanzania</p>
                        <p>Tunisia</p>
                        <p>Uganda</p>
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