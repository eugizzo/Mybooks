import React from 'react'
import headerlogo from '../assets/img/headerlogo.png'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
      
        <div className=' '>
          <div className=" flex flex-wrap justify-center bg-gray-600 py-16  p-6">
      <div className="flex flex-wrap mb-4 w-full">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
        <span className="ml-4 z-10 flex"><img style={{width:"30%"}}src={headerlogo} alt="about us"/><h1 className="-ml-6 text-2xl text-blue-100 font-mono sm:pt-2 pt-6 z-20">MY BOOK</h1></span>
          <p className="text-white py-2">Bookkeeping is the practice of recording, storing, retrieving, keeping, and analyzing the financial records of a company
          </p>
        </div>
        <div className=" items-center w-full sm:w-1/2 md:w-1/2  lg:w-1/4 ">
          <h3 className="text-3xl py-4 text-white ">Main</h3>
          <ul className=''>
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#Service" className="text-white">About Us</a></li>
            <li><a href="#services" className="text-white">Service</a></li>
            <li><a href="#contact" className="text-white">Contact US</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2  lg:w-1/4 ">
          <h3 className="text-3xl py-4 text-white ">Other</h3>
          <ul>
            <li><a href="#" className="text-white">product</a></li>
            <li><a href="#" className="text-white">sales</a></li>
            <li><a href="#" className="text-white">purcharse</a></li>
            <li><a href="#" className="text-white">invoice</a></li>
            <li><a href="#" className="text-white">customers</a></li>
            
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <h3 className="text-3xl py-4 text-white">Subscribe</h3>
          <form action="#">
            <div className="mb-4">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Email" required />
            </div> 
             <button className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
          </form> 
        </div>
      </div>
    </div>  

        <div className='flex bg-black py-8 justify-center'>
         <div>
         <h3 className='text-green-400 ml-4'>Copyright &copy; 2022 Mybook, All rights reserved. </h3>
         </div>
          <div className='flex ml-4'>
            <a href='https://www.instagram.com/accounts/login/?'> <FaTwitter className='text-white text-xl mr-4 '/></a>
            <a href='https://www.facebook.com/home.php'> <FaFacebook className='text-white text-xl mr-4'/></a>
            <FaLinkedin className='text-white text-xl mr-4 '/>
            <FaInstagram className='text-white text-xl mr-4 '/>
          </div>
        <div>
         
       </div>
       
       
    </div> 

          </div>
         
          
    )
}

export default Footer
