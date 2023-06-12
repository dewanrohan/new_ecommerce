import React from "react";
import "../components/componets-css/Page404.css";
import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="errorpagemid">
            <h2>ERROR 404. YOU ARE ON WRONG ROUTE.</h2>
            <p><Link to="/">CLICK HERE TO GO BACK TO HOME PAGE</Link></p>
        </div>
    )
}

export default Page404;