import React from "react";
import home from "../../assets/img/home.jpg"
import about from "../../assets/img/about.jpg"
import {Link} from 'react-router-dom';
import send from '../../assets/img/send.jpg'

import learn1  from "../../assets/img/learn1.png"
import report1  from "../../assets/img/report1.png"
import download  from "../../assets/img/download.png"
import './home.css'
import Footer from "../../layout/Footer";
import Nav from "../../layout/Nav";



const Home = () =>

<div className="">

  
  {/* <Header /> */}
  
  <Nav />
  <section id="home" className="bg-gradient-to-r from-blue-100 to-white">
 <div className=" block ml-16 mr-16 px-2 py-40 -md:py-8 flex mt-8 z-4 flex-wrap ">
     
     <div className="lg:w-1/2 sm:w-full py-12 pr-2">
        <h1 className="text-4xl font-extrabold " style={{color: "#5F2DFE"}}>Better way to recording 
           <span className="block">financial Transactions</span>
        </h1>
        <p className="py-8 tracking-widest space-y-2 ">Bookkeeping is the recording of financial transactions, <br />and is part of the process 
        of accounting in businessand other organizations
        
           
        </p>
        <div className="flex px-28 mt-5  sm:mt-8 sm:flex sm:justify-center">
               <Link to='/login'> 
               <div className="rounded-2xl sm:px-2">
                  <p className=" shadow-2xl  flex items-center justify-center px-2 py-1 font-bold border border-transparent text-base font-medium rounded-md text-white  hover:bg-indigo-700 sm:py-4 md:text-lg sm:px-10" style={{backgroundColor: "#5F2DFE"}}>
                     Get Started
                  </p>
                </div>
                </Link>
         </div>
     </div>
     
     <div className="lg:w-1/2 sm:w-full ">
     <img className=" skew-y-12 w-full "src={home} />
     </div>

   </div>
     </section>
   
   <section className="about-section text-center py-16  flex-wrap" id="about">
    <div className="bg-gray-50 py-8">
      <div className="text-center">
        <h1 className="text-5xl text-blue-800">who are we ?</h1>
      
      </div>

     <div className="lg:flex mr-8 ml-8  mt-8 mb-4 ">
      <div className="lg:w-1/2 sm:w-full ml-12 py-8"> 
          <p className="items-center mr-4 text-black text-xl py-8 tracking-wider ">
            My Book Track expenses, customise invoices, run reports,
            Your data is stored in the cloud and  allowing you to run 
            your business from your device   
            
          </p>

                <button className="rounded-md flex justify-start py-12">
                  <a href="#" className=" flex items-center shadow justify-center px-4  border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 sm:py-4 sm:text-lg sm:px-8">
                  Read more
                  </a>
                </button>
              </div>
                  <div className="lg:w-1/2 sm:w-full ml-4 mt-8">
                    <img  className="sm:ml-2 photopatrick "src={about} alt="about "/> 
                </div>
              </div>
            </div>
          </section>


<section id="Services">
<div className="service-section text-center py-16 service bg-purple-100">       
<div className="text-center py-12 services">
  <h1 className="text-5xl  font-bold text-blue-800">Special Services</h1>
</div>
<div className="container mx-auto flex flex-wrap my-4 justify-center ">
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-12">
    <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer rounded card bg-white pb-12 hover:scale-105 transition transform duration-500 cursor-pointer">
      <div className="px-6  text-center  space-y-8">
        <img src={learn1} />
        <h1 className="font-bold mb-2 text-center text-2xl text-blue-800">Access anytime, on any
                device</h1>
        <p className=" text-base space-y-8 text-blue-800">
        Your data is stored in the cloud, allowing 
        you to run your business from your devices
        </p>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer rounded card  bg-white hover:scale-105 transition transform duration-500 cursor-pointer">
      <div className="px-6  text-center text-white space-y-12">
      <img src={report1} />
        <h1 className="font-bold mb-2 text-center text-2xl text-blue-800">Generate Report</h1>
        <p className=" text-base text-blue-800">
        allowing you to  generate 
        report , all customers ,products, quantity and invoice
        </p>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer rounded card  bg-white hover:scale-105 transition transform duration-500 cursor-pointer ">
      <div className="px-6  text-center text-white space-y-12 mb-8">
      <img src={download} />
        <h1 className="font-bold mb-2 text-center text-2xl text-blue-800">Downloading Report</h1>
        <p className=" text-base text-blue-800">
        allowing you to downloading PDF report
        </p>
      </div>
    </div>
  </div>
</div>

   </div>
   </section>

<section id="contact">
<div className="contact-section text-center py-20 ">
   
   <div className="text-center">
     <h1 className="text-5xl pt-10 pb-10 text-blue-800">Contact Us</h1>
   </div>
   <div className=" container mx-auto flex flex-wrap mb-16 justify-center mt-8 overflow-hidden">
     <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
       <div className="p-6 mr-2 bg-gray-100 bg-indigo-800 sm:rounded-lg ">
         <h1 className="text-4xl sm:text-5xl text-purple-600 font-extrabold">
           Get in touch
         </h1>
         <p className="text-normal text-lg sm:text-2xl font-medium text-purple-600 dark:text-gray-400 mt-2">
           Fill in the form to start a conversation
         </p>
        <img src={send} alt="" className="py-3 rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer"/>   
   </div>
       <form className="p-6 mr-8 flex flex-col py-28">
         <div className="flex flex-col">

         </div> 
           <label htmlFor="name" className="hidden">Full Name</label>
           <input
                           type='text'
                           className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-indigo-500"
                           id='password'
                           placeholder='Your full Name'/>
         
         <div className="flex flex-col mt-2">
         <label htmlFor="name" className="hidden">Email</label>
           <input
                           type='email'
                           className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-indigo-500"
                           id='password'
                           placeholder='Your Email' required/>
         </div>
         <div className="flex flex-col mt-2">
           <label htmlFor="tel" className="hidden">Number</label>
           <input type='tel' className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-indigo-500"id='password' placeholder='Your Number'/>
         </div> 
         <div className="flex flex-col mt-2">
           <label className="hidden">Message</label>
           <textarea name="Mes" id="Mes" placeholder="Message" className="w-100 mt-2 py-12 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" ></textarea>
         </div>
         <button type="submit" className="cursor-progress md:w-32 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-purple-800 transition ease-in-out duration-300" style={{backgroundColor: "#5F2DFE"}}>
         Send
         </button>
       </form>
     </div> 
   </div>

</div>
</section>
<Footer />

     </div>


export default Home;
