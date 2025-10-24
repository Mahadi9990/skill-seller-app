import React from "react";
import Header from "../components/header";
import { Link } from "react-router";

export default function Register() {
  return (
    <div>
        <Header/>
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Register page</h1>
        <form className="fieldset">
          <label className="label">User Name</label>
          <input type="text" className="input w-full" placeholder="user name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input w-full" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Have a account go to <Link className="text-red-600 font-bold" to='/auth/login' >Login</Link></p>
        </form>
      </div>
    </div>
  );
}
