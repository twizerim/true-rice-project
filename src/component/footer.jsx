import React from "react";
import logoimage from "../assets/agri-log.png"
import { Link } from 'react-router-dom'
import BungalowIcon from '@mui/icons-material/Bungalow';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(){
    return(
        <>
  
      <div className="foote-container">
        <div className="topfooter">
           <div className="logfooter">
               <img src={logoimage} alt="" />
           </div>
           <div className="somelink">
              <h2>USEFUL LINKS</h2>
              <Link to="/" className="linkbotom">Wellcome</Link>
              <Link to="/about" className="linkbotom">About-us</Link>
              <Link to="/product" className="linkbotom">Product</Link>
              <Link to="/impact" className="linkbotom">Impact</Link>
           </div>
           <div className="contact">
            <h2>CONTACT</h2>
            <p><BungalowIcon/>  Kabarore</p>
            <p><MarkEmailUnreadIcon/>Gatsibo.agri@rwa.com</p>
            <p><EdgesensorHighIcon/>  (+250)783801966</p>
           </div>
        </div>
        <div className="footbotom">
           <h1>&copy; 2024 Coppyright Agriculture in Gatsibo.com</h1>
           <div className="icons">
             <MailOutlineIcon/>
             <FacebookIcon/>
           </div>
        </div>
      </div>
        </>
    )
}
export default Footer;