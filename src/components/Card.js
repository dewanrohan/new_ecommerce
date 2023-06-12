import React from "react";
import "./componets-css/cardproduct.css";
import { useDispatch } from "react-redux";
import { additem } from "../Store/CartSlice";


const Card = (props) => {


    const dispatch = useDispatch();
    const handleadd = (product) => {
        dispatch(additem(product))
    }


    return (
        <div className="cardwarpper">
            <div className="card-image">
                <img src={props.image} alt="loading" />
            </div>
            <div className="card-name">
                <h2>{props.name}</h2>
            </div>
            <div className="card-price">
                <h3>price: {props.price}</h3>
            </div>
            <div className="card-rating">
                <h3>stars: {props.stars}</h3>
            </div>
            <button className="button" onClick={() => { handleadd(props) }} >ADD TO CART</button>
        </div>
    )
}


export default Card;