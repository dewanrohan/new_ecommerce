import React from "react";
import "../components/componets-css/Pagetwo.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Pagetwo = () => {

    var [product, setproduct] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const results = await fetch("https://productapi-aif0.onrender.com/product?page=2");
            const data = await results.json();
            setproduct(data.mydata);
            console.log("THIS IS DATA.");
            console.log(data);
        }
        fetchdata()
    }, [])


    return (
        <div>
            <Navbar />
            <div className="productmainwrapper">
                {
                    product.map((item) => {
                        return (
                            <Card key={item.id} image={item.image} name={item.name} price={item.price} stars={item.stars} info={item.info} />
                        )
                    })
                }
                <br />
            </div>
            <div className="nextpagebutton">
                <div><Link to="/Product"><button className="changepagebtn"><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Previous Page</button></Link></div>
                <div><h3 className="currentpage">Current Page : 2</h3></div>
                <div><Link to="/Page3"><button className="changepagebtn">Next Page&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button></Link></div>
            </div>
            <Footer />
        </div >
    )
}

export default Pagetwo;