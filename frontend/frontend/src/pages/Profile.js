import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

function Profile() {
  return (
    <div>
        <Navbar/>
        <div className="bg-[#D2D2D2] flex items-center justify-between w-screen h-[300px] px-[50px]">
            <div className="flex items-center gap-[10px]">
                <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#F57E57] "></div>
                <div>
                    <h3 className='text-[23px]'>SHAAN</h3>
                    <p className='m-[0px] p-[0px] text-[grey] text-[15px] mt-1'>Joined in 2/3/2023</p>
                </div>
            </div>
            <div className="relative h-[40%]">
                <div className="flex items-center gap-[10px] text-[grey]">Total Notes: 3 | Important Notes: 1</div>
                <div className="absolute bottom-0 flex items-center gap-[10px]">
                    <button className='btnNormal'>Add Pic</button>
                    <button className='btnNormal'>Add Note</button>
                </div>
            </div>
        </div>
        <div className="w-screen px-[50px]">
            <h3 className='text-[26px] '>Your <span className='text-[#F57E57] '>Important</span> Notes</h3>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile