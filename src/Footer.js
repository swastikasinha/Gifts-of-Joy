import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__name">
                <h1>Baskets Of Joy:India's No.1 Online Gift Shop</h1>
            </div>
            <div className="footer__mail">
                <h2>basketsofjoy@gmail.com</h2>
            </div>
            <div className="columns">
                <div className="column__one">
                    <span className="LineOne">About Us</span>
                    <br/>
                    <span className="LineTwo">Aim</span>
                    <span className="LineTwo">Vision</span>
                    <span className="LineTwo">FAQ's</span>
                </div>
                <div className="column__two">
                    <span className="LineOne">Contact Us</span>
                    <br/>
                    <span className="LineTwo">Karnataka</span>
                    <span className="LineTwo">Mumbai</span>
                    <span className="LineTwo">Delhi</span>
                </div>
                <div className="column__three">
                    <span className="LineOne">Social Media</span>
                    <br/><br/>
                    <div className="logos">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"/>
                        <img className="logo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;