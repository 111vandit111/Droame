import React from 'react'
import hero from '../assets/hero.svg'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import '../App.css'
const Home = () => {
  return (
    // THIS IS A BASIC REACT PAGE WITH A NAV , HERO SECTION AND A 2 REDIRECTING LINK
    <div className='wholeBody'>
      
      <Navbar />

      <div class=" hero-container px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Here you can Manage your Bookings and Customers for DROAME <br /><span class="text-blue-600">HELLO OPERATORS</span></h1>
            </div>
           <div class="mb-12 lg:mb-0">
            <img
              src={hero}
              class="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className='redirecting flex w-[100%] justify-evenly py-[150px]'>
      <Link to="/booking"> <a class="flex justify-center items-center px-7 py-3 mr-2 h-24 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  " data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Manage Bookings</a></Link>
      <Link to="/customer"><a class="flex justify-center items-center px-7 py-3 mr-2 h-24 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="./customer" role="button">Manage Customers</a></Link>
          
      </div>
    </div>

      
    
    <Footer />


    </div>
  )
}

export default Home;