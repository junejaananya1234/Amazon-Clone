import React, { useContext, useState } from 'react';
import logo from "../../assets/amazon.png"; // Adjust the path as needed
import Layout from "../../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from '../../Context/Data/SearchContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from "../../firebase/FirebaseConfig";
import Loader from '../../Components/Loader/Loader';
import { DisplayContext } from '../../Context/Data/DisplayContext';

const SignIn = () => {
   const context = useContext(SearchContext);
   const { loading, setLoading } = context;
   const contextCreation = useContext(DisplayContext);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleSignin = async () => {
      setLoading(true);
      try {
         const result = await signInWithEmailAndPassword(auth, email, password);
         toast.success("SignIn Successfully");
         const user = result.user;
         contextCreation.updateUsername(user.displayName || ""); // update username in context
         localStorage.setItem("user", JSON.stringify(user));
         navigate("/");
      } catch (error) {
         console.log(error);
         toast.error("Failed to sign in");
      } finally {
         setLoading(false);
      }
   }

   return (
      <Layout>
         <div className="bg-gray-100 flex justify-center items-center h-screen">
            {loading && <Loader />}
            <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-md shadow-lg">
               <div className="flex justify-center mb-4">
                  <img src={logo} alt="Amazon Logo" className="h-10" />
               </div>
               <h1 className="text-2xl font-semibold mb-6">Sign-In</h1>
               <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or mobile phone number</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
               </div>
               <div className="mb-6">
                  <button type="submit" onClick={handleSignin} className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Sign-In</button>
               </div>
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
