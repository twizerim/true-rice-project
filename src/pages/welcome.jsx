import React from "react";
import '../sass/main.scss'
import Navbar from "../component/header";
import Footer from "../component/footer"
import { Link } from 'react-router-dom'
import Button  from "../component/button"
import Contact from "../component/contact";
import agence from "../assets/agence.png"
import awards from "../assets/awards.webp"
import harvesty from "../assets/HARVEST.webp"
import images from "../assets/images.png"

function Welcome(){
return (
    <>
    <Navbar/>
     <div className="home-container">
        <div className="home">
            <h1>Agriculture productions in Gatsibo district</h1>
            <p>Sign up and get any account in oder to purchase or supply production.
                Improve your trading production from farming and get opportunities of buying or selling in easly way.
            </p>
            <div className="linj">
            <Link to="/membersign" className="linksa"><p className="musi">No registration required</p>
                 <Button name="Try to know meny"/>
            </Link>
            
            </div>
        </div>
        <div className="awards">
            <div className="award-flex">
                <img src={awards} alt="" />
                 <h3>IAIR Awards</h3>
            </div>
            <div className="award-flex">
                <img src={harvesty} alt="" />
                <h3>FE Awards</h3>
            </div>
            <div className="award-flex">
                <img src={agence} alt="" />
                <h3>Financial Commision</h3>
            </div>
            <div className="award-flex">
                <img src={images} alt="" />
                <h3>Quotes from leanding agences</h3>
            </div>
        </div>
     </div>
     <Contact/>
    <Footer/>
    </>
)
}
export default Welcome