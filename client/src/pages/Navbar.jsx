import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navigation flex justify-center h-11 top-2 shadow-md text-blue-600 bg-gray-50 text-xl font-bold w-[100%]'>
        <Link to='/' className='text-blue-600'>
        <p className='m-3'> 
           DROAME
        </p>
        </Link>
      </div>
  )
}

export default Navbar