import React from 'react'

function Note(title,description,isImportant,data,hight) {
  return (
    <>
    <div className="note relative">
        <p className='text-[grey]'>note 1</p>
        <h1 className='text-[black] text-[20px] w-[80%]'>website design</h1>
        <p className='text-[grey] w-[80%] line-clamp-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet ut distinctio possimus dolorum ea ipsa facilis eveniet, et alias reiciendis rerum ratione dolore nesciunt molestiae blanditiis laborum aut vero?</p>

        <div className="notebottom absolute bottom-5 w-[90%] flex justify-between items-center">
            <p className='text-[grey]'>date</p>
            <p className='text-[black]'>del</p>
        </div>

    </div>
      
    </>
  )
}

export default Note
