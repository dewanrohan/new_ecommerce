import React from "react";
import "./componets-css/Productmain.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Productmain = () => {

    var [product, setproduct] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const results = await fetch("https://productapi-aif0.onrender.com/product");
            const data = await results.json();
            setproduct(data.mydata);
            console.log(data)
        }
        fetchdata()
    }, [])



    return (
        <div>
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
                <div><h3 className="currentpage">Current Page : 1</h3></div>
                <div><Link to="/Page2"><button className="changepagebtn">Next Page&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button></Link></div>
            </div>
        </div >
    )
}

export default Productmain;