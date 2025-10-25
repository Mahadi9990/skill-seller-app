import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const {singIn,setuser} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
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
    navigate(`${ location.state ? location.state : '/'}`)
    toast("Sing in successfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast( errorCode , errorMessage)
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
            required
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full"
            placeholder="Password"
            required
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
         <ToastContainer/>
      </div>
    </div>
  );
}
