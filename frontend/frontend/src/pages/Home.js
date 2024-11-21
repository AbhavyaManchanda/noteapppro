import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'
import Footer from './Footer'

export default function Home() {

  const [data,setData]=useState(null);
  const [error,setError]=useState();

  let getNotes=()=>{
    let res=fetch("http://localhost:8000/getNotes",{
      method:"POST",
      mode:"cors",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({uploadedBy:"kh"})
    }).then(resp=>resp.json()).then(data=>{
      if(data.length>0){
        console.log(data);
        setData(data);
      }
      else{
        setError(data.msg);
      }
    })
  }

  useEffect(()=>{
    getNotes();
  },[])



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
        <Note note={{title:"physics",desc:"physics",data:"02-02-2024",}}/>

        {
          data?data.map((el,index)=>{
            return(
              <Note key={index} index={index} note={el}/>
            )
          }):"no notes found"
        }
         
        
      </div>
      <Footer/>
    </div>
  )
}
