import React from "react";
// import emil from "../assets/image/helloo.png"
import Footer from "../component/footer";
import Header from "../component/header"
import tuiter from "../assets/image/twiter.png"
import watap from "../assets/image/whatapp.png"
import email from "../assets/image/email.png"
import facebook from "../assets/image/facebooob.png"



export default function Contact(){
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
                    <form action="">
                        <h1>Fill this form to contact us</h1>
                        <div className="field">
                            <label htmlFor="">
                                <input type="text" placeholder="Type your first name"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="">
                                <input type="text" placeholder="Type your last name"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="">
                                <input type="text" placeholder="Type your email"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="">
                                <input type="text" placeholder="Type your phone number"/>
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="">
                                <textarea name="" id="" cols="" rows="2.5" placeholder="Type your message"></textarea>
                            </label>
                        </div>
                        <div className="button">
                            <button><i>Send message</i></button>
                        </div>
                    </form>

                </div>
           </div>
           <Footer/>
        </>

    )
}