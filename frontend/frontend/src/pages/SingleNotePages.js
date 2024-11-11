import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'

function SingleNotePage() {
    return (
        <>
            <Navbar />
            <div className="container px-[50px] mt-4 w-screen flex">
                <div className='flex items-start justify-between h-[63vh] my-3'>
                    <div className="left h-full w-[80vw] text-4xl">
                        <h3 className=' text-[#000] '>Website Design</h3>
                        <p className='text-[grey]'>2/4/2024</p>
                        <p className='text-[grey] text-2xl mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum, pariatur cupiditate, rerum impedit obcaecati, neque aut odio ducimus est nulla omnis. Totam non veniam laborum voluptate eveniet est quam?</p>
                    </div>
                    <div className="right flex items-start  mt-[20px] gap-1  h-full w-[20%] justify-end">
                        {/* <img alt="dasd" className='w-[30px] h-[30px] cursor-pointer' src={require("../images/edit.png")}></img>
                        <img alt="dasd" className='w-[30px] h-[30px]' src={require("../images/delete.jpg")}></img> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleNotePage