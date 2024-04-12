import React,{useState} from "react";
import tuiter from "../assets/image/twiter.png"
import watap from "../assets/image/whatapp.png"
import email from "../assets/image/email.png"
import facebook from "../assets/image/facebooob.png"
import axios from "axios"



export default function Contact(){
    const [formData,setformData]=useState({firstname:"",email:"",phone:"",message:""})

    const HandleInputcontact = (e) =>{
        setformData({
           ...formData,[e.target.name]:e.target.value
        })
    }
    
    const Handlecontact = async (e) =>{
        e.preventDefault();


        try {
        const api = "http://localhost:3000/groupe/contact-us";
         const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(response.data.message)
            
        } catch (error) {
            console.log(error)
        }
    }
    return(

        <>
           <div className="conatct-container"> 
                     <h2 className="hello">We're here to help.Feel free to get in touch with us.</h2>
                <div className="fom-conto">
                    <div className="par">
                      <p>We value your questions, feedback, and inquiries</p>
                       <h3>Lets Talk.</h3>  
                        <p>Please fill in the details and we will be in touch shortly or send us email or call us</p>
                        <div className="lines">
                             <p>Gatsibo.agri@rwa.com</p>
                             <span>+250783801966</span>
                         </div>          
                    </div>
                    <form action="" onSubmit={Handlecontact}>
                        <h1>Complete The Form Below...</h1>
                        <div className="field">
                            <label htmlFor="firstname">
                                <input type="text" name="firstname" onChange={HandleInputcontact} value={formData.firstname} placeholder="Type your first name"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="email">
                                <input type="email" name="email" onChange={HandleInputcontact} value={formData.email} placeholder="Type your email"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="phone">
                                <input type="text" name="phone" onChange={HandleInputcontact} value={formData.phone} placeholder="Type your phone number"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="message">
                                <textarea name="message" id="" onChange={HandleInputcontact} value={formData.message} cols="" rows="2.5" placeholder="Type your message"></textarea>
                            </label>
                        </div>
                        <div className="button">
                            <button type="submit"><i>Send message</i></button>
                        </div>
                    </form>

                </div>
           </div>
        </>

    )
}