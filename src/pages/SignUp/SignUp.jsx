// src/pages/SignUp.jsx
import React, { useContext, useState} from 'react';
import logo from "../../assets/amazon.png"; // Adjust the path as needed
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { SearchContext } from '../../Context/Data/SearchContext';

import { toast } from 'react-toastify';
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import Loader from "../../Components/Loader/Loader"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(SearchContext);
  const { loading, setLoading } = context;

  const handleSignup = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required to be filled");
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(userCredential);
      const user = {
        name: name,
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        
    }
    // storing user information in firestore
    const userRef = collection(fireDB,"users") // creating reference of user
    await addDoc(userRef, user ) // a method of firebase for storing data into firebase
    toast.success("Account created successfully!!")
       setName("");
       setEmail("");
       setPassword("");
       setLoading(false);
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {loading && <Loader/>}
        <div className="w-full max-w-sm p-4 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex justify-center mb-2">
            <img src={logo} alt="Amazon Logo" className="h-10" />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Create account</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create your Amazon account"}
              </button>
            </div>
          </form>
          <div className="text-sm text-gray-600">
            By creating an account, you agree to Amazon's <Link to="#" className="text-blue-600">Conditions of Use</Link> and <Link to="#" className="text-blue-600">Privacy Notice</Link>.
          </div>
          <div className="mt-6">
            <hr className="border-gray-300" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link to="/signin" className="w-full mt-2 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 inline-block">Sign-In</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
