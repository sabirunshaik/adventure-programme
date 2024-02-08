import React from 'react'
import {Link}from'react-router-dom'
const Nav = () => {
  return (
    <nav className='flex items-center justify-around bg-orange-600 text-white font-bold'>
        <img className="w-24"src="https://img.freepik.com/free-vector/vintage-mountain-lettering_79603-2267.jpg?size=626&ext=jpg&ga=GA1.1.1427256830.1701966642&semt=ais" alt="" />
        <ul className='flex gap-7'>
            <li> <Link to={'HOME'}>Home</Link> </li>
            <li><Link to={'ABOUT'}>About</Link></li>
            <li><Link to={'BLOG'}>Blog</Link></li>
            <li><Link to={'CONTACT'}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Nav