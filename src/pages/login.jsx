import React from 'react'; 
import Header from "../component/header"
import Footer from "../component/footer"

function Login() {

  return (
    <>
    <Header/>
    <div className="login-contain">
       <form action="">
        <h1>Login form</h1>
           <div className="fild">
             <label htmlFor="email">User email
               <input type="email"  name="email" id='password'/>
             </label>
             <span id='error'></span>
           </div>
           <div className="fild">
             <label htmlFor="password">Password
               <input type="password"  name='password' id="password"/>
             </label>
             <span id='error'></span>
           </div>
           <div className="addition">
              <div className="left">
              <input type="checkbox" />
              <p>Remember me...</p>
              </div>
              <p>For got  <a href="">Password</a></p>
            </div>
            <div className="buto">
               <button type='submit'>Submit</button>
            </div>
            <div className="signup">
              <p>If you don't have account please <a href="/signup">Sign up</a></p>
            </div>
       </form>

            
  </div>
  <Footer/>
        
    </>
  );
};

export default Login;