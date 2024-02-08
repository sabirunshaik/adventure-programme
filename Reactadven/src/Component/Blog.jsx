import React from 'react'

const Blog = () => {
  return (
    <>
    <div className='h-screen  bg-gradient-to-tr from-orange-400 to-pink-400 '>
       
        <h1 className='font-bold text-5xl text-black underline py-4 p-3'>BLOG</h1>
        <p className='text-2xl text-black p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum enim facere id reprehenderit fuga impedit dolorum odio dolores, tempora autem numquam animi officiis quae eos expedita laboriosam dignissimos perferendis eaque, est aut commodi. Magnam velit rem hic dicta consequuntur eos quae maxime! Perferendis a adipisci neque. Placeat maxime magnam fugit ut neque optio vel perferendis sint odio natus modi blanditiis sequi numquam deleniti, repellat eveniet veritatis animi minus, quas cupiditate illum dolorem ea expedita necessitatibus. Delectus deserunt dolor numquam nobis labore placeat quod harum libero sit reiciendis repellendus enim vero aut vitae saepe, perferendis magnam, velit ipsa at incidunt. A?</p>
       <div className='flex gap-20 m-7  justify-center'>
        <div className='border bg-pink-500 p-3 absolute left-64 top-[390px] shadow-xl shadow-stone-600'>
          <img className='h-[250px]' src="https://images.unsplash.com/photo-1598275277521-1885382d523a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWtpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
          <h1 className='font-bold'>traking</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='border bg-orange-500 p-3 absolute left-[470px] shadow-xl shadow-stone-600 bottom-[1PX] '> 
          <img className='h-[250px]' src="https://images.unsplash.com/photo-1568454537842-d933259bb258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlraW5nfGVufDB8fDB8fHww" alt="" />
          <h1 className='font-bold'>Hiking</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='border bg-pink-500 p-3 absolute left-[680PX] top-[390px] shadow-xl shadow-stone-600'>
          <img className='h-[250px]' src="https://images.unsplash.com/photo-1609750186885-453cb10e58fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVuZ2VlJTIwanVtcGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h1 className='font-bold'>Bunji Jumping</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='border bg-orange-500 p-3 absolute left-[890px] shadow-xl shadow-stone-600 bottom-[1PX] '> 
          <img className='h-[250px] w-[170px]' src="https://images.unsplash.com/photo-1474623809196-26c1d33457cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwZGl2aW5nfGVufDB8fDB8fHww" alt="" />
          <h1 className='font-bold'>Sky diving</h1>
          <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
       </div>
</>    
  )
}

export default Blog
