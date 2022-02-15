import React  from "react";
import { Link } from "react-router-dom";
import headerlogo from '../assets/img/headerlogo.png'

export default function Nav() {
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <>
      <nav className="shadow fixed w-full flex flex-wrap items-center  justify-between px-2 py-2 -mt-8 bg-gradient-to-r from-blue-100 to-white mb-3 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex  lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" flex text-sm font-extrabold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase "
              href="#home">
            <span className="ml-4 z-10 flex"><img style={{width:"30%"}}src={headerlogo}/><h1 className="-ml-6 text-2xl font-mono pt-6 z-20">MY BOOK</h1></span> 
            {/* <span className="text-2xl -ml-16 z-20">MY BOOK</span>  */}
            </a>
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
          <div
            className={
              "lg:flex flex-grow items-center" +
              (isOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item pt-2">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-purple-600 hover:scale-125 transition-all  hover:opacity-75"
                  href="#home"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  hover:text-purple-600 hover:scale-125 transition-all text-2xl opacity-75"></i><span className="ml-2 text-base">Home</span>
                </a>
              </li>
              <li className="nav-item pt-2">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl hover:opacity-75"
                  href="#about"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl opacity-75"></i><span className="ml-2 text-base">About</span>
                </a>
              </li>
              <li className="nav-item pt-2">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl hover:opacity-75"
                  href="#Services"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl opacity-75"></i><span className="ml-2 text-base">Services</span>
                </a>
              </li>
              <li className="nav-item pt-2">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl hover:opacity-75"
                  href="#contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black hover:text-purple-600 hover:scale-125 transition-all text-2xl opacity-75"></i><span className="ml-2 text-base ">Contact us</span>
                </a>
              </li>
            
            <div className="ml-4"> 
          <Link to="/signup"> 
          <button className=" ring-2 hover:bg-blue-800 hover:text-white  text-blue-800 font-bold py-2 px-4 border border-teal-500 rounded mt-1 transition duration-300 text-xl">SignUp</button>
          </Link> 
          </div>
          <div className="ml-4 pt-1">
           <Link to="/login">
             <button className='bg-blue-800 hover:bg-white hover:text-blue-600  text-white font-bold py-2 px-6 border  rounded text-xl ' >Login</button>
             </Link> 
             </div>
             </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
