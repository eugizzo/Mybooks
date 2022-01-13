import React from "react";
import { Link } from "react-router-dom";
import ForgotPassword from "./assets/forgot-password.svg";
import "./index.scss";

const ResetPassword = () => {
  return (
    <div className="reset-pwd-wrapper">
      <div className="form-main-wrapper">
        <div className="mb-4 text-center text-wrapper">
          <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
          <img
            src={ForgotPassword}
            alt="forgot password"
            className="forgot-pwd-icon"
          />
          <p className="mb-4 text-sm text-gray-500 tracking-wide">
            We get it, stuff happens.
            <br />
            Just enter your email address and we'll send you a link to reset
            your password.
          </p>
        </div>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded email-form-wrapper tracking-wide">
          <div className="mb-4">
            <label
              className="block mb-4 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline reset-button"
              type="button"
            >
              Reset Password
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              to="/signup"
            >
              Create an account
            </Link>
          </div>
          <div className="mt-4 text-center text-gray-500">
            Already have an account?{" "}
            <Link
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              to="/login"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
