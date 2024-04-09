import React from "react";
// import Logo from "./logo";


function Footer(){
    return(
        <>
  
      <div className="foote-container">
        <div className="fooerr">
            <div className="parr">
               <h3>Rice Farmers</h3>
                <p>hello everyOne we <span>rwangingo rice farmer</span>
                <br />we are so happy becouse our farmer <br />is passed well 
                we have enough tools<br /> and different amchine used to helps <br />
                us pass well our job.</p>
            </div>
           <div className="prdt">
            
            <ul>
              <h3>product</h3>
                <li>kigori</li>
                <li>biryani</li>
                <li>tiland</li>
                <li>pakstani</li>
            </ul>
           </div>
           <div className="linkss">
            
            <ul>
               <h3>useful links</h3>
               <li>your account</li>
                <li>become an <br />filliate</li>
                <li>shipping late</li>
                <li>help</li>
            </ul>
           </div>

           <div className="footerlink">
         <ul>
         <h3 className="contact">contact</h3> 
         <i className='bx bx-home-alt-2'>&nbsp;<span>kigali</span></i><br />
         <i className='bx bxl-gmail'>&nbsp;<span>info@gmail.com</span></i><br />
         <i className='bx bx-mobile-vibration'>&nbsp;<span>(+250)798080801</span></i><br />
         <i className='bx bx-phone'>&nbsp;<span>(+250)0783531566</span></i>
         </ul>
           </div>
        </div>

        
        <div className="bottom">
          <div className="coppy">
           <h6> &copy; 2023 coppyright rwangingo rice farmer.com</h6>
          </div>
          <div className="cont">
          <i className='bx bxl-facebook'></i>
          <i className='bx bxl-google-plus'></i>
          <i className='bx bxl-linkedin'></i>
          </div>
        </div>
      </div>
        </>
    )
}
export default Footer;