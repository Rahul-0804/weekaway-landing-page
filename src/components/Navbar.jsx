import React, {useState} from 'react'
import {FaBars, FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)

    }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <div className='flex justify-between items-center'>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaInstagram className='mx-4'/>
            <FaLinkedin className='mx-4'/>
        </div>
        {/* Mobile Menu */}
        <div className='sm:hidden z-10' onClick={handleNav}>
            {
                nav ? <AiOutlineClose className='mx-4 cursor-pointer' size={20}/> : <FaBars className='mx-4 cursor-pointer' size={20}/>
            }
        </div>
        {/* Menu */}
    <div onClick={handleNav} className={nav?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 ':'absolute left-[-100%] ease-in duration-300 top-0 h-screen'}>
        <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
                <a href="/">Home</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#gallery">Gallery</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#deals">Deals</a>
            </li>
            <li className='text-2xl py-8'>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
    
    </div>
  )
}

export default Navbar