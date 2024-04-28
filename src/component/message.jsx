import React,{useEffect,useState} from "react";
import axios from "axios";

function Message(){

    const [userdata, setUserData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
          try {
             const response = await axios.get("http://localhost:3030/api/v1/contact/get");
             setUserData(response.data);
             alert(response.data.message)
          } catch (error) {
             console.error("Error fetching data:", error);
          }
       };
 
       fetchData(); 
    }, []);
    console.log(userdata)

    return (
        <>
           {/* <div className="message-contaner">
           {userdata && userdata.datas && userdata.datas.map((item, index) => (
               <div className="message" key={index}>
                   <h2>{item.sendAt}</h2>
                   <p>{item.fullname}</p>
                   <span>{item.message}</span>
               </div>
               ))}
           </div> */}

         <div className="message-contaner">
               <div className="message" >
                   <h2>names</h2>
                   <p>data</p>
                   <span>
                   In your React Native code snippet, you're attempting to handle user login using the Appwrite SDK. However, 
                   you're encountering an error where a session already exists for the user. This is indicated by the 
                   user_session_already_exists error type in the AppwriteException.  
                </span>
               </div>
               <div className="message" >
                   <h2>names</h2>
                   <p>data</p>
                   <span>
                   In your React Native code snippet, you're attempting to handle user login using the Appwrite SDK. However, 
                   you're encountering an error where a session already exists for the user. This is indicated by the 
                   user_session_already_exists error type in the AppwriteException.  
                </span>
               </div>
               <div className="message" >
                   <h2>names</h2>
                   <p>data</p>
                   <span>
                   In your React Native code snippet, you're attempting to handle user login using the Appwrite SDK. However, 
                   you're encountering an error where a session already exists for the user. This is indicated by the 
                   user_session_already_exists error type in the AppwriteException.  
                </span>
               </div>
           </div>
           
        </>
    )

}
export default Message