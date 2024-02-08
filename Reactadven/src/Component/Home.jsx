import React from 'react'

const Home = () => {
  return (
    <>
    <div className='flex justify-center gap-6' >
    

      <div className=' w-[580px] h-[22rem] relative border bg-no-repeat bg-cover bg-center'  style={{
backgroundImage: 'url("https://images.unsplash.com/photo-1514774052943-0a2353774598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMGJvYXJkaW5nfGVufDB8fDB8fHww")',
 
}}>
  <div className='w-full h-full absolute z-10 hover:bg-blue-700 opacity-40 hover:cursor-pointer hover:backdrop-blur-xl'>
  </div>
<div className=" text-black-600  absolute z-30 flex flex-col justify-center items-center text-center w-full mt-28 ">
<h1 className='font-bold text-3xl text-white'>S K I I N G</h1>
<p className='font-bold'>Lorem ipsum dolor sit amet.</p>
</div>


      </div>

      <div className=' w-[580px] h-[22rem] relative border bg-no-repeat bg-cover bg-center'  style={{
backgroundImage: 'url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
 
}}>
  <div className='w-full h-full absolute z-10 hover:bg-blue-700 opacity-40 hover:cursor-pointer hover:backdrop-blur-xl'>
  </div>
<div className=" text-black-600  absolute z-30 flex flex-col justify-center items-center text-center w-full mt-28 ">
<h1 className='font-bold text-3xl text-white'>H I K I N G</h1>
<p className='font-bold'> Lorem ipsum dolor sit amet.</p>
</div>
</div>

      </div> 
      <div className='flex items-center justify-center py-5 px-36'>
      <div className=' w-full h-[22rem] relative border bg-no-repeat bg-cover bg-center'  style={{
backgroundImage: 'url("https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D")',
 
}}>
  <div className='w-full h-full absolute z-10 hover:bg-blue-700 opacity-40 hover:cursor-pointer hover:backdrop-blur-xl'>
  </div>
<div className=" text-black-600  absolute z-30 flex flex-col justify-center items-center text-center w-full mt-28 ">
<h1 className='font-bold text-3xl text-white'>P A R A G L I D I N G</h1>
<p className='font-bold'> Lorem ipsum dolor sit amet.</p>
</div>


      </div>
  </div>
    </>
  )
}

export default Home