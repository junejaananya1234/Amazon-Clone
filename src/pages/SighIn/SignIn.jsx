import React from 'react';
import logo from "../../assets/amazon.png"; // Adjust the path as needed
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Layout>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Amazon Logo" className="h-10" />
          </div>
          <h1 className="text-2xl font-semibold mb-6">Sign-In</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or mobile phone number</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Sign-In</button>
            </div>
           
          </form>
          <div className="mt-8">
            <hr className="border-gray-300" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">New to Amazon?</p>
            <Link to="/SignUp" className="w-full mt-2 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-block">Create your Amazon account</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
