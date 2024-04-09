import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import kuvu from "../assets/image/kuvuruga.png";
// import gut from "../assets/image/gutera.png";
import gute from "../assets/image/guter.png";
import guto from "../assets/image/gutongora.png"
import wez from "../assets/image/weze.png"
import fuka from "../assets/image/mumu.png"
export default function Impact(){
    return(
        <>
        <Header/>
        <div className="impact">
        <div className="coner">
        <h1 className="imp">RWANGINGO RICE FARMER IMPACT PAGES</h1>
        </div>
        <div className="expliner">
       <div className="sliderr">
        <img src={kuvu} alt="" />
        <p className="guhinga">
It seems like your question
 is a bit unclear. 
 If you're asking about
  the proper steps for 
  preparing rice seeds for 
  cultivation, I can provide
  a general overview: </p>
        <a href="/kuvuruga" className="kuvu">ReadMore</a>
       </div>

       <div className="sliderr">
        <img src={gute} alt="" />
        <p className="guhinga">

        Certainly! If you're looking for guidance on the first step in planting rice,
         it typically begins with the selection of high-quality seeds.
          Here's a paragraph covering the initial step:</p>
        <a href="/gutera" className="kuvu">ReadMore</a>
       </div>
       
          <div className="sliderr">
        <img src={guto} alt="" />
     <p className="guhinga">

     Certainly! Here's a paragraph that discusses the process of 
     removing unwanted grass in rice cultivation:</p>
        <a href="/kubagara" className="kuvu">ReadMore</a>
       </div>

        </div>

    

        <div className="expl">

       <div className="sliderr">
        <img src={wez} alt="" />
        <p className="guhinga">

        Certainly! Here's a paragraph describing <br />
         the completion of the rice planting process:</p>
      
        <a href="/weze" className="kuvu">ReadMore</a>
       </div>

       <div className="sliderr">
        <img src="" alt="" />
        <p className="guhinga">
        Certainly! Here's a paragraph describing <br /> the process of drying rice:</p>
        <a href="/kwanika" className="kuvu">ReadMore</a>
       </div>

  <div className="sliderr">
        <img src={fuka} alt="" />
        <p className="guhinga">

        Certainly! Here's a paragraph describing <br /> the packaging process of rice:</p>
        <a href="/kubika" className="kuvu">ReadMore</a>
       </div>

        </div>
        </div>
        <Footer/>
        </>
    )
}