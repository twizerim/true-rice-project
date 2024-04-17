import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/header";
import calcu from "../assets/Calculator.webp"
import calend from "../assets/calenda.png"
import trade from "../assets/trading.jpeg"
import minenal from "../assets/minimol.jpeg"
import SwipeableTextMobileStepper from "../component/slider"


export default function Impact(){
    return(
        <>
           <Navbar/>
           <div className="impactmision">
              <SwipeableTextMobileStepper/>
           </div>

             <div className="flowers">
                 <div className="divisio">
                    <h1>818387</h1>
                    <p>Active traders daily</p>
                 </div>
                 <div className="division">
                    <h1>133</h1>
                    <p>Countries of presence</p>
                  </div>
                  <div className="divisi">
                    <h1>818387</h1>
                    <p>Successfuly trads in the past week</p>
                 </div>
             </div>
             <h5>The benefits of the platform</h5>
             <div className="platforms">
                <div className="platfor">
                  <img src={calcu} alt="" />
                   <h2>Minimun account blance from $10</h2>
                   <span>Start making trades with minimum investments.</span>
                </div>
                <div className="platfor">
                  <img src={minenal} alt="" />
                   <h2>Trade amount starting from $1</h2>
                   <span>The minimum cost of a trade is quite low. You won't lose a large amount of funds while you're still learning how to trade.</span>
                </div>
                <div className="platfor">
                  <img src={trade} alt="" />
                   <h2>A unique mode of trading :'None stop'</h2>
                   <span>There are no restrictions on the platform regarding the number of trades that can be concluded simultaneously. You can open several positions at the same time and continue trading.</span>
                </div>
                <div className="platfor">
                  <img src={calend} alt="" />
                   <h2>work also on the weekends</h2>
                   <span>Some quotes sources are available only on working days. We combined various options for your convenience: trade even on weekends choosing the most suitable assets.</span>
                </div>
             </div>


          <Footer/>
        </>
    )
}