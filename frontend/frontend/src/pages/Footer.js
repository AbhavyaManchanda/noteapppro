import React from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube} from "react-icons/fa";


function Footer() {
  return (
    <>
        <div className="footer flex h-[120px] absolute bottom-0 w-screen px-[50px] bg-[#f4f4f4] items-center justify-between">
            <h3 className="text-[26px]">Keep Notes</h3>
            <div className="text-center text-gray-500">
                <p>Designed By <span className='text-[#E57F57]'>S.K.Ansari Sir</span></p>
                <p>Copy Right All Right Reserved</p>
            </div>
            <div className="text-gray">
                <p className='font-semibold'>We are Social</p>
                <div className="flex items-center gap-1">
                    <i><FaFacebook/></i>
                    <i><FaInstagramSquare/></i>
                    <i><FaYoutube /></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer