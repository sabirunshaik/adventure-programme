import React, { useState } from 'react'

const Contact = () => {

const [name , setName] = useState()

  return (

    <>
    <pre>
      {name}
      
    </pre>
      <div className='h-screen  bg-gradient-to-tr from-orange-400 to-pink-400 pt-24'>
        <form className='border flex items-center flex-col justify-center gap-2 w-[55%] h-[60%] ml-80 bg-[url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D)] bg-no-repeat bg-cover rounded-3xl' action="" method="post">
        
            <h2 className='font-bold text-3xl text-orange-300 underline'>BOOK MY TRIP</h2>
        
        <div  className='flex gap-3 font-bold text-black'>
        <label className='text-white ' for="">NAME : </label>
        <input  onChange={(e)=>setName(e.target.value)} className='py-1 w-[10rem]' type="text" />
        
        
        <label className='text-white ' for="">Address :</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" />
        </div>
       <div className='flex gap-3 font-bold text-black'>
        <label className='text-white' for="">Mobile number : </label>
        <input onChange={(e)=>setName(e.target.value)} className='py-1' type="number" />
       
        
        <label className='text-white' for="">Date : </label>
        <input  onChange={(e)=>setName(e.target.value)}  type="date" />
      </div>
    
      <div className='font-bold ' >
        <label className='text-white' for="">Message : </label>
        <textarea  onChange={(e)=>setName(e.target.value)}  name="" id="" cols="55" rows="8"></textarea>
      </div>
      <div>
        <button className='border p-3 px-6 bg-blue-600 rounded-xl'>Submit</button>
      </div>
        </form>
  </div>
      
    </>
  )
}

export default Contact