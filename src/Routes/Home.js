import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Bannertwo from "../components/Bannertwo";
import Bannerthree from "../components/Bannerthree";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Bannertwo />
            <Bannerthree />
            <Footer />
        </div>
    )
}

export default Home;