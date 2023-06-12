import React from "react";
import "./componets-css/Footer.css";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footerwrapper">
            <div className="footerone ">
                <h2>ECOMM &nbsp;&nbsp;<i className="fa-solid fa-cart-shopping icon-navbar"></i></h2>
                <p>
                    <b>ADDRESS.</b>&nbsp;H.NO.-225, PKT-12, SECTOR-25, ROHINI DELHI-110085.
                </p>
            </div>
            <div className="footertwo">
                <h2>MENU&nbsp;&nbsp;<i className="fa-light fa-square-list"></i></h2>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/" >HOME</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/product" >PRODUCT</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/contact" >CONTACT</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/about" >ABOUT</Link><br />
            </div>
            <div className="footerthree">
                <h2>ACCOUNT&nbsp;&nbsp;<i className="fa-solid fa-user"></i></h2>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/register" >REGISTER</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/login" >LOGIN</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/addproduct" >ADD PRODUCT</Link><br />
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/product" >NEW ARRIVED</Link><br />
            </div>
        </div>
    )
}

export default Footer;