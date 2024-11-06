import React from 'react'

function Navbar() {
  return (
    <>
    <div className="navbar w-screen h-[90px] bg-[#F4F4F4] px-[50px] flex items-center justify-between">
        <div className="logo text-2xl">keep notes</div>
        <div className="right flex items-center gap-[10px]">
            <button className='btnNormal'>add notes</button>
            <div className="profilecircle w-[50px] h-[50px] rounded-[50%] bg-[#B9B9B9]"></div>
        </div>

    </div>
      
    </>
  )
}

export default Navbar
