import React from "react";
import Header from "../components/header";
import { Link } from "react-router";

export default function Login() {
  return (
    <div>
        <Header/>
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Login page</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>Don't have a account go to <Link className="text-red-600 font-bold" to='/register' >Register</Link></p>
        </form>
      </div>
    </div>
  );
}
