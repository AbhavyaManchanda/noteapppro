import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import CheckBox from '../components/CheckBox';


function AddNote() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [check,setCheck]=useState(true);




  return (
    <>
     <Navbar/> 
        <div className="addNoteCon min-h-screen px-[50px]">
            <form action="" className='my-5'>
                <h3 className='m-0 p-0 text-2xl'>Create a New Note</h3>

                <div className="inputbox !block !bg-transparent">
                    <label htmlFor="title">Enter a Note Title</label>
                    <input type="text" 
                    placeholder='Note Title'
                    className='w-full p-2 border border-grey-300 rounded-md mt-1'
                    style={{border: "2px solid #555"}}   
                    name='title'
                    id='title'
                    required                 
                    />
                </div>

                <div className="inputbox !block !bg-transparent">
                    <label htmlFor="title">Enter a Note Description</label>
                    <textarea type="text" 
                    placeholder='Note Desc..'
                    className='w-full p-2 border border-grey-300 rounded-md mt-1 min-h-[20px]'
                    style={{border: "2px solid #555"}}   
                    name='description'
                    id='description'
                    required                 
                    />
                </div>
                <CheckBox check={check} setCheck={setCheck} title="is important" />

                <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => {setContent(newContent)}}
		/>

        <button className='btnNormal my-3 !min-w-[200px]' type='submit'>Submit</button>

    
            </form>
        </div>


    </>
  )
}

export default AddNote