import React from "react";
import { Link } from "react-router-dom";
import "./componets-css/Midsection.css";

const Midsection = () => {
    return (
        <div className="midsectionwrapper">
            <div className="blockone">
                <b style={{ "fontSize": "2rem", "textDecoration": "underline", "marginTop": "1rem" }} >SHOES</b>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productnike">NIKE</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productpuma">PUMA</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productadidas">ADIDAS</Link>
            </div>
            <div className="blocktwo">
                <b style={{ "fontSize": "2rem", "textDecoration": "underline", "marginTop": "1rem" }}>MOBILE</b>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productiphone">IPHONE</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productsamsung">SAMSUNG</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productoneplus">ONEPLUS</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productrealme">REALME</Link>
            </div>
            <div className="blockthree">
                <b style={{ "fontSize": "2rem", "textDecoration": "underline", "marginTop": "1rem" }}>OTHERS</b>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/producthp">HP</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productiqoo">IQOO</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productacer">ACER</Link>
                <Link style={{ "color": "white", "textDecoration": "none" }} to="/productboat">BOAT</Link>
            </div>
        </div>
    )
}

export default Midsection;