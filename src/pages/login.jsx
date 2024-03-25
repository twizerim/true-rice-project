import React,{useState} from 'react'; 
import Header from "../component/header"
import Footer from "../component/footer"
import axios from 'axios';

function Login() {
  const [formData,setformData]=useState({email:"",password:""})
  console.log(formData)

  const HandleInputcontact = (e) =>{
      setformData({
         ...formData,[e.target.name]:e.target.value
      })
  }
  
  const HandleLogin = async (e) =>{
      e.preventDefault();


      try {
      const api = "http://localhost:3000/groupe/user/login";
       const response = await axios.post(api, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
     localStorage.setItem("token",response.data.token)
     localStorage.setItem("role",response.data.data.user.role)
     alert("Login successfuly ok go to next")
       
     if(response.data.data.user.role==="admin"){
        window.location.href="/adminpanel"
     }else if(response.data.data.user.role==="farmer"){
        window.location.href="/farmerpanel"
     }else{
       window.location.href="/product"
     }
          
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
    <Header/>
    <div className="login-contain">
      <button><a href="/adminpanel">Dashboard</a></button>
       <form action="" onSubmit={HandleLogin}>
        <h1>Login form</h1>
           <div className="fild">
             <label htmlFor="email">User email
               <input type="email"  name="email" onChange={HandleInputcontact} value={formData.email} id='password'/>
             </label>
             <span id='error'></span>
           </div>
           <div className="fild">
             <label htmlFor="password">Password
               <input type="password"  name='password' onChange={HandleInputcontact} value={formData.password} id="password"/>
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