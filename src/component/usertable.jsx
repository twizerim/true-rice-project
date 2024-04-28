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
    console.log(userdata)
    
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
  <tr>
    <td>Row 1, Col 1</td>
    <td>Row 1, Col 2</td>
    <td>Row 1, Col 3</td>
  </tr>
  <tr>
    <td>Row 2, Col 1</td>
    <td>Row 2, Col 2</td>
    <td>Row 2, Col 3</td>
  </tr>
  <tr>
    <td>Row 3, Col 1</td>
    <td>Row 3, Col 2</td>
    <td>Row 3, Col 3</td>
  </tr>
</table>
      </div>
    </>
  );
}

export default Usertable;
