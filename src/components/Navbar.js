import React from "react";
import "./componets-css/Navbar.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {

    var items = useSelector((state) => state.cart);

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    var cross = "fa-solid fa-xmark";
    var bars = "fa-solid fa-bars";
    var [status, setstatus] = useState(true);
    var shownavbar = "show-navbar";
    var hidenavbar = "hide-navbar";

    const changeclass = () => {
        console.log("click");
        if (status === true) {
            setstatus(!status);
        }
        else if (status === false) {
            setstatus(!status);
        }
    }

    return (
        <div className="navbar-wrapper">
            <div className="left-navbar-wrapper">
                <div><i class="fa-sharp fa-solid fa-house"></i>&nbsp;&nbsp;<b>Shoppers</b></div>
                <div className="change" onClick={changeclass}>
                    <i className={status ? cross : bars}></i>
                </div>
            </div>
            <div className={status ? "right-navbar-wrapper " + shownavbar : hidenavbar}>
                <div className="navbar-box"><Link style={{ "color": "white", "textDecoration": "none" }} to="/" >HOME</Link><br /></div>
                <div className="navbar-box"><Link style={{ "color": "white", "textDecoration": "none" }} to="/product" >PRODUCTS</Link><br /></div>
                <div className="navbar-box"><Link style={{ "color": "white", "textDecoration": "none" }} to="/contact" >CONTACT</Link><br /></div>

                {
                    isAuthenticated ?
                        <button className="btn-login" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            LOG OUT
                        </button>
                        :
                        <button className="btn-login" onClick={() => loginWithRedirect()}>LOG IN</button>
                }
                <div className="navbar-box"><Link style={{ "color": "white", "textDecoration": "none" }} to="/cart" ><i class="fa-solid fa-cart-shopping"></i>:{items.length}</Link><br /></div>
            </div>
        </div>
    )
}

export default Navbar;