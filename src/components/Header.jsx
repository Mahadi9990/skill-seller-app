import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const { user, singOutUser } = use(AuthContext);
  const handleSingout = () => {
    singOutUser()
      .then(() => {
        toast("Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <NavLink className="pr-3" to={"/"}>
        Home
      </NavLink>
      <NavLink className="pr-3" to={"/allSkills"}>
        AllSkills
      </NavLink>
      <NavLink className="pr-3" to={"/profile"}>
        Profile
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-md md:text-2xl lg:text-4xl font-bold">
            Skills Seller
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex overflow-hidden">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="">
              {user && user.photoURL ? (
                <Link to='/profile'>
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${user?.photoURL}`}
                  alt=""
                /></Link>
              ) : (
                <p className="px-3">
                  <FaUserCircle className="" />
                </p>
              )}
            </div>
          ) : (
            ""
          )}
          {user ? (
            <button onClick={handleSingout} className="btn">
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
