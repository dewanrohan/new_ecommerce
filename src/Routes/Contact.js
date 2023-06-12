import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import "../components/componets-css/Contactstyle.css"
import { useAuth0 } from "@auth0/auth0-react";
import "../components/componets-css/cartroute.css";



const Contact = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            <Navbar />
            {
                isAuthenticated
                    ?
                    <div className="mainwrappercontact">
                        <div className="containerheading">
                            <h1 className="heading">Contact Us</h1>
                        </div>
                        <div className="mapcontainer">
                            <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.05314710614!2d76.8130377447067!3d28.643795372162113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1673940450739!5m2!1sen!2sin" loading="lazy" ></iframe>
                        </div>
                        <div className="formarea">
                            <form method="POST" action="https://formspree.io/f/mdovklpr" className="form">
                                <div> <input className="username" type="text" placeholder="Enter Username" name="username" required autoComplete="off" /></div>
                                <div><input className="email" type="email" placeholder="Enter Your Email" name="email" required autoComplete="off" /></div>
                                <div><textarea className="message" placeholder="Enter your message here....." cols="30" rows="5" required autoComplete="off" name="message" /></div>
                                <div><input className="submit" type="submit" value="Send" /></div>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="info">
                        <div className="mid-section">
                            <div className="mid1">
                                <p>
                                    You have not authenticated.<br />
                                    Click on log in button in navbar<br />
                                    and then enter the user name and password.
                                </p>
                                <button className="btn-login" onClick={() => loginWithRedirect()}>LOG IN</button>
                            </div>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    )
}

export default Contact; 