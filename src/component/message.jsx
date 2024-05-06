import React,{useEffect,useState} from "react";
import axios from "axios";

function Message(){

    const [contactdata, setContactData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
          try {
             const response = await axios.get("http://localhost:3030/api/v1/contact/get");
             setContactData(response.data);
          } catch (error) {
             console.error("Error fetching data:", error);
          }
       };
 
       fetchData(); 
    }, []);
    console.log(contactdata)

    return (
        <>
         <div className="message-contaner">

            {contactdata && contactdata.data && contactdata.data.map(items =>(

<div className="message" >
<h2>{items.sendAt}</h2>
<p>{items.fullname}</p>
<span>
 {items.message}  
</span>
</div>      

            ))}
               
   </div>
           
        </>
    )

}
export default Message