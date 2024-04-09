import React, { useState, useEffect } from "react";
import axios from "axios";

function Cards() {
   const [userdata, setUserData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get("http://localhost:3030/groupe/product/get");
            setUserData(response.data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData(); 
   }, []); 

  //  console.log(userdata); // You can log the userdata here if needed

   return (
      <>
         {/* Check if userdata.datas exists before mapping */}
         {userdata && userdata.datas && userdata.datas.map((item, index) => (
            <div key={index} className="card">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <h1>{item.productname}</h1>
              <div className="description">
              <p>{item.descliption}<span>{item.price}</span>Rwf</p>
              <a href="">Buy now...</a>
              </div>
            </div>
         ))}
      </>
   );
}

export default Cards;
