import React from "react";
import LoginImg from "./assets/login-img.svg";
// import Logo from "../../assets/logo.svg";
import Logo from "../../assets/img/headerlogo.png";
import "./index.scss";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Login = () => (
  <main className="login-wrapper">
    <div className="login-form">
      <form className="space-y-6" method="POST">
        <Text className="form-header-wrapper">
          <div>
          <span className="ml-4 -mt-4 z-10 flex"><img style={{width:"30%"}}src={Logo}/><h1 className="-ml-8 text-4xl text-blue-800 font-mono pt-8 text-bold  z-20">MY BOOKS </h1></span>
          </div>
        </Text>
        <input type="hidden" name="remember" value="True" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login-functions-wrapper">
          <div className="flex remember-me-wrapper">
            <div>
              <input id="remember_me" name="remember_me" type="checkbox" />
            </div>
            <div>
              <label htmlFor="remember_me">Remember me</label>
            </div>
          </div>

          <div className="text-sm">
            <Link
              to="/reset-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
          <br />
          <br />
          Don't have an account? <Link to="/signup">Create one</Link>
        </div>
      </form>
    </div>
    <div className="login-cover">
      <img src={LoginImg} alt="login-cover-art" />
    </div>
  </main>
);

export default Login;
