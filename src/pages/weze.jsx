import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
export default function Weze(){
    return(
        <>
        <Navbar/>
        <div className="weze-cont">
            <h1 className="wezee">
                our rice is rised
            </h1>
            <p className="wea">Certainly! Here's a paragraph describing the completion of the rice planting process:

"With the meticulous completion of the rice planting process,
 farmers enter a crucial phase in the agricultural calendar marked by anticipation 
 and careful nurturing. Having sown the selected high-quality seeds in well-prepared fields, 
 the newly planted rice paddies are now poised for growth. The carefully spaced seedlings, 
 whether transplanted or direct-seeded, represent the promise of a future harvest. 
 Adequate irrigation and fertilization strategies are implemented to provide the essential 
 nutrients required for robust development. Weed control measures are diligently applied to
  minimize competition for resources, ensuring the rice plants have the optimal conditions to flourish.
   As the rice paddies transform into lush green landscapes, farmers vigilantly monitor the fields,
    addressing any emerging challenges. The successful completion of the rice planting phase sets the stage 
    for a season of attentive care and cultivation, with the hope of a bountiful harvest in the months to come."
</p>
        </div>
        <Footer/>
        </>
    )
}