import React from "react";
import "../components/componets-css/Cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeitem } from "../Store/CartSlice";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../components/componets-css/cartroute.css";


var amount = 0;


const Cart = () => {

    const dispatch = useDispatch();
    const handleremove = (product) => {
        dispatch(removeitem(product));
    }


    const Products = useSelector(state => state.cart);


    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            <Navbar />
            {
                isAuthenticated
                    ?
                    <div>
                        <div className="cartwrapper">
                            <div className="cartboxone">
                                {
                                    Products.map((item) => {
                                        return (
                                            <div key={item.id} className="block">
                                                <div className="image"><img src={item.image} alt="loading" className="selectedimage" /></div>
                                                <div className="name"><h3>{item.name}</h3></div>
                                                <div className="price">{item.price}</div>
                                                <div className="delete"><button className="removebutton" onClick={() => handleremove(item)} >REMOVE</button></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="bottombox">
                            {
                                Products.map((item) => { amount = amount + item.price })
                            }
                            <p>
                                TOTAL ITEMS :: {Products.length}<br />
                                AMOUNT :: {amount}/- &#8377;<br />
                                GST :: {amount * (18 / 100)}/- &#8377;<br />
                                TOTAL PAYABLE :: {amount + (amount * (18 / 100))}/- &#8377;<br />
                                <button className="orderbtn"><Link to="/placeorder" style={{ "color": "white", "textDecoration": "none" }}>PLACE ORDER</Link></button>
                            </p>
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

export default Cart;

