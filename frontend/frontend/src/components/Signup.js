import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {


  const [name,setName] = useState();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [error,setError] = useState();
  let navigate = useNavigate();

  let handleSubmit =async (e) => {
      e.preventDefault();
      let res = await fetch("http://localhost:8000/signup",
          {
              method: "POST",
              mode :"cors",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({
                  name,
                  email,
                  password,
                  username
              })  
          })
          let data= await res.json();
          console.log(data);
          if(data.success===true){
              alert("Registration successfull");
              navigate("/login")
          }
          else{
              setError(data.message);
              alert(data.message)
          }
          
  }





  return (
    <>
       <div className="container bg-[#D2D2D2] flex items-center fles-col justify-center min-h-[100vh] min-w-[100vw]">
        <form
        onSubmit={handleSubmit} 
        action="" className='form'>
            <h3 className="text-center text-[20px] mt-3 mb-5">Sign-Up</h3>
            <div className="inputbox">
            <input
            onChange={(e)=>{setUsername(e.target.value)}}
            value={username}
            type="text" name="username" id="username" placeholder='Username'/>

            </div> 

            <div className="inputbox">
            <input 
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
            type="text" name="name" id="name" placeholder='name'/>

            </div> 

            <div className="inputbox">
            <input 
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            type="email" name="email" id="email" placeholder='email'/>

            </div> 

            <div className="inputbox">
            <input 
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            type="password" name="password" id="password" placeholder='password'/>
             
            </div> 
            <button type='submit' className='btnbig mt-3 mb-5'>Sign Up</button>
            <p className='mb-3 mt-2'>already have an account <Link to='/LogIn' className='text-[#f57e57]'>Login</Link></p>



        </form>
       </div>
        
      
    </>
  )
}

export default Signup

 