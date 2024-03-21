import Headr from "../component/header"
import Button from "../component/button"
import { Link } from 'react-router-dom'
import Footer from "../component/footer"


export default function Registration(){

     return (
        <>
          <Headr/>
           <div className="contaier">
                 <div className="separate">
                    <p>Regist here</p><h1>Or</h1> <Link to="/membersign" className="linksa"><Button name="Sign In"/></Link>
                 </div>
                <form action="" className="signup">
                <div className="flex">
                    <div className="division1">
                    <div className="groupe">
                   <label htmlFor="fistname">First name
                       <input type="text" name="firstname"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="lastname">Last name
                       <input type="text" name="lastname"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="email">Email
                       <input type="text" name="email"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="id">ID number
                       <input type="text" name="id"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="phone">Phone number
                       <input type="text" name="phone"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="district">District
                       <input type="text" name="district"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="secter">Secter
                       <input type="text" name="secter"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="sell">Sell
                       <input type="text" name="sell"/>
                   </label>
                   
               </div>
                    </div>
                    <div className="division2">
                    <div className="groupe">
                    <label htmlFor="dugudu">Village
                       <input type="text" name="dugudu"/>
                       </label>
               </div>
                    <div className="groupe">
                   <label htmlFor="image">Image
                       <input type="file" name="image"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="idco">ID photocopy
                       <input type="file" name="idco"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="land">Land report
                       <input type="file" name="land"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="letter">Request letter
                       <input type="file" name="letter"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="password">Password
                       <input type="password" name="password"/>
                   </label>
               </div>
               <div className="groupe">
                   <label htmlFor="confrimpassword">Confrim password
                       <input type="password" name="confrimpassword"/>
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