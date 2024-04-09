import React,{useEffect,useState} from "react";
import axios from "axios";

function Message(){

    const [userdata, setUserData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
          try {
             const response = await axios.get("http://localhost:3030/groupe/contact-us/get");
             setUserData(response.data);
             
          } catch (error) {
             console.error("Error fetching data:", error);
          }
       };
 
       fetchData(); 
    }, []);

    return (
        <>
           <div className="message-contaner">
           {userdata && userdata.datas && userdata.datas.map((item, index) => (
               <div className="message" key={index}>
                   <h2>{item.sendAt}</h2>
                   <p>{item.fullname}</p>
                   <span>{item.message}</span>
               </div>
               ))}
           </div>
           
        </>
    )

}
export default Message