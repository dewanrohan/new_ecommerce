import React from "react";
import "./componets-css/Bannerthree.css";
import { Link } from "react-router-dom"
const poinitingimage = require("../images/pointing.png")

const Bannerthree = () => {
    return (
        <div className="bannerthree-wrapper">
            <div className="bannerthree-wrapper-left">
                <span className="bannerthree-text">
                    <h1>#NEW ARRIVALS!!</h1>
                    <h3>HURRY UP AND ENJOY THE SALE!!!!</h3>
                    <h5>Click the below button <br />
                        to vail the the new xciting offers <br />
                        and don't miss the oppoutunity</h5>
                    <Link to="/product">
                        <button className="bannerthree-button" to="/Product">
                            Shop Now
                        </button>
                    </Link>
                </span>
            </div>
            <div className="bannerthree-wrapper-right">
                <img src={poinitingimage} alt="loading." />
            </div>
        </div>
    )
}

export default Bannerthree;