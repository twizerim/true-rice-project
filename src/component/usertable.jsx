import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import React,{useEffect,useState} from "react";



function Usertable() {
    const [userdata,setUserData]=useState([])

    useEffect(()=>{
        const fetchData= async ()=>{
           try {
            const response = await axios.get("http://localhost:3000/groupe/user/get")
            setUserData(response.data)

           } catch (error) {
            console.log(error)
           }
        };
        fetchData([])
        
    })
    // console.log(userdata)
    
  return (
    <>
      <div className="table-container">
        <div className="navtable">
          <h2>All users visit and use our website</h2>
        </div>
        <div className="defferentperson">
        {userdata && userdata.datas && userdata.datas.map((item, index) => (
                 <div className="oneperson">
                 <div className="li">{index+1}
                   <p>{item.firstname}</p>
                 </div>
                 <div className="changes">
                   <span>{item.role}</span>
                   <EditOutlined className="edit" />
                   <DeleteOutlined className="delete" />
                 </div>
               </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Usertable;
