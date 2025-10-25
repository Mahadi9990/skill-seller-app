import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const emailRef = useRef();
  const { singIn, setuser, forgotEmail, googleSubmit } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    forgotEmail(email)
      .then(() => {
        toast("Cheack Our Email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
        // ..
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setuser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("Sing in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };
  const handleGoogle = () => {
    googleSubmit()
      .then((result) => {
        const user = result.user;
        setuser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("Sing in successfully");
        setuser(user);
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Login page</h1>
        <form className="fieldset" onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            ref={emailRef}
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
            <a onClick={handleForgotPassword} className="link link-hover">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <button onClick={handleGoogle} className="btn btn-success mt-4">
            Google
          </button>
          <p>
            Don't have a account go to{" "}
            <Link className="text-red-600 font-bold" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
