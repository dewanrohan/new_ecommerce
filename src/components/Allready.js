import React from "react";
import "./componets-css/Allready.css";
import { Link } from "react-router-dom"

const Allready = () => {
    return (
        <div className="allreadywrapper">
            <div className="allreadybox">
                <br /><br />
                <label className="outerfield">
                    Email-id:
                    <input className="field" type="text" name="emailid" placeholder="Enter Your Email Id" />
                </label>
                <br /><br />
                <label className="outerfield">
                    Password:
                    <input className="field" type="text" name="emailid" placeholder="Enter Your Password" />
                </label>
                <br /><br />
                <br /><br />
                <button className="btn">
                    <b>LOGIN NOW</b>
                </button>
                <br /><br />
                <br /><br />
                <div className="alreadyuser" type="submit">
                    <Link style={{ "color": "#D2042D", "textDecoration": "none" }} to="/register">If you want to <br />REGISTER then click here.</Link>
                </div>
            </div>
        </div>
    )
}

export default Allready;