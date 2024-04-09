import React from "react";
import '../sass/main.scss'
import Navbar from "../component/header";
import Footer from "../component/footer"
import { Link } from 'react-router-dom'
import Button  from "../component/button"
import Contact from "../component/contact";

function Welcome(){
return (
    <>
    <Navbar/>
     <div className="home-container">
        <div className="home">
            <h1>Agriculture investments in Gatsibo district</h1>
            <p>Sign up and get $10,000 in a demo account.
                Improve your trading skills and open the broad spectrum of financial opportunities with Binomo.
            </p>
            <div className="linj">
            <Link to="/membersign" className="linksa"><p className="musi">No registration required</p>
                 <Button name="Try to know meny"/>
            </Link>
            
            </div>
        </div>
     </div>
     <Contact/>
    <Footer/>
    </>
)
}
export default Welcome