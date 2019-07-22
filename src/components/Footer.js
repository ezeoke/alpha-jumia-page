import React from 'react';
import './Footer.css';
import visa from './pictures/visa.jpg';
import imageCart from './pictures/imageCart.png'
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
import apple from './pictures/ios.png';
import android from './pictures/android.png';
import mtn from './pictures/mtn.png';
import axa from './pictures/axa-mansard-2.png';

const Footer = () => {
    return (
        <div>
            <div id='bhead1'>
            <div id='bhed'>
                <div id='bheader'>
                    <div id='cart'>
                        <img src={imageCart} alt="" />
                    </div>

                    <div id="secondPart">
                        <div id="firstTextParent">
                            <p id="firstText">Get access to all offers, discounts and deals!</p>
                        </div>
                        <div id='bhead'>
                            <div id='free'>
                                <p id="FreeDownload">FREE DOWNLOAD NOW</p>
                            </div>

                            <div id='apple'>
                                <img src={apple} alt="" />
                                <img src={android} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div id="rightSide">
                    <div id="rowone">
                        <label id="footer1">New to JUMIA?</label>
                    </div>
                    <div id="rowtwo">
                        <label id="two">Subscribe to our communications to receive special offers and latest news</label>
                    </div>
                    <div id="rowthree">
                        <input id="input" type="text" />
                        <input id="button1" type="button" value="Male" />
                        <input id="button2" type="button" value="Female" />
                    </div>
                </div>
            </div>
            </div>
            <div id='footer'>
                <div id='foot'>
                    <div>
                        <div id='footer-help'>
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
                        <div className='footer-help'>
                            <h3>MAKE MONEY WITH US</h3>
                            <p>Sell on Jumia</p>
                            <p>Become an Affiliate Partner</p>
                            <p>Become a Sales Consultant</p>
                            <p>Become a Jumia Vendor Service Provider</p>
                            <p></p>
                        </div>
                    </div>
                    <div className='footer-help'>
                        <h3>GET TO KNOW US</h3>
                        {/* <div className='fHelp'> */}
                            <p>Careers</p>
                            <p>About Us</p>
                            <p>Jumia Express</p>
                            <p>Shipped From Overseas</p>
                            <p>Jumia Prime </p>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Economy Postal Shipping</p>
                        {/* </div> */}
                    </div>

                    <div className='footer-help'>
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
                    <div className='footer-help'>
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
                        <p>01 888 1100/0700 600 0000</p>
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
                            <div id='footer-header1'>
                                <span>In Partnership with</span> <img src={mtn} alt='mtnLogo' /> &
        <img src={axa} alt="axa-mansard" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer