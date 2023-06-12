import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Productmain from "../components/Productmain";
import { useAuth0 } from "@auth0/auth0-react";
import "../components/componets-css/productroute.css";

const Product = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            {
                isAuthenticated
                    ?
                    <div>
                        < Navbar />
                        <Productmain />
                        <Footer />
                    </div >
                    :
                    <div>
                        < Navbar />
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
                        <Footer />
                    </div>
            }
        </div>
    )
}

export default Product;