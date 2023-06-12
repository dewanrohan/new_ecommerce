import React from "react";
import "./componets-css/Bannertwo.css";

const Bannertwo = () => {
    return (
        <div className="bannertwo-wrapper">
            <div className="bannertwo-top">
                <h2>
                    WHY TO CHOOSE US.
                </h2>
            </div>
            <div className="bannertwo-bottom">
                <div className="bannertwo-box">
                    <h1><i className="fa-solid fa-truck"></i></h1>
                    <>
                        <h2>FAST DELIVERY</h2>
                        <p>we deliver product<br />on time.</p>
                    </>
                </div>
                <div className="bannertwo-box">
                    <h1><i className="fa-regular fa-shield-check"></i></h1>
                    <>
                        <h2>SECURED DELIVERY</h2>
                        <p>we deliver product<br />secured and safe.</p>
                    </>
                </div>
                <div className="bannertwo-box">
                    <h1><i className="fa-solid fa-badge-check"></i></h1>
                    <>
                        <h2>BEST QUALITY</h2>
                        <p>we deliver product<br />of best quality.</p>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Bannertwo;