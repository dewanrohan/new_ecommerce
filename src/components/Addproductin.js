import React from "react";
import "./componets-css/Addproductin.css";
import { useState } from "react";

const Addproductin = () => {

    const [prodname, setprodname] = useState("");
    const [prodpice, setprodprice] = useState("");
    const [imgurl, setimgurl] = useState("");
    const [prodinfo, setprodinfo] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [cateogory, setcateogory] = useState("");

    const addourproduct = () => {

        let result = { prodname, prodpice, imgurl, prodinfo, companyname, cateogory }
        console.log(result);
        /*
        fetch("https://ecommapi-production-844c.up.railway.app/addproduct", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        }).then((res) => {
            console.log(res);
        })*/
    }

    return (
        <div className="addproductwrapper">
            <div className="registerbox">
                <div className="middlebox">
                    <form>
                        <br /><br />
                        <label className="outerfield">
                            Product Name:
                            <input className="field" type="text" name="firstname" placeholder="Enter Name Of Product"
                                onChange={(e) => { setprodname(e.target.value) }} />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Price:
                            <input className="field" type="text" name="price" placeholder="Enter Price Of Product"
                                onChange={(e) => { setprodprice(e.target.value) }} />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Image  URL:<br />
                            <textarea className="textarea" name="imageurl" placeholder="Enter your Image Url Here."
                                onChange={(e) => { setimgurl(e.target.value) }} />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Info:<br />
                            <textarea className="textarea" name="productinfo" placeholder="Enter Product Info Here."
                                onChange={(e) => { setprodinfo(e.target.value) }} />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Comapany:
                            <input className="field" type="text" name="companyname" placeholder="Enter Comapany Of Product"
                                onChange={(e) => { setcompanyname(e.target.value) }} />
                        </label>
                        <br /><br />
                        <label className="outerfield">
                            Product Cateogory:
                            <input className="field" type="text" name="cateogory" placeholder="Enter Product Cateogory"
                                onChange={(e) => { setcateogory(e.target.value) }} />
                        </label>
                        <br /><br />
                        <br /><br />
                        <br /><br />
                        <button className="addbtn" type="button" onClick={() => { addourproduct() }}>
                            <b>ADD PRODUCT</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproductin;