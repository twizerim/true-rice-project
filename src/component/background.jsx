import React from "react"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';

function Background(){

    return(
        <div className="containerback">
            <div className="imageback">
                <h1>Simple and Convenients</h1>
            </div>

           <div className="definition">
                <div className="first">
                <div className="logoimage"><SchoolIcon /></div>
                    <h1>Agri account</h1>
                    <p>You can always improve your trading or buying production on angri account. when  you're  ready, switch to your real account</p>
                </div>
                <div className="first">
                <div className="logoimag"><SpatialTrackingIcon /></div>
                    <h1>Online support</h1>
                    <p>You can send message any time via chat and get feesdback right away!</p>
                </div>
                <div className="first">
                <div className="logoima"><MenuBookIcon /></div>
                    <h1>Free training</h1>
                    <p>Byn studing the technical production in agriculture you will be able to improve ability of supplying more quantity  </p>
               </div>
           </div>

        </div>
    )

}
export default Background