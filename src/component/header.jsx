import React,{useState} from "react";

import { Link } from 'react-router-dom'
import {AlignRightOutlined} from "@ant-design/icons"
import BrowserUpdatedTwoToneIcon from '@mui/icons-material/BrowserUpdatedTwoTone';
// import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logoimage from "../assets/agri-log.png"
import Login from "./login"



function Navbar(){

    const [isMobile,setIsMobile]= useState(false);
    const [form , setForm]=useState(false)
    const [hidform , setHideform] =useState(false)
    const [showform , setshowform] =useState(true)

    const Handleshowform = () =>{
        setForm(true)
        setHideform(true)
        setshowform(false)
    }
    const Handlehideform = () =>{
        setForm(false)
        setHideform(false)
        setshowform(true)
    }



    return(
        <>
           <div className="nav-container">
                 <div className="logo">
                   <AlignRightOutlined className="icon" onClick = {()=>setIsMobile(!isMobile)}/>
                   <img src={logoimage} alt="" />
                 </div>
                 <div className="regist">
                 {hidform && (<CloseOutlinedIcon className="closelogin" onClick={Handlehideform}/>)}
                 {showform && ( <button onClick={Handleshowform}><BrowserUpdatedTwoToneIcon/>Sigin Up</button>)}  
                 </div>
           </div>
           <ul className={isMobile?"openNav":"links"} onClick={()=>setIsMobile(true)}>
                    <Link to="/" className="link">Wellcome</Link>
                    <Link to="/about" className="link">About-us</Link>
                    <Link to="/product" className="link">Product</Link>
                    <Link to="/impact" className="link">Impact</Link>
                    <Link to="#" className="linklogin" onClick={Handleshowform}>Login</Link>
            </ul>
            {form && (
                <div className="login-sginup">
                <div className="chosehead">
                    <p>Sign up</p> <span>Login</span>
                </div>
               <Login/>
            </div>
            )}
            
        </>

    )

}
export default Navbar