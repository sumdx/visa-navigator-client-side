import React, { useContext } from "react";
import loginBg from "./../assets/loginBg.jpg";

import { Link,NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {setUser, signInUser, signInWithGoogle, user} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from =location.state?.from?.pathname || '/';
    if(user){
      return navigate("/")
    }

    const googleSignInHandle = () =>{
        signInWithGoogle()
        .then(result =>{
          Swal.fire({
            title: "success!",
            text: "Login successfull",
            icon: "success"
          });
          navigate(from,{replace:true});
        })
        .catch((error) => {
            
        })
    
      }

    const loginHandle =(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signInUser(email, password)
        .then(result =>{
            navigate(from, { replace: true });
        })
        .catch((error) =>{
          Swal.fire({
            title: "Error!",
            text: "Something Went Wrong, Try Again. Please Check Email and Password",
            icon: "error"
          });
        })
    }   
  return (

    <div
    className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
     style={{
        backgroundImage: `url(${loginBg}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        background: `url(${loginBg}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
    }}
  >
   

    {/* Login Form */}
    <div className="relative z-10 bg-white rounded-lg shadow-lg shadow-black p-8 w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
      <form onSubmit={loginHandle} className="space-y-4">
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
          Log In
        </button>
        <button
        onClick={googleSignInHandle}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login With Google
            </button>
      </form>
      <p className="text-sm text-center mt-4">
        Don’t have an account?
        <Link className="text-accent hover:underline " to={"/register"}>Sign Up</Link>
        
      </p>
    </div>
  </div>
  );
};

export default Login;
