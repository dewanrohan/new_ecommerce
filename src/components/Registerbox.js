import React from "react";
import { Link } from "react-router-dom"
import "./componets-css/Registerbox.css"

const Registerox = () => {
    return (
        <div className="registerboxwrapper">
            <div className="box">
                <form>
                    <br /><br />
                    <label className="outerfield">
                        Name:
                        <input className="field" type="text" name="firstname" placeholder="Enter Your First Name" />
                    </label>
                    <br /><br />
                    <label className="outerfield">
                        Surame:
                        <input className="field" type="text" name="lastname" placeholder="Enter Your Last Name" />
                    </label>
                    <br /><br />
                    <label className="outerfield">
                        Mobile No.:
                        <input className="field" type="number" name="mobilenumber" placeholder="Enter Your Mobile Number" />
                    </label>
                    <br /><br />
                    <label className="outerfield">
                        Email-id:
                        <input className="field" type="email" name="emailid" placeholder="Enter Your Email-id" />
                    </label>
                </form>
                <br /><br />
                <br /><br />
                <button className="btn">
                    <b>REGISTER NOW</b>
                </button>
                <br /><br />
                <br /><br />
                <div className="alreadyuser">
                    <Link style={{ "color": "#D2042D", "textDecoration": "none" }} to="/login">If you are already a user then click here.</Link>
                </div>
            </div>
        </div>
    )
}

export default Registerox;

