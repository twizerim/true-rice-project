import React,{useState} from "react";
import Footer from "../component/footer";
import Header from "../component/header"
import tuiter from "../assets/image/twiter.png"
import watap from "../assets/image/whatapp.png"
import email from "../assets/image/email.png"
import facebook from "../assets/image/facebooob.png"
import axios from "axios"



export default function Contact(){
    const [formData,setformData]=useState({firstname:"",lastname:"",email:"",phone:"",message:""})

    const HandleInputcontact = (e) =>{
        setformData({
           ...formData,[e.target.name]:e.target.value
        })
    }
    const datas={
        firstname:formData.firstname,
        lastname:formData.lastname,
        email:formData.email,
        phone:formData.phone,
        message:formData.message
    }
    console.log(datas)

    const Handlecontact = async (e) =>{
        e.preventDefault();


        try {
           const Apicontact="http://localhost:3000/groupe/contact-us/"
           const response = await axios.post(Apicontact,
            {
                headers:{'Content-Type':'application/json'}
            }
            )
           if(response){
             alert(response.data.message)
           }else{
             console.log("message wapi")
           }
            
        } catch (error) {
            console.log(error)
        }
    }
    return(

        <>
        <Header/>
           <div className="conatct-container"> 
                     <h2 className="hello">have some questions</h2>
                <div className="fom-conto">
                    <div className="par">
                       <p>Hello every one, we are <span>Rwangingo Rice Farmers</span> 
                        <br /><br />We  are so happy because our cooperative <br /><br />its works in 
                         coperation and we work hard,<br /><br />
                        So if you want to sends us your message and you can <br /><br /> 
                        </p>
                        <div className="icon-deff">
                            <div className="icon-bar">
                                <div className="icon">
                                    <img src={tuiter} alt="" />
                                </div>
                            </div>
                            <div className="icon-bar">
                                <div className="icon">
                                    <img src={watap} alt="" />
                                </div>
                            </div>
                            <div className="icon-bar">
                                <div className="icon">
                                    <img src={email} alt="" />
                                </div>
                            </div>
                            <div className="icon-bar">
                                <div className="icon">
                                    <img src={facebook} alt="" />
                                </div>
                            </div>
                        </div>           
                    </div>
                    <form action="" onSubmit={Handlecontact}>
                        <h1>Fill this form to contact us</h1>
                        <div className="field">
                            <label htmlFor="firstname">
                                <input type="text" name="firstname" onChange={HandleInputcontact} value={formData.firstname} placeholder="Type your first name"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="lastname">
                                <input type="text" name="lastname" onChange={HandleInputcontact} value={formData.lastname} placeholder="Type your last name"/>
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
           <Footer/>
        </>

    )
}