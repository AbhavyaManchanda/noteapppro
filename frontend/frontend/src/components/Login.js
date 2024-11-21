import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            console.log(data);
            if (data.success===true) {
                
                alert("Login Successfull")
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }




  return (
    <>
       <div className="container bg-[#D2D2D2] flex items-center fles-col justify-center min-h-[100vh] min-w-[100vw]">
        <form
        onSubmit={handleLogin}
        action="" className='form'>
            <h3 className="text-center text-[20px] mt-3 mb-5">Log-In</h3>

            

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
            type="password" name="password" id="password" placeholder='set a password'/>
             
            </div> 
            <button className='btnbig mt-3 mb-5'>Log In</button>
            <p className='mb-3 mt-2'>Don't have an account <Link to='/Signup' className='text-[#f57e57]'>Signup</Link></p>



        </form>
       </div>
        
      
    </>
  )
}

export default Login
