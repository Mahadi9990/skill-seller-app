import React, { use } from "react";
import { Link } from "react-router";
import Header from "../components/header";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const {singIn,setuser} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setuser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  };
  return (
    <div>
      <Header/>
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Login page</h1>
        <form className="fieldset" onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            Don't have a account go to{" "}
            <Link className="text-red-600 font-bold" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
