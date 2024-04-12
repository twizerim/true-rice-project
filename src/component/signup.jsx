import React,{useState} from 'react'; 
import axios from 'axios';

function Signup() {
  const [formData,setformData]=useState({firstname:"",lastname:"",email:"",district:"",phonenumber:"",password:"",confrimpassword:""})

  const HandleInputcontact = (e) =>{
      setformData({
         ...formData,[e.target.name]:e.target.value
      })
  }
  
  const Handlecontact = async (e) =>{
      e.preventDefault();


      try {
      const api = "http://localhost:3000/groupe/user";
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

  return (
    <>
    <div className="login-contain">
       <form action="" onSubmit={Handlecontact}>
        <h1>Sign up form</h1>
           <div className="fild">
             <label htmlFor="firstname">First Name
               <input type="text"  name="firstname" id='firstname' onChange={HandleInputcontact} value={formData.firstname}/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="lastname">Last Name
               <input type="text"  name="lastname" id='lastname' onChange={HandleInputcontact} value={formData.lastname}/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="email">User email
               <input type="email"  name="email" id='email' onChange={HandleInputcontact} value={formData.email}/>
             </label>
             <span id='error'></span>
           </div>
            
           <div className="fild">
             <label htmlFor="phonenumber">Phone Number
               <input type="string"  name="phonenumber" onChange={HandleInputcontact} id='phonenumber' value={formData.phonenumber}/>
             </label>
             <span id='error'></span>
           </div>


           <div className="fild">
             <label htmlFor="district">District
               <input type="text"  name="district" onChange={HandleInputcontact} id='district' value={formData.district}/>
             </label>
             <span id='error'></span>
           </div>

           <div className="fild">
             <label htmlFor="password">Password
               <input type="password"  name='password' onChange={HandleInputcontact} id="password" value={formData.password}/>
             </label>
             <span id='error'></span>
           </div>

           
           <div className="fild">
             <label htmlFor="confrimpassword">Confrim Password
               <input type="password"  name="confrimpassword" onChange={HandleInputcontact} id='confrimpassword' value={formData.confrimpassword}/>
             </label>
             <span id='error'></span>
           </div>

           
            <div className="buto">
               <button type='submit'>Submit</button>
            </div>
       </form>         
  </div>
        
    </>
  );
};

export default Signup;