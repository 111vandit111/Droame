import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <footer
  className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200 lg:text-left">
  <div
    className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div className="mr-12 hidden lg:block">
      <span>Made for Task submission for </span>
    </div>
    <div className="flex justify-center mx-14 font-bold text-xl">
      <Link to='https://www.droame.com/'>
      DROAME
      </Link>
    </div>
  </div>
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="">
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-4 w-4">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          Task 
        </h6>
        <p>
          Create a Web Application for Operators where they can Create & Manage Customer & Bookings.
        </p>
      </div>
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Technologies Backend
        </h6>
        <p className="mb-4">
          <a href="https://nodejs.org/en" className="text-neutral-600 dark:text-neutral-200"
            >Node.js</a
          >
        </p>
        <p className="mb-4">
          <a href="https://expressjs.com/" className="text-neutral-600 dark:text-neutral-200"
            >Express</a
          >
        </p>
        <p className="mb-4">
          <a href="https://www.mongodb.com" className="text-neutral-600 dark:text-neutral-200"
            >MongoDB</a
          >
        </p>
        <p>
          <a href="https://www.mongodb.com/products/compass" className="text-neutral-600 dark:text-neutral-200"
            >Mongo Compass</a
          >
        </p>
      </div>
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Technologies Frontend
        </h6>
        <p className="mb-4">
          <a href="https://vitejs.dev/" className="text-neutral-600 dark:text-neutral-200"
            >Vite</a
          >
        </p>
        <p className="mb-4">
          <a href="https://react.dev/" className="text-neutral-600 dark:text-neutral-200"
            >React.js</a
          >
        </p>
        <p className="mb-4">
          <a href="https://www.javascript.com/" className="text-neutral-600 dark:text-neutral-200"
            >Javascript</a
          >
        </p>
        <p>
          <a href="https://tailwindcss.com/" className="text-neutral-600 dark:text-neutral-200"
            >Tailwind CSS</a
          >
        </p>
      </div>
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Thank You
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          
          For providing this Opportunity
        </p>
        
      </div>
    </div>
  </div>
  <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
    <span>Made By: </span>
    <p
      className="font-semibold text-neutral-600 dark:text-neutral-400"
      >Vandit Kala</p>
  </div>
</footer>
 )
}

export default Footer;