import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/header";


export default function Impact(){
    return(
        <>
           <Navbar/>

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


          <Footer/>
        </>
    )
}