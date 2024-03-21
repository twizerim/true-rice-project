import React from "react";
// import logo from "../assets/image/logo.png";
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
function Navbar(){
    return(
        <>
           <div className="nav-container">
                 <div className="logo">
                    <h1>R R Farmer</h1>
                 </div>
                <ul className="links">
                    <Link to="/" className="link">Wellcome</Link>
                    <Link to="/about" className="link">About-us</Link>
                    <Link to="/" className="link">Product</Link>
                    <div className="dropdown">
                    <Link to="/#" className="downs">Impact</Link>
                         <div className="subdropdown">
                         <Link to="/" className="linkdown">For member</Link>
                         <Link to="/" className="linkdown">For societies</Link>
                         <Link to="/" className="linkdown">For government</Link>
                         </div>
                    </div>
                    <Link to="/contact" className="link">Contact-us</Link>
                    <Link to="/login" className="link" id="btn">Login</Link>
                    <div className="menu-icon">
                        <MenuIcon className="icon"/>
                    </div>
                </ul>
           </div>
        </>

    )

}
export default Navbar