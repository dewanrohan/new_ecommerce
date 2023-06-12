import React from "react";
import "../components/componets-css/Product.css";
import Card from "./Card";
import { useEffect, useState } from "react";

//we will fetch the api here and will shao the results here.


const Product = () => {
    var [product, setproduct] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const results = await fetch("https://productapi-aif0.onrender.com/product");
            const data = await results.json();
            setproduct(data.mydata);
        }
        fetchdata()
    }, [])

    return (
        <div className="productwrapper">
            {
                product.map((item) => {
                    return (
                        <>
                            <Card key={item.id} price={item.price} name={item.name} image={item.image} stars={item.stars} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Product;