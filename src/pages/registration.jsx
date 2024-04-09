import Headr from "../component/header"
import Button from "../component/button"
import { Link } from 'react-router-dom'
import Footer from "../component/footer"
import React,{useState} from "react"
import axios from "axios"


export default function Registration(){

    const [formData,setformData]=useState({firstname:"",lastname:"",email:"",district:"",phonenumber:"",password:""
    ,sector:"",sell:"",village:"",idPhotocopy:"",landReport:"",letter:"",picture:"",confrimpawword:""})

    const HandleInputcontact = (e) =>{
        setformData({
           ...formData,[e.target.name]:e.target.value
        })
    }
    console.log(formData)
    const Handlecontact = async (e) =>{
        e.preventDefault();
  
  
        try {
        const api = "http://localhost:3000/groupe/farmer/post";
         const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(response.data.message)
      console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
  

     return (
        <>
          <Headr/>
           <div className="contaier">
                 <div className="separate">
                    <p>Regist here</p><h1>Or</h1> <Link to="/membersign" className="linksa"><Button name="Sign In"/></Link>
                 </div>
                <form action="" className="signup" onSubmit={Handlecontact}>
                <div className="flex">
                    <div className="division1">
                    <div className="groupe">
                   <label htmlFor="firstname">First name:
                       <input type="text" name="firstname" onChange={HandleInputcontact} value={formData.firstname}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="lastname">Last name:
                       <input type="text" name="lastname" onChange={HandleInputcontact} value={formData.lastname}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="email">Email:
                       <input type="text" name="email" onChange={HandleInputcontact} value={formData.email}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="phonenumber">Phone number:
                       <input type="text" name="phonenumber" onChange={HandleInputcontact} value={formData.phonenumber}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="district">District:
                       <input type="text" name="district" onChange={HandleInputcontact} value={formData.district}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="sector">Secter:
                       <input type="text" name="sector" onChange={HandleInputcontact} value={formData.sector}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="sell">Sell:
                       <input type="text" name="sell" onChange={HandleInputcontact} value={formData.sell}/>
                   </label>
                   
               </div>
                    </div>
                    <div className="division2">
                    <div className="groupe">
                    <label htmlFor="village">Village:
                       <input type="text" name="village" onChange={HandleInputcontact} value={formData.village}/>
                       </label>
               </div>
                    <div className="groupe">
                   <label htmlFor="picture">Image:
                       <input type="file" name="picture" onChange={HandleInputcontact} value={formData.picture}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="idPhotocopy">ID photocopy:
                       <input type="file" name="idPhotocopy" onChange={HandleInputcontact} value={formData.idPhotocopy}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="landReport">Land report:
                       <input type="file" name="landReport" onChange={HandleInputcontact} value={formData.landReport}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="letter">Request letter:
                       <input type="file" name="letter" onChange={HandleInputcontact} value={formData.letter}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="password">Password:
                       <input type="password" name="password" onChange={HandleInputcontact} value={formData.password}/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="confrimpawword">Confrim password:
                       <input type="password" name="confrimpawword" onChange={HandleInputcontact} value={formData.confrimpawword}/>
                   </label>
               </div>
               <Button name="Submit your self information"/>
                    </div>
                </div>
             </form>
             
           </div>
           <Footer/>
        </>
     )
}