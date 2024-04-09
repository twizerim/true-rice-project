import Header from "../component/header"
import Footer from "../component/footer"
import umuceri from "../assets/image/happy.png"

export default function About(){

    return (
        <>
         <>
        <Header/>
       <div className="cont-more">
        <div className="pr-cont">
        <h5>WELCOME PAGES ON MORE INFORMATION ON RWANGINGO RICE FARME</h5>
        <p className="desc">Welcome to our community of passionate rice farmers who are dedicated <br /> 
        to cultivating the finest grains that nourish communities around the world. Rooted in the rich <br /> 
        traditions of agriculture, we take pride in the art and science of rice cultivation. <br /> <br />
         Our journey began with a deep-seated love for the land and a commitment to sustainable farming practices. <br /> <br />

     At the heart of our endeavor is a shared belief in the significance of rice — not merely as a staple in diets <br />
 but as a symbol of cultural heritage and resilience. <br /><br />
  Our farmers, with generations of wisdom passed down, work tirelessly to ensure that each grain tells <br />
   a story of hard work, dedication, and a harmonious relationship with nature. <br /><br />

   <div className="image">
       <img src={umuceri} alt="irahari" />
   </div>

We embrace innovation while staying true to time-honored methods, blending modern agricultural techniques <br />
 with age-old wisdom. Through every season, we navigate the fields with care, respecting the delicate balance <br />
  between nature's rhythm and our agricultural pursuits. <br /><br />

Our commitment extends beyond the paddies; it encompasses the well-being of the communities we serve. <br />
 We strive to create a sustainable and inclusive ecosystem where farmers thrive, <br />
  and the fruits of our labor contribute to the vitality of local economies. <br /><br />

Join us on this journey as we celebrate the humble yet powerful rice grain, <br />
 sown with passion, harvested with pride, and shared with the world. Together, <br />
  we sow the seeds of a sustainable future. <br /> <br />

Feel free to customize this paragraph based on the specific details, values, and goals of your rice farming community.






</p>
        </div>
        
       </div>
       <Footer/>
        </>
        </>
    )

}