import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
const [user, updateUser] = useState(true)

const menuItems = (

    <>
        <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-visas"} >All visas</NavLink>
      </li>
      
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      {
        user && <>
        <li>
        <NavLink to={"/add-visa"}>Add Visa</NavLink>
      </li> 
      <li>
        <NavLink to={"/my-added-visa"}>My Added Visa</NavLink>
      </li> 
      <li>
        <NavLink to={"/my-visa-application"}>My Visa Application</NavLink>
      </li> 
      </> 
      }
    </>
)
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            <div>
                <NavLink>Login</NavLink>
                <NavLink>Register</NavLink>
            </div>
            :
            <div>
                <NavLink>Login</NavLink>
                <NavLink>Register</NavLink>
            </div>

          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
