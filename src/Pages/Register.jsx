import React, { useContext, useState } from "react";
import registerBg from "./../assets/registerBg.jpg";

import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();
  const from =location.state?.from?.pathname || '/';

  const googleSignInHandle = () =>{
    signInWithGoogle()
    .then(result =>{
      navigate(from,{replace:true});
    })
    .catch((error) => {
        
    })

  }

  const registerHandle = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    

    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // if (!passwordRegex.test(password)) {
    //   seterror(
    //     "Password Must have an Uppercase and Lowercase letter in the password, Length must be at least 6 character"
    //   );
    //   return;
    // }

    createUser(email, password)
    .then(result =>{
        navigate("/login");
        const profile ={
          displayName : name,
          photoURL : photoUrl,
        }

        updateProfile(auth.currentUser, profile)
        .then(() =>{
          seterror(null);
        })
        .catch((error))
    })
    .catch(error =>{
        console.log(error);
    })
    console.log(error)
  };
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      {/* Login Form */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={registerHandle} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Image Url</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
          <button onClick={googleSignInHandle} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login With Google
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?
          <Link className="text-primary hover:underline " to={"/login"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
