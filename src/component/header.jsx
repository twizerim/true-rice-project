import React,{useState} from "react";

import { Link } from 'react-router-dom'
import {CloseOutlined} from "@ant-design/icons"

import MenuIcon from '@mui/icons-material/Menu';



function Navbar(){

    const[isMobile,setIsMobile]= useState(false);
     const Closenav = () =>{
        alert("birakunda")
        setIsMobile(false)
     }
    return(
        <>
           <div className="nav-container">
                 <div className="logo">
                   <h1>R R Farmer</h1>
                 </div>
                <ul className={isMobile?"openNav":"links"} onClick={()=>setIsMobile(true)}>
                    <div className="logo">
                        <div className="closeresp">
                        <CloseOutlined onClick={Closenav}/>
                        </div>
                       <h1>R R Farmer</h1>
                    </div>
                    <Link to="/" className="link">Wellcome</Link>
                    <Link to="/about" className="link">About-us</Link>
                    <Link to="/product" className="link">Product</Link>
                    <Link to="/#" className="link">Impact</Link>
                    <Link to="/contact" className="link">Contact-us</Link>
                    <Link to="/login" className="linklogin" id="btn">Login</Link>
                    <div className="menu-icon">
                        <MenuIcon className="icon" onClick = {()=>setIsMobile(!isMobile)}/>
                    </div>
                </ul>
           </div>
        </>

    )

}
export default Navbar