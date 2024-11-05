import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <>
       <div className="container bg-[#D2D2D2] flex items-center fles-col justify-center min-h-[100vh] min-w-[100vw]">
        <form action="" className='form'>
            <h3 className="text-center text-[20px] mt-3 mb-5">Sign-Up</h3>
            <div className="inputbox">
            <input type="text" name="username" id="username" placeholder='Username'/>

            </div> 

            <div className="inputbox">
            <input type="text" name="username" id="username" placeholder='name'/>

            </div> 

            <div className="inputbox">
            <input type="email" name="email" id="email" placeholder='email'/>

            </div> 

            <div className="inputbox">
            <input type="password" name="password" id="password" placeholder='password'/>
             
            </div> 
            <button className='btnbig mt-3 mb-5'>Sign Up</button>
            <p className='mb-3 mt-2'>already have an account<Link to='/LogIn' className='text-[#f57e57]'>login</Link></p>



        </form>
       </div>
        
      
    </>
  )
}

export default Signup
