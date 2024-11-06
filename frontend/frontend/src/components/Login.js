import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
       <div className="container bg-[#D2D2D2] flex items-center fles-col justify-center min-h-[100vh] min-w-[100vw]">
        <form action="" className='form'>
            <h3 className="text-center text-[20px] mt-3 mb-5">Log-In</h3>
            <div className="inputbox">
            <input type="text" name="username" id="username" placeholder='set a username'/>

            </div> 

            <div className="inputbox">
            <input type="text" name="username" id="username" placeholder='name'/>

            </div> 

            <div className="inputbox">
            <input type="email" name="email" id="email" placeholder='email'/>

            </div> 

            <div className="inputbox">
            <input type="password" name="password" id="password" placeholder='set a password'/>
             
            </div> 
            <button className='btnbig mt-3 mb-5'>Log In</button>
            <p className='mb-3 mt-2'>Don't have an account <Link to='/Signup' className='text-[#f57e57]'>Signup</Link></p>



        </form>
       </div>
        
      
    </>
  )
}

export default Login
