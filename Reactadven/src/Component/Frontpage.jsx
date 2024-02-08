import React from 'react'

const Frontpage = () => {
  return (
    <div className='bg-no-repeat bg-cover  bg-[url(https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D)] h-[90vh] '>
      <div className='flex flex-col justify-center items-center h-[600px] w-[500px] m-auto text-center gap-5'>
        <h3 className='text-xl font-bold '>Lorem ipsum dolor sit amet consectetur.</h3>
        <h1 className='text-5xl font-bold text-white'>Welcome to Adventures Overland!</h1>
        <p className='text-l font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ea itaque iusto quia accusantium illo id deserunt suscipit ipsa!</p>
        <button className=' px-4 py-2 bg-orange-600 text-white rounded-xl font-bold'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Frontpage
