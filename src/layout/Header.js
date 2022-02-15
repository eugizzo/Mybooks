import React from 'react'
import logo3 from '../assets/img/logo3.png'
import { Link } from "react-router-dom";


function Header() {


  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }
    return (
      <div className=" ">
               
      <nav className=" shadow fixed flex  bg-white items-center justify-between text-xl w-full flex-wrap  -mt-8 z-50 bg-gradient-to-r from-blue-100 to-white">

        <div className="py-6 ml-8">
        {/* <img style={{width:'10%'}} src={logo3} alt='logo' /> */}
        <h1  className='font-semibold text-2xl font-italic  font-bold' style={{color: "#3B64A1"}} >MY BOOK </h1>
         
        </div>
        <div className="md:hidden">
        <button type="button" className="block lg:hidden sm:justify-center" onClick={handleClick}>
          <svg className="h-6 w-6 fill-current text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen && (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              )}
              {!isOpen && (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
          </svg>
        </button>
        </div>
        <div className=" w-full  justify-end flex-grow lg:items-center  lg:w-auto  justify-end mr-8">
        <ul className={`lg:flex ${  isOpen ? "md:block" : "hidden" } `}>
          <div className=" flex text-sm lg:flex-grow justify-end space-x-8 " >
         
           
           <div className='pt-2'>
                <a href="#home" className=' sm:-pt-2 mt-8 lg:inline-block lg:mt-0 text-blue-800  hover:text-purple-600 hover:scale-125 transition-all  text-xl '>
                  Home
                </a>
            </div>

            <div className='pt-2'>
                <a href="#about" className=" sm:-pt-2 mt-8 lg:inline-block lg:mt-0 text-blue-800 hover:text-purple-600 hover:scale-125 transition-all text-xl " >
                  About
                </a>
            </div>

            <div className='pt-2'>
                <a href="#Services" className=" sm:-pt-2 mt-8 lg:inline-block  lg:mt-0 text-blue-800 hover:text-purple-600 hover:text-purple-600 hover:scale-125 transition-all text-xl " >
                  Services
                </a>
            </div>

            <div className='pt-2'>
                <a href="#contact" className=" sm:-pt-2 mt-8 lg:inline-block lg:mt-0 text-blue-800 hover:text-purple-600 hover:scale-125 transition-all text-xl">
                Contact
                </a>
            </div>
            
          <div className='sm:space-x-4'> 
          <Link to="/signup"> 
          <button className="hover:bg-blue-600 hover:text-white  text-blue-800 font-bold py-2 px-6 border border-teal-500 rounded mt-1 transition duration-300 text-xl">SignUp</button>
          </Link> 
          </div>
          <div>
           <Link to="/login">
             <button className='bg-blue-800 hover:bg-white hover:text-blue-600  text-white font-bold py-2 px-6 border  rounded text-xl ' >Login</button>
             </Link> 
             </div>
          </div>
          </ul>
          </div>
        
      </nav>

    </div>
     
    )
}

export default Header
