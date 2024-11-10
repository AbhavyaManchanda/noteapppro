import React from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="mt-[20px] px-[50px] flex items-center justify-between w-screen">
        <h1 className='text-2xl'>hi khushi</h1>
        <div className="inputbox !w-[350px]">
          <input type='text' placeholder='search notes' className='!p-[10px]'/>
        </div>
      </div>
      <div className="griditems">
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        
      </div>
      <Footer/>
    </div>
  )
}
