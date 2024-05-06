import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import React,{useEffect,useState} from "react";



function Usertable() {
    const [userdata,setUserData]=useState([])

    useEffect(()=>{
        const fetchData= async ()=>{
           try {
            const response = await axios.get("http://localhost:3030/api/v1/user/get")
            setUserData(response.data)
            

           } catch (error) {
            console.log(error)
           }
        };
        fetchData([])
        
    }) 
  return (
    <>
      <div className="table-container">
        <div className="navtable">
          <h2>All users visit and use our website</h2>
        </div>
        <table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  {userdata && userdata.data && userdata.data.map((user)=>(
<tr key={user._id}>
<td>{user.firstname} {user.lastname}</td>
<td>{user.email}</td>
<td>{user.role}</td>
</tr>

  ))}
  
</table>
      </div>
    </>
  );
}

export default Usertable;
