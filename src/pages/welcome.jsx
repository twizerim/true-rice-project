import React from "react";
import '../sass/main.scss'
import Navbar from "../component/header";
import Footer from "../component/footer"
import igiseke from "../assets/382px-Igiseke.jpg"
import { Link } from 'react-router-dom'
import Button  from "../component/button"

function Welcome(){
return (
    <>
    <Navbar/>
     <div className="home-container">

        <div className="third-division">
            <div className="second-division">
                <div className="first-division">
                    <img src={igiseke} alt="agaseke" />
                </div>
            </div>
        </div>

        <div className="home">
            <h1>RWANGINGO RICE FARMERS</h1>
            <p>Hello every one, we are farmer from Rwangingo swamp and we produce rice production.If you want to join us,
                to buy rice or to purdhase it wellcom
            </p>
            <div className="linj">
            <Link to="/membersign" className="linksa">If you want to join us passs here!!!
                 <Button name="Join"/>
            </Link>
            </div>
        </div>
     </div>
    <Footer/>
    </>
)
}
export default Welcome