import React from 'react'; 
import Header from "../component/header"
import Footer from "../component/footer"

function Signup() {

  return (
    <>
    <Header/>
    <div className="login-contain">
       <form action="">
        <h1>Sign up form</h1>
           <div className="fild">
             <label htmlFor="fullname">First Name
               <input type="fullname"  name="fullname" id='fullname'/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="lastname">Last Name
               <input type="lastname"  name="lastname" id='lastname'/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="email">User email
               <input type="email"  name="email" id='email'/>
             </label>
             <span id='error'></span>
           </div>
            
           <div className="fild">
             <label htmlFor="phone">Phone Number
               <input type="number"  name="phone" id='phone'/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="district">District
               <input type="text"  name="district" id='district'/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="password">Password
               <input type="password"  name='password' id="password"/>
             </label>
             <span id='error'></span>
           </div>

           
           <div className="fild">
             <label htmlFor="confrimpassword">Confrim Password
               <input type="password"  name="confrimpassword" id='confrimpassword'/>
             </label>
             <span id='error'></span>
           </div>

           
            <div className="buto">
               <button type='submit'>Submit</button>
            </div>
            <div className="signup">
              <p>If you create account you are allowed to <a href="/login">Login now</a></p>
            </div>
       </form>

            
  </div>
  <Footer/>
        
    </>
  );
};

export default Signup;