import React, { useState } from "react";
import SignUpImg from "./assets/signup-img.svg";
import Logo from "../../assets/img/headerlogo.png";
import axios from "axios";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
// import ResetPassword from "../ResetPassword";


const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let item={name,email,password}
    console.log(item)

    axios.post('https://mybooks-solvit.herokuapp.com/api/use/signUp', 
    {
      name: name,
      email: email,
      password:password
      })
    
    .then(response => { 
      console.log(response.status)
      alert('success')
     if(response.status === 200){
       navigate('/login')
     }
       
    })
    .catch(error => {
        console.log(error)
        // alert('no registed')
    });
    
  }
  return (
    <main className="signup-wrapper">
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
        <span className="ml-4 -mt-4 z-10 flex"><img style={{width:"30%"}}src={Logo}/><h1 className="-ml-8 text-4xl text-blue-800 font-mono pt-8 text-bold  z-20">MY BOOKS</h1></span>
          <div className="form-group py-4">
            <input type="text" name="name" id="business-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Business Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button type="submit">Sign Up</button>
          <br />
          <br />
          Already have an account? <Link to="/login">Log in</Link>
        </form>
      </div>
      <div className="signup-cover">
        <img src={SignUpImg} alt="signup-cover-art" />
      </div>
    </main>
  )
}

export default SignUp
